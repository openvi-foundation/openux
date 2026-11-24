import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/timeline';
import type { TimelineDesignTokens } from '@openuxkit/themes/types/timeline';

export default definePreset<Record<string, unknown>>(aura, {
    eventMarker: {
        borderWidth: '1px',
        content: {
            insetShadow: 'none'
        }
    },
    eventConnector: {
        size: '1px'
    },
    css: `
.p-timeline {
    font-size: 0.875rem;
    line-height: 1.4286;
}
`
} satisfies TimelineDesignTokens) as TimelineDesignTokens;
