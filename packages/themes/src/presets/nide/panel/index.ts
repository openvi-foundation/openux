import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/panel';
import type { PanelDesignTokens } from '@openuxkit/themes/types/panel';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        borderRadius: '{border.radius.xl}'
    },
    header: {
        padding: '1.5rem'
    },
    toggleableHeader: {
        padding: '0.875rem 1.5rem'
    },
    content: {
        padding: '0 1.5rem 1.5rem 1.5rem'
    },
    footer: {
        padding: '0 1.5rem 1.5rem 1.5rem'
    },
    css: `
/* Body text at 14px like the rest of Nide; the unitless line height scales for larger text inside. */
.p-panel {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px -1px rgba(0, 0, 0, 0.1);
    font-size: 0.875rem;
    line-height: 1.4286;
}

/* Same size as the Card title. */
.p-panel-title {
    font-size: 1rem;
    line-height: 1.375;
    letter-spacing: -0.015em;
    text-wrap: balance;
}
`
} satisfies PanelDesignTokens) as PanelDesignTokens;
