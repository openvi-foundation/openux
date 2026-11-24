import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/datatable';
import { instantHover, overlayMotion } from '../motion';
import type { DataTableDesignTokens } from '@openuxkit/themes/types/datatable';

export default definePreset<Record<string, unknown>>(aura, {
    css: `${overlayMotion}${instantHover('.p-datatable .p-datatable-tbody > tr, li.p-datatable-filter-constraint, th.p-datatable-header-cell, thead.p-datatable-thead > tr > th')}
.p-datatable {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
`,
    headerCell: {
        selectedBackground: '{content.background}',
        selectedColor: '{text.color}',
        padding: '0.625rem 0.5rem'
    },
    columnTitle: {
        fontWeight: '500'
    },
    bodyCell: {
        padding: '0.5rem'
    },
    footerCell: {
        padding: '0.5rem'
    },
    columnFooter: {
        fontWeight: '500'
    },
    header: {
        padding: '0.75rem'
    },
    footer: {
        padding: '0.75rem'
    },
    rowToggleButton: {
        borderRadius: '{border.radius.sm}',
        size: '1.5rem'
    },
    colorScheme: {
        light: {
            root: {
                borderColor: '{content.border.color}'
            },
            // Stripe, hover and selected are three distinct steps; hover used to equal the stripe.
            row: {
                hoverBackground: '{surface.100}',
                selectedBackground: 'color-mix(in srgb, {surface.200}, {surface.100})',
                stripedBackground: '{surface.50}'
            },
            bodyCell: {
                selectedBorderColor: '{content.border.color}'
            }
        },
        dark: {
            root: {
                borderColor: '{content.border.color}'
            },
            row: {
                hoverBackground: '{surface.800}',
                selectedBackground: 'color-mix(in srgb, {surface.800}, {surface.700})',
                stripedBackground: 'color-mix(in srgb, {surface.800}, transparent 70%)'
            },
            bodyCell: {
                selectedBorderColor: '{content.border.color}'
            }
        }
    }
} satisfies DataTableDesignTokens) as DataTableDesignTokens;
