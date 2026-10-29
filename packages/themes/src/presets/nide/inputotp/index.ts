import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/inputotp';
import type { InputOtpDesignTokens } from '@openuxkit/themes/types/inputotp';

export default definePreset<Record<string, unknown>>(aura, {
    input: {
        width: '2.25rem',
        sm: {
            width: '2rem'
        },
        lg: {
            width: '2.5rem'
        }
    }
} satisfies InputOtpDesignTokens) as InputOtpDesignTokens;
