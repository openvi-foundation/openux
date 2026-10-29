import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/inplace';
import type { InplaceDesignTokens } from '@openuxkit/themes/types/inplace';

export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-inplace-display {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
`
} satisfies InplaceDesignTokens) as InplaceDesignTokens;
