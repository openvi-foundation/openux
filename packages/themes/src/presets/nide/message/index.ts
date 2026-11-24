import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/message';
import type { MessageDesignTokens } from '@openuxkit/themes/types/message';

const card = { light: '{surface.0}', dark: '{surface.900}' };
// How much of the card colour stays in the tinted background and border, per scheme.
const tint = { light: { background: 95, border: 75 }, dark: { background: 90, border: 70 } };

// Severities get a faint tint of their own colour so an error reads apart from info at a glance.
// Secondary keeps the plain card.
function severity(color: string, scheme: keyof typeof card, tinted = true) {
    return {
        background: tinted ? `color-mix(in srgb, ${color}, ${card[scheme]} ${tint[scheme].background}%)` : card[scheme],
        borderColor: tinted ? `color-mix(in srgb, ${color}, ${card[scheme]} ${tint[scheme].border}%)` : '{content.border.color}',
        color,
        shadow: 'none',
        closeButton: {
            hoverBackground: '{content.hover.background}',
            focusRing: {
                color: '{focus.ring.color}',
                shadow: 'none'
            }
        },
        outlined: {
            color,
            borderColor: color
        },
        simple: {
            color
        }
    };
}

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        borderRadius: '{border.radius.lg}'
    },
    content: {
        padding: '0.75rem 1rem',
        gap: '0.75rem',
        sm: {
            padding: '0.5rem 0.75rem'
        },
        lg: {
            padding: '1rem 1.25rem'
        }
    },
    text: {
        fontSize: '0.875rem',
        fontWeight: '400',
        sm: {
            fontSize: '0.75rem'
        },
        lg: {
            fontSize: '1rem'
        }
    },
    icon: {
        size: '1rem',
        sm: {
            size: '0.875rem'
        },
        lg: {
            size: '1.125rem'
        }
    },
    closeButton: {
        width: '1.5rem',
        height: '1.5rem',
        borderRadius: '{border.radius.sm}'
    },
    closeIcon: {
        size: '0.875rem'
    },
    css: `
.p-message-text {
    line-height: 1.25rem;
}
`,
    colorScheme: {
        light: {
            info: severity('{blue.600}', 'light'),
            success: severity('{green.700}', 'light'),
            warn: severity('{amber.700}', 'light'),
            error: severity('{red.600}', 'light'),
            secondary: severity('{text.color}', 'light', false)
        },
        dark: {
            info: severity('{blue.400}', 'dark'),
            success: severity('{green.400}', 'dark'),
            warn: severity('{amber.400}', 'dark'),
            error: severity('{red.400}', 'dark'),
            secondary: severity('{text.color}', 'dark', false)
        }
    }
} satisfies MessageDesignTokens) as MessageDesignTokens;
