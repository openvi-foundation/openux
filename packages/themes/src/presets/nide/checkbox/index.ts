import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/checkbox';
import type { CheckboxDesignTokens } from '@openuxkit/themes/types/checkbox';

// The icon is sized for its glyph, which fills 13/14 of the icon box.
export default definePreset<Record<string, unknown>>(aura, {
    root: {
        borderRadius: '{border.radius.xs}',
        width: '1.125rem',
        height: '1.125rem',
        focusBorderColor: '{form.field.focus.border.color}',
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
        size: '0.75rem',
        sm: {
            size: '0.625rem'
        },
        lg: {
            size: '0.875rem'
        }
    }
} satisfies CheckboxDesignTokens) as CheckboxDesignTokens;
