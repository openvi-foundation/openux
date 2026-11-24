import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/picklist';
import type { PickListDesignTokens } from '@openuxkit/themes/types/picklist';

// Each column of move buttons becomes one thin bordered strip of plain icon buttons, so they sit behind the lists.
export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-picklist-controls {
    align-self: center;
    gap: 0;
    padding: 2px;
    border: 1px solid dt('content.border.color');
    border-radius: dt('border.radius.md');
}

.p-picklist-controls .p-button {
    background: transparent;
    border-color: transparent;
    color: dt('text.muted.color');
}

.p-picklist-controls .p-button:not(:disabled):hover {
    background: dt('content.hover.background');
    color: dt('text.color');
}
`
} satisfies PickListDesignTokens) as PickListDesignTokens;
