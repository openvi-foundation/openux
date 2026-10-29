import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/selectbutton';
import type { SelectButtonDesignTokens } from '@openuxkit/themes/types/selectbutton';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        borderRadius: '{border.radius.lg}'
    }
} satisfies SelectButtonDesignTokens) as SelectButtonDesignTokens;
