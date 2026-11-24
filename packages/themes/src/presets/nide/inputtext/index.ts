import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/inputtext';
import type { InputTextDesignTokens } from '@openuxkit/themes/types/inputtext';

export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-inputtext {
    line-height: 1.25rem;
}

.p-inputtext:not(.p-inputtext-sm, .p-inputtext-lg) {
    font-size: 0.875rem;
}

/* The placeholder on the filled background was 4.35:1; a quarter of the text colour lifts it to ~6:1 in both schemes. */
.p-inputtext.p-variant-filled::placeholder {
    color: color-mix(in srgb, dt('form.field.placeholder.color'), dt('form.field.color') 25%);
}

@media (max-width: 47.99rem) {
    .p-inputtext:not(.p-inputtext-sm, .p-inputtext-lg) {
        font-size: 1rem;
    }
}
`
} satisfies InputTextDesignTokens) as InputTextDesignTokens;
