import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/multiselect';
import type { MultiSelectDesignTokens } from '@openuxkit/themes/types/multiselect';

export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-multiselect-label {
    line-height: 1.25rem;
}

.p-multiselect:not(.p-multiselect-sm, .p-multiselect-lg) .p-multiselect-label {
    font-size: 0.875rem;
}

.p-multiselect-overlay {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.p-multiselect-option-group {
    font-size: 0.75rem;
    line-height: 1rem;
}
`
} satisfies MultiSelectDesignTokens) as MultiSelectDesignTokens;
