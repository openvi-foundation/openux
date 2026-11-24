import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/dialog';
import type { DialogDesignTokens } from '@openuxkit/themes/types/dialog';

export default definePreset<Record<string, unknown>>(aura, {
    header: {
        gap: '0.5rem'
    },
    title: {
        fontSize: '1.125rem',
        fontWeight: '600'
    },
    css: `
.p-dialog-title {
    line-height: 1.375;
    letter-spacing: -0.015em;
    text-wrap: balance;
}

/* Body text at 14px like ConfirmDialog; the unitless line height scales for larger text inside. */
.p-dialog-content {
    font-size: 0.875rem;
    line-height: 1.4286;
}
`
} satisfies DialogDesignTokens) as DialogDesignTokens;
