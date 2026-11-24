import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/fieldset';
import type { FieldsetDesignTokens } from '@openuxkit/themes/types/fieldset';

export default definePreset<Record<string, unknown>>(aura, {
    legend: {
        fontWeight: '500'
    },
    css: `
.p-fieldset {
    font-size: 0.875rem;
    line-height: 1.4286;
}
`
} satisfies FieldsetDesignTokens) as FieldsetDesignTokens;
