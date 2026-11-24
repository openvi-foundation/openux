import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/slider';
import type { SliderDesignTokens } from '@openuxkit/themes/types/slider';

export default definePreset<Record<string, unknown>>(aura, {
    track: {
        borderRadius: '9999px',
        size: '0.375rem'
    },
    handle: {
        width: '1rem',
        height: '1rem',
        background: '{primary.color}',
        hoverBackground: '{primary.color}',
        content: {
            width: 'calc(1rem - 2px)',
            height: 'calc(1rem - 2px)',
            shadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1)'
        },
        focusRing: {
            width: '4px'
        }
    },
    colorScheme: {
        light: {
            track: {
                background: '{surface.100}'
            },
            handle: {
                content: {
                    background: '{surface.0}',
                    hoverBackground: '{surface.0}'
                }
            }
        },
        dark: {
            track: {
                background: '{surface.800}'
            },
            handle: {
                content: {
                    background: '{surface.0}',
                    hoverBackground: '{surface.0}'
                }
            }
        }
    },
    css: `
/* Half strength on hover, so keyboard focus (full ring) still reads differently from the pointer. */
.p-slider:not(.p-disabled) .p-slider-handle:hover {
    box-shadow: 0 0 0 4px color-mix(in srgb, dt('focus.ring.color'), transparent 50%);
}

/* The handle grows a little while it is dragged. */
.p-slider-handle {
    transition:
        background dt('slider.transition.duration'),
        color dt('slider.transition.duration'),
        border-color dt('slider.transition.duration'),
        box-shadow dt('slider.transition.duration'),
        outline-color dt('slider.transition.duration'),
        transform 150ms;
}

.p-slider:not(.p-disabled) .p-slider-handle:active {
    transform: scale(1.15);
}

@media (prefers-reduced-motion: reduce) {
    .p-slider-handle {
        transition: none;
    }
}
`
} satisfies SliderDesignTokens) as SliderDesignTokens;
