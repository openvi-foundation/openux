import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/dataview';
import type { DataViewDesignTokens } from '@openuxkit/themes/types/dataview';

// Item text at 14px like the rest of Nide; the unitless line height scales for larger text inside.
export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-dataview {
    font-size: 0.875rem;
    line-height: 1.4286;
}
`
} satisfies DataViewDesignTokens) as DataViewDesignTokens;
