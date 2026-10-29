import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/progressbar';
import type { ProgressBarDesignTokens } from '@openuxkit/themes/types/progressbar';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        background: 'color-mix(in srgb, {primary.color}, transparent 80%)',
        borderRadius: '9999px',
        // Tall enough for the value label, which is not rendered at 0; indeterminate bars use half.
        height: '1rem'
    },
    label: {
        fontWeight: '500'
    },
    css: `
.p-progressbar.p-progressbar-indeterminate {
    height: calc(dt('progressbar.height') / 2);
}
`
} satisfies ProgressBarDesignTokens) as ProgressBarDesignTokens;
