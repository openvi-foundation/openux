import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/colorpicker';
import type { ColorPickerDesignTokens } from '@openuxkit/themes/types/colorpicker';
import { overlayMotion } from '../motion';

// Aura's panel is dark ({surface.800}) in light mode too; in Nide it matches the other popovers.
export default definePreset<Record<string, unknown>>(aura, {
    colorScheme: {
        light: {
            panel: {
                background: '{overlay.popover.background}',
                borderColor: '{overlay.popover.border.color}'
            }
        }
    },
    css: overlayMotion
} satisfies ColorPickerDesignTokens) as ColorPickerDesignTokens;
