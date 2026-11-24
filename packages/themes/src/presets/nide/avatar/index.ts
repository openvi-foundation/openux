import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/avatar';
import type { AvatarDesignTokens } from '@openuxkit/themes/types/avatar';

export default definePreset<Record<string, unknown>>(aura, {
    // 16px initials under a 12px overlap were cut by the next avatar in a group ("AN" read as "A").
    root: {
        fontSize: '0.875rem',
        color: '{text.color}'
    },
    group: {
        offset: '-0.5rem'
    },
    css: `
.p-avatar-label {
    font-weight: 500;
}
`,
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
