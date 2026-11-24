import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/select';
import { instantHover, overlayMotion } from '../motion';
import type { SelectDesignTokens } from '@openuxkit/themes/types/select';

export default definePreset<Record<string, unknown>>(aura, {
    css: `${overlayMotion}${instantHover('li.p-select-option')}
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

.p-select-option-selected {
    font-weight: 500;
}

/* The placeholder on the filled background was 4.35:1; a quarter of the text colour lifts it to ~6:1 in both schemes. */
.p-select.p-variant-filled .p-select-label.p-placeholder {
    color: color-mix(in srgb, dt('form.field.placeholder.color'), dt('form.field.color') 25%);
}

@media (max-width: 47.99rem) {
    .p-select:not(.p-select-sm, .p-select-lg) input.p-select-label {
        font-size: 1rem;
    }
}
`
} satisfies SelectDesignTokens) as SelectDesignTokens;
