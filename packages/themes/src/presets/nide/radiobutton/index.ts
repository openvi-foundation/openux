import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/radiobutton';
import type { RadioButtonDesignTokens } from '@openuxkit/themes/types/radiobutton';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        width: '1.125rem',
        height: '1.125rem',
        checkedBackground: '{form.field.background}',
        checkedHoverBackground: '{form.field.background}',
        focusBorderColor: '{form.field.focus.border.color}',
        // A checked radio keeps a primary ring, like a checked checkbox is filled with primary.
        checkedBorderColor: '{primary.color}',
        checkedHoverBorderColor: '{primary.hover.color}',
        checkedFocusBorderColor: '{form.field.focus.border.color}',
        sm: {
            width: '1rem',
            height: '1rem'
        },
        lg: {
            width: '1.375rem',
            height: '1.375rem'
        }
    },
    icon: {
        size: '0.625rem',
        checkedColor: '{primary.color}',
        checkedHoverColor: '{primary.color}',
        sm: {
            size: '0.5rem'
        },
        lg: {
            size: '0.75rem'
        }
    },
    colorScheme: {
        light: {
            root: {
                borderColor: '{surface.400}',
                hoverBorderColor: '{surface.500}'
            }
        },
        dark: {
            root: {
                borderColor: 'rgba(255, 255, 255, 0.3)',
                hoverBorderColor: 'rgba(255, 255, 255, 0.45)'
            }
        }
    }
} satisfies RadioButtonDesignTokens) as RadioButtonDesignTokens;
