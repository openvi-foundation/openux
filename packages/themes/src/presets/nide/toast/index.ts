import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/toast';
import type { ToastDesignTokens } from '@openuxkit/themes/types/toast';

const shadow = '0 4px 12px 0 rgba(0, 0, 0, 0.1)';

function card(detailColor: string) {
    return {
        background: '{overlay.popover.background}',
        borderColor: '{overlay.popover.border.color}',
        color: '{overlay.popover.color}',
        detailColor,
        shadow,
        closeButton: {
            hoverBackground: '{content.hover.background}',
            focusRing: {
                color: '{focus.ring.color}',
                shadow: 'none'
            }
        }
    };
}

function scheme(detailColor: string) {
    return {
        root: {
            blur: '0px'
        },
        info: card(detailColor),
        success: card(detailColor),
        warn: card(detailColor),
        error: card(detailColor),
        secondary: card(detailColor)
    };
}

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        width: '22.25rem',
        borderRadius: '{border.radius.lg}'
    },
    icon: {
        size: '1rem'
    },
    content: {
        padding: '1rem',
        gap: '0.625rem'
    },
    text: {
        gap: '0.125rem'
    },
    summary: {
        fontWeight: '500',
        fontSize: '0.875rem'
    },
    detail: {
        fontWeight: '400',
        fontSize: '0.875rem'
    },
    closeButton: {
        width: '1.5rem',
        height: '1.5rem',
        borderRadius: '{border.radius.sm}'
    },
    closeIcon: {
        size: '0.875rem'
    },
    colorScheme: {
        light: {
            ...scheme('{surface.700}'),
            contrast: {
                background: '{surface.950}',
                borderColor: '{surface.950}',
                color: '{surface.50}',
                detailColor: '{surface.300}',
                shadow,
                closeButton: {
                    hoverBackground: '{surface.800}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: 'none'
                    }
                }
            }
        },
        dark: {
            ...scheme('{surface.200}'),
            contrast: {
                background: '{surface.50}',
                borderColor: '{surface.50}',
                color: '{surface.950}',
                detailColor: '{surface.600}',
                shadow,
                closeButton: {
                    hoverBackground: '{surface.200}',
                    focusRing: {
                        color: '{focus.ring.color}',
                        shadow: 'none'
                    }
                }
            }
        }
    },
    // The card stays neutral and the icon carries the severity. The 600 shades keep 3:1 in both schemes.
    css: `
.p-toast-message-success .p-toast-message-icon {
    color: dt('green.600');
}

.p-toast-message-info .p-toast-message-icon {
    color: dt('blue.600');
}

.p-toast-message-warn .p-toast-message-icon {
    color: dt('amber.600');
}

.p-toast-message-error .p-toast-message-icon {
    color: dt('red.600');
}

.p-toast-message-content {
    align-items: center;
}

.p-toast-message-icon {
    margin-inline-start: -0.1875rem;
}

.p-toast-summary {
    line-height: 1.5;
}

.p-toast-detail {
    line-height: 1.4;
}

.p-toast-message-content > :has(> .p-toast-close-button) {
    align-self: flex-start;
}
`
} satisfies ToastDesignTokens) as ToastDesignTokens;
