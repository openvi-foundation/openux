import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/fieldset';
import type { FieldsetDesignTokens } from '@openuxkit/themes/types/fieldset';

export default definePreset<Record<string, unknown>>(aura, {
    legend: {
        fontWeight: '500'
    }
} satisfies FieldsetDesignTokens) as FieldsetDesignTokens;
