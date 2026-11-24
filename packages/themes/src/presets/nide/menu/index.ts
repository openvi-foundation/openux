import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/menu';
import { instantHover, overlayMotion } from '../motion';
import type { MenuDesignTokens } from '@openuxkit/themes/types/menu';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        background: '{overlay.popover.background}'
    },
    css: `${overlayMotion}${instantHover('div.p-menu-item-content')}
.p-menu {
    font-size: 0.875rem;
}

.p-menu .p-menu-item-label {
    line-height: 1.25rem;
}
`
} satisfies MenuDesignTokens) as MenuDesignTokens;
