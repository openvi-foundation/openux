import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/inputgroup';
import type { InputGroupDesignTokens } from '@openuxkit/themes/types/inputgroup';

export default definePreset<Record<string, unknown>>(aura, {
    addon: {
        padding: '{form.field.padding.y} 0.5rem',
        minWidth: '2.25rem'
    },
    css: `
.p-inputgroupaddon {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.p-inputgroupaddon .pi {
    font-size: dt('icon.size');
}
`
} satisfies InputGroupDesignTokens) as InputGroupDesignTokens;
