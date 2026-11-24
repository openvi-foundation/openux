import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/contextmenu';
import { instantHover, overlayMotion } from '../motion';
import type { ContextMenuDesignTokens } from '@openuxkit/themes/types/contextmenu';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        background: '{overlay.popover.background}'
    },
    css: `${overlayMotion}${instantHover('div.p-contextmenu-item-content')}
.p-contextmenu {
    font-size: 0.875rem;
}

.p-contextmenu .p-contextmenu-item-label {
    line-height: 1.25rem;
}
`
} satisfies ContextMenuDesignTokens) as ContextMenuDesignTokens;
