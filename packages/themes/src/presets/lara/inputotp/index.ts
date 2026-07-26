import type { InputOtpDesignTokens, InputOtpTokenSections } from '@openuxkit/themes/types/inputotp';

export const root: InputOtpTokenSections.Root = {
    gap: '0.5rem'
};

export const input: InputOtpTokenSections.Input = {
    width: '2.5rem',
    sm: {
        width: '2rem'
    },
    lg: {
        width: '3rem'
    }
};

export default {
    root,
    input
} satisfies InputOtpDesignTokens;
