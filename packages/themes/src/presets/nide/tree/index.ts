import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/tree';
import type { TreeDesignTokens } from '@openuxkit/themes/types/tree';

export default definePreset<Record<string, unknown>>(aura, {
    node: {
        borderRadius: '{border.radius.sm}'
    },
    nodeToggleButton: {
        borderRadius: '{border.radius.sm}',
        size: '1.5rem'
    }
} satisfies TreeDesignTokens) as TreeDesignTokens;
