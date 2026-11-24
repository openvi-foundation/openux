import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/inlinemessage';
import type { InlineMessageDesignTokens } from '@openuxkit/themes/types/inlinemessage';

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
        shadow: 'none'
    };
}

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        borderRadius: '{border.radius.lg}'
    },
    text: {
        fontWeight: '400'
    },
    css: `
.p-inlinemessage-text {
    font-size: 0.875rem;
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
} satisfies InlineMessageDesignTokens) as InlineMessageDesignTokens;
