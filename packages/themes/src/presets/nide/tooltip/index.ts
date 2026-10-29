import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/tooltip';
import type { TooltipDesignTokens } from '@openuxkit/themes/types/tooltip';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        maxWidth: '20rem',
        shadow: 'none',
        padding: '0.375rem 0.75rem',
        borderRadius: '{border.radius.md}'
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.950}',
                color: '{surface.50}'
            }
        },
        dark: {
            root: {
                background: '{surface.50}',
                color: '{surface.950}'
            }
        }
    },
    css: `
.p-tooltip-text {
    font-size: 0.75rem;
    line-height: 1rem;
}
`
} satisfies TooltipDesignTokens) as TooltipDesignTokens;
