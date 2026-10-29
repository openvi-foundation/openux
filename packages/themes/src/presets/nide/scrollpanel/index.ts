import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/scrollpanel';
import type { ScrollPanelDesignTokens } from '@openuxkit/themes/types/scrollpanel';

export default definePreset<Record<string, unknown>>(aura, {
    bar: {
        borderRadius: '9999px'
    },
    colorScheme: {
        light: {
            bar: {
                background: '{surface.200}'
            }
        },
        dark: {
            bar: {
                background: '{surface.700}'
            }
        }
    }
} satisfies ScrollPanelDesignTokens) as ScrollPanelDesignTokens;
