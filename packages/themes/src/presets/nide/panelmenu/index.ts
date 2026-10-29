import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/panelmenu';
import type { PanelMenuDesignTokens } from '@openuxkit/themes/types/panelmenu';

export default definePreset<Record<string, unknown>>(aura, {
    item: {
        borderRadius: '{border.radius.sm}'
    },
    css: `
.p-panelmenu {
    font-size: 0.875rem;
}

.p-panelmenu .p-panelmenu-header-label,
.p-panelmenu .p-panelmenu-item-label {
    line-height: 1.25rem;
}
`
} satisfies PanelMenuDesignTokens) as PanelMenuDesignTokens;
