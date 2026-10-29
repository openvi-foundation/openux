import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/metergroup';
import type { MeterGroupDesignTokens } from '@openuxkit/themes/types/metergroup';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        borderRadius: '9999px'
    },
    css: `
.p-metergroup-label-list {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
`
} satisfies MeterGroupDesignTokens) as MeterGroupDesignTokens;
