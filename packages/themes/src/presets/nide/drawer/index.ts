import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/drawer';
import type { DrawerDesignTokens } from '@openuxkit/themes/types/drawer';

export default definePreset<Record<string, unknown>>(aura, {
    title: {
        fontSize: '1rem',
        fontWeight: '600'
    },
    css: `
.p-drawer-title {
    line-height: 1.375;
    letter-spacing: -0.015em;
    text-wrap: balance;
}

.p-drawer-content {
    font-size: 0.875rem;
    line-height: 1.4286;
}
`
} satisfies DrawerDesignTokens) as DrawerDesignTokens;
