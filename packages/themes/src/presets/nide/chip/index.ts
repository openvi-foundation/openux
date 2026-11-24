import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/chip';
import type { ChipDesignTokens } from '@openuxkit/themes/types/chip';

export default definePreset<Record<string, unknown>>(aura, {
    // 14px text on a 20px line + 2 x 4px gives a 28px chip, between Tag (22px) and Button (36px).
    root: {
        borderRadius: '{border.radius.sm}',
        paddingX: '0.625rem',
        paddingY: '0.25rem',
        gap: '0.375rem'
    },
    removeIcon: {
        size: '0.875rem'
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.100}',
                color: '{surface.900}'
            },
            icon: {
                color: '{surface.900}'
            },
            removeIcon: {
                color: '{surface.500}'
            }
        },
        dark: {
            root: {
                background: '{surface.800}',
                color: '{surface.50}'
            },
            icon: {
                color: '{surface.50}'
            },
            removeIcon: {
                color: '{surface.400}'
            }
        }
    },
    // Also covers the chips inside AutoComplete and InputChips, which render a Chip.
    css: `
.p-chip {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
`
} satisfies ChipDesignTokens) as ChipDesignTokens;
