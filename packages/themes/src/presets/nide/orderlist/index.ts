import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/orderlist';
import type { OrderListDesignTokens } from '@openuxkit/themes/types/orderlist';

// The four move buttons become one thin bordered strip of plain icon buttons, so they sit behind the list.
export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-orderlist-controls {
    align-self: center;
    gap: 0;
    padding: 2px;
    border: 1px solid dt('content.border.color');
    border-radius: dt('border.radius.md');
}

.p-orderlist-controls .p-button {
    background: transparent;
    border-color: transparent;
    color: dt('text.muted.color');
}

.p-orderlist-controls .p-button:not(:disabled):hover {
    background: dt('content.hover.background');
    color: dt('text.color');
}
`
} satisfies OrderListDesignTokens) as OrderListDesignTokens;
