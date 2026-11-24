import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/toggleswitch';
import type { ToggleSwitchDesignTokens } from '@openuxkit/themes/types/toggleswitch';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        width: '2rem',
        // 18px: a 16px handle + 1px gap on every side. 1.15rem (18.4px) left the handle off the pixel grid.
        height: '1.125rem',
        borderRadius: '9999px',
        gap: '1px',
        slideDuration: '0.15s'
    },
    handle: {
        size: '1rem'
    },
    // The handle stretches while pressed, like a native switch, and keeps its far edge in place when checked.
    css: `
.p-toggleswitch-handle {
    transition-property: background, color, inset-inline-start, width, box-shadow;
}

.p-toggleswitch:not(.p-disabled):active .p-toggleswitch-handle {
    width: calc(dt('toggleswitch.handle.size') + 4px);
}

.p-toggleswitch-checked:not(.p-disabled):active .p-toggleswitch-handle {
    inset-inline-start: calc(dt('toggleswitch.width') - dt('toggleswitch.handle.size') - 4px - dt('toggleswitch.gap'));
}

@media (prefers-reduced-motion: reduce) {
    .p-toggleswitch-handle {
        transition: none;
    }
}
`,
    colorScheme: {
        light: {
            root: {
                background: '{surface.200}',
                hoverBackground: '{surface.200}',
                disabledBackground: '{surface.100}',
                checkedBackground: '{primary.color}',
                checkedHoverBackground: '{primary.color}'
            },
            handle: {
                background: '{surface.0}',
                hoverBackground: '{surface.0}',
                disabledBackground: '{surface.300}',
                checkedBackground: '{surface.0}',
                checkedHoverBackground: '{surface.0}',
                color: '{text.muted.color}',
                hoverColor: '{text.muted.color}',
                checkedColor: '{primary.color}',
                checkedHoverColor: '{primary.color}'
            }
        },
        dark: {
            root: {
                background: 'rgba(255, 255, 255, 0.12)',
                hoverBackground: 'rgba(255, 255, 255, 0.12)',
                disabledBackground: '{surface.800}',
                checkedBackground: '{primary.color}',
                checkedHoverBackground: '{primary.color}'
            },
            handle: {
                background: '{surface.50}',
                hoverBackground: '{surface.50}',
                disabledBackground: '{surface.600}',
                checkedBackground: '{primary.contrast.color}',
                checkedHoverBackground: '{primary.contrast.color}',
                color: '{surface.900}',
                hoverColor: '{surface.900}',
                checkedColor: '{primary.color}',
                checkedHoverColor: '{primary.color}'
            }
        }
    }
} satisfies ToggleSwitchDesignTokens) as ToggleSwitchDesignTokens;
