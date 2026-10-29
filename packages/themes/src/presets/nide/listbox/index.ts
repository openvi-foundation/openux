import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/listbox';
import type { ListboxDesignTokens } from '@openuxkit/themes/types/listbox';

export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-listbox {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.p-listbox-option-group {
    font-size: 0.75rem;
    line-height: 1rem;
}
`
} satisfies ListboxDesignTokens) as ListboxDesignTokens;
