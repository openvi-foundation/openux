import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/tabview';
import type { TabViewDesignTokens } from '@openuxkit/themes/types/tabview';

export default definePreset<Record<string, unknown>>(aura, {
    tab: {
        activeBorderColor: '{text.color}',
        activeColor: '{text.color}'
    },
    css: `
.p-tabview {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
`
} satisfies TabViewDesignTokens) as TabViewDesignTokens;
