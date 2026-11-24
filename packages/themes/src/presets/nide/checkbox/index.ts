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
    },
    // The check mark pops in when the user checks the box: the icon is inserted then, and @starting-style
    // only applies to a freshly inserted element. It is limited to a hovered or keyboard-focused checkbox,
    // so boxes that render already checked (page load, a DataTable page change) do not animate, and
    // hovering or tabbing onto a checked box does not replay it.
    css: `
.p-checkbox:not(.p-disabled):is(:hover, :has(.p-checkbox-input:focus-visible)) .p-checkbox-icon {
    transition:
        transform 180ms cubic-bezier(0.16, 1, 0.3, 1),
        opacity 180ms cubic-bezier(0.16, 1, 0.3, 1),
        color dt('checkbox.transition.duration');
}

@starting-style {
    .p-checkbox:not(.p-disabled):is(:hover, :has(.p-checkbox-input:focus-visible)) .p-checkbox-icon {
        transform: scale(0.4);
        opacity: 0;
    }
}

@media (prefers-reduced-motion: reduce) {
    .p-checkbox:not(.p-disabled):is(:hover, :has(.p-checkbox-input:focus-visible)) .p-checkbox-icon {
        transition: none;
    }
}
`,
    // The border is the only sign an empty checkbox exists; {form.field.border.color} was 1.26:1.
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
} satisfies CheckboxDesignTokens) as CheckboxDesignTokens;
