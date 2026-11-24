import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/password';
import { overlayMotion } from '../motion';
import type { PasswordDesignTokens } from '@openuxkit/themes/types/password';

export default definePreset<Record<string, unknown>>(aura, {
    meter: {
        height: '0.5rem',
        borderRadius: '9999px'
    },
    css: `${overlayMotion}
.p-password-overlay {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
`
} satisfies PasswordDesignTokens) as PasswordDesignTokens;
