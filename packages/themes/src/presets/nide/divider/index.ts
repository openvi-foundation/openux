import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/divider';
import type { DividerDesignTokens } from '@openuxkit/themes/types/divider';

export default definePreset<Record<string, unknown>>(aura, {
    content: {
        color: '{text.muted.color}'
    },
    css: `
.p-divider-content {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
`
} satisfies DividerDesignTokens) as DividerDesignTokens;
