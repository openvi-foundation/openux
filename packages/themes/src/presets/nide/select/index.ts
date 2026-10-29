import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/select';
import type { SelectDesignTokens } from '@openuxkit/themes/types/select';

export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-select-label {
    line-height: 1.25rem;
}

.p-select:not(.p-select-sm, .p-select-lg) .p-select-label {
    font-size: 0.875rem;
}

.p-select-overlay {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.p-select-option-group {
    font-size: 0.75rem;
    line-height: 1rem;
}

@media (max-width: 47.99rem) {
    .p-select:not(.p-select-sm, .p-select-lg) input.p-select-label {
        font-size: 1rem;
    }
}
`
} satisfies SelectDesignTokens) as SelectDesignTokens;
