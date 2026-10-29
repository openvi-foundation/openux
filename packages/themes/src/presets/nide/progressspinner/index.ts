import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/progressspinner';
import type { ProgressSpinnerDesignTokens } from '@openuxkit/themes/types/progressspinner';

export default definePreset<Record<string, unknown>>(aura, {
    colorScheme: {
        light: {
            root: {
                colorOne: '{primary.color}',
                colorTwo: '{primary.color}',
                colorThree: '{primary.color}',
                colorFour: '{primary.color}'
            }
        },
        dark: {
            root: {
                colorOne: '{primary.color}',
                colorTwo: '{primary.color}',
                colorThree: '{primary.color}',
                colorFour: '{primary.color}'
            }
        }
    }
} satisfies ProgressSpinnerDesignTokens) as ProgressSpinnerDesignTokens;
