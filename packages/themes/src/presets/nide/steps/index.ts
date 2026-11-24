import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/steps';
import type { StepsDesignTokens } from '@openuxkit/themes/types/steps';

export default definePreset<Record<string, unknown>>(aura, {
    itemLabel: {
        activeColor: '{text.color}'
    },
    itemNumber: {
        activeBackground: '{primary.color}',
        activeBorderColor: '{primary.color}',
        activeColor: '{primary.contrast.color}',
        fontSize: '0.875rem',
        shadow: 'none'
    },
    css: `
.p-steps .p-steps-item-number {
    border-width: 1px;
}

.p-steps .p-steps-item::before {
    border-top-width: 1px;
}

.p-steps-item-label {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

/* Completed steps and the line up to the active one read as done. */
.p-steps-item:has(~ .p-steps-item-active) .p-steps-item-number {
    border-color: dt('text.color');
    color: dt('text.color');
}

.p-steps-item:has(~ .p-steps-item-active) .p-steps-item-label {
    color: dt('text.color');
}

.p-steps-item:has(~ .p-steps-item-active)::before {
    border-color: dt('text.color');
}

/* The active item's line runs across the whole item, so only its first half (up to the number) is dark. */
.p-steps-item-active:not(:first-child)::before {
    border-image: linear-gradient(to right, dt('text.color') 50%, dt('steps.separator.background') 50%) 1;
}
`
} satisfies StepsDesignTokens) as StepsDesignTokens;
