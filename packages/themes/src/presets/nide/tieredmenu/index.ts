import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/tieredmenu';
import type { TieredMenuDesignTokens } from '@openuxkit/themes/types/tieredmenu';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        background: '{overlay.popover.background}'
    },
    css: `
.p-tieredmenu {
    font-size: 0.875rem;
}

.p-tieredmenu .p-tieredmenu-item-label {
    line-height: 1.25rem;
}
`
} satisfies TieredMenuDesignTokens) as TieredMenuDesignTokens;
