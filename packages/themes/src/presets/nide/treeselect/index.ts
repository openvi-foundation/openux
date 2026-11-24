import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/treeselect';
import { overlayMotion } from '../motion';
import type { TreeSelectDesignTokens } from '@openuxkit/themes/types/treeselect';

export default definePreset<Record<string, unknown>>(aura, {
    css: `${overlayMotion}
.p-treeselect-label {
    line-height: 1.25rem;
}

.p-treeselect:not(.p-treeselect-sm, .p-treeselect-lg) .p-treeselect-label {
    font-size: 0.875rem;
}

.p-treeselect-overlay {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
`
} satisfies TreeSelectDesignTokens) as TreeSelectDesignTokens;
