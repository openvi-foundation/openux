import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/listbox';
import { instantHover } from '../motion';
import type { ListboxDesignTokens } from '@openuxkit/themes/types/listbox';

export default definePreset<Record<string, unknown>>(aura, {
    css: `${instantHover('li.p-listbox-option')}
.p-listbox {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.p-listbox-option-group {
    font-size: 0.75rem;
    line-height: 1rem;
}

.p-listbox-option-selected {
    font-weight: 500;
}
`
} satisfies ListboxDesignTokens) as ListboxDesignTokens;
