import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/tabmenu';
import type { TabmenuDesignTokens } from '@openuxkit/themes/types/tabmenu';

export default definePreset<Record<string, unknown>>(aura, {
    item: {
        activeBorderColor: '{text.color}',
        activeColor: '{text.color}',
        padding: '0.75rem 1rem',
        fontWeight: '500'
    },
    itemIcon: {
        activeColor: '{text.color}'
    },
    activeBar: {
        height: '2px',
        bottom: '-1px',
        background: '{text.color}'
    }
} satisfies TabmenuDesignTokens) as TabmenuDesignTokens;
