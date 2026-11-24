import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/stepper';
import type { StepperDesignTokens } from '@openuxkit/themes/types/stepper';

export default definePreset<Record<string, unknown>>(aura, {
    separator: {
        size: '1px',
        margin: '0 0 0 1.5625rem'
    },
    stepTitle: {
        activeColor: '{text.color}'
    },
    stepNumber: {
        activeBackground: '{primary.color}',
        activeBorderColor: '{primary.color}',
        activeColor: '{primary.contrast.color}',
        fontSize: '0.875rem',
        shadow: 'none'
    },
    css: `
.p-stepper {
    font-size: 0.875rem;
    line-height: 1.4286;
}

.p-stepper .p-step-number {
    border-width: 1px;
}

.p-step-title {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

/* Completed steps (before the active one) read as done: dark number, ring and title. */
.p-step:has(~ .p-step-active) .p-step-number {
    border-color: dt('text.color');
    color: dt('text.color');
}

.p-step:has(~ .p-step-active) .p-step-title {
    color: dt('text.color');
}
`
} satisfies StepperDesignTokens) as StepperDesignTokens;
