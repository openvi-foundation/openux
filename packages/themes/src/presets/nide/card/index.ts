import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/card';
import type { CardDesignTokens } from '@openuxkit/themes/types/card';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        borderRadius: '{border.radius.xl}'
    },
    body: {
        padding: '1.5rem',
        gap: '1.5rem'
    },
    caption: {
        gap: '0.5rem'
    },
    title: {
        fontSize: '1rem',
        fontWeight: '600'
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.0}'
            }
        },
        dark: {
            root: {
                background: '{surface.900}'
            }
        }
    },
    css: `
/* Body text at 14px like the rest of Nide. The unitless line height keeps a 20px line for 14px text
   and scales for larger text placed inside, such as a heading. */
.p-card {
    border: 1px solid dt('content.border.color');
    font-size: 0.875rem;
    line-height: 1.4286;
}

.p-card-title {
    line-height: 1.375;
    letter-spacing: -0.015em;
    text-wrap: balance;
}

.p-card-subtitle {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
`
} satisfies CardDesignTokens) as CardDesignTokens;
