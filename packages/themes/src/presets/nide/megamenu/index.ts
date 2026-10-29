import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/megamenu';
import type { MegaMenuDesignTokens } from '@openuxkit/themes/types/megamenu';

export default definePreset<Record<string, unknown>>(aura, {
    overlay: {
        background: '{overlay.popover.background}'
    },
    css: `
.p-megamenu {
    font-size: 0.875rem;
}

.p-megamenu .p-megamenu-item-label {
    line-height: 1.25rem;
}
`
} satisfies MegaMenuDesignTokens) as MegaMenuDesignTokens;
