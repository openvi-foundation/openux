import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/inplace';
import type { InplaceDesignTokens } from '@openuxkit/themes/types/inplace';

export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-inplace-display {
    font-size: 0.875rem;
    line-height: 1.25rem;
    text-decoration: underline dashed dt('text.muted.color');
    text-decoration-thickness: 1px;
    text-underline-offset: 4px;
}

/* The dashed line marks the text as editable and turns solid on hover. */
.p-inplace-display:not(.p-disabled):hover {
    text-decoration-style: solid;
}
`
} satisfies InplaceDesignTokens) as InplaceDesignTokens;
