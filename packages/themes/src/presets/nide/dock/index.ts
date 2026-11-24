import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/dock';
import type { DockDesignTokens } from '@openuxkit/themes/types/dock';

// Aura's Dock is translucent white, made for a wallpaper; on a light surface it had no edge at all.
export default definePreset<Record<string, unknown>>(aura, {
    colorScheme: {
        light: {
            root: {
                background: 'color-mix(in srgb, {surface.0}, transparent 15%)',
                borderColor: '{content.border.color}'
            }
        },
        dark: {
            root: {
                background: 'rgba(255, 255, 255, 0.06)',
                borderColor: 'rgba(255, 255, 255, 0.12)'
            }
        }
    },
    css: `
.p-dock-list-container {
    backdrop-filter: blur(12px);
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
}
`
} satisfies DockDesignTokens) as DockDesignTokens;
