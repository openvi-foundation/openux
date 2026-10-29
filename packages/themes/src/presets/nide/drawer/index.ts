import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/drawer';
import type { DrawerDesignTokens } from '@openuxkit/themes/types/drawer';

export default definePreset<Record<string, unknown>>(aura, {
    title: {
        fontSize: '1rem',
        fontWeight: '600'
    }
} satisfies DrawerDesignTokens) as DrawerDesignTokens;
