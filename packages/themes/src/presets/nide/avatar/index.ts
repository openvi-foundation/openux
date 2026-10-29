import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/avatar';
import type { AvatarDesignTokens } from '@openuxkit/themes/types/avatar';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        color: '{text.color}'
    },
    colorScheme: {
        light: {
            root: {
                background: '{surface.100}'
            }
        },
        dark: {
            root: {
                background: '{surface.800}'
            }
        }
    }
} satisfies AvatarDesignTokens) as AvatarDesignTokens;
