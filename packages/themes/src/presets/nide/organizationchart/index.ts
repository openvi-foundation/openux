import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/organizationchart';
import type { OrganizationChartDesignTokens } from '@openuxkit/themes/types/organizationchart';

export default definePreset<Record<string, unknown>>(aura, {
    node: {
        borderRadius: '{border.radius.lg}'
    },
    css: `
.p-organizationchart-node {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
`
} satisfies OrganizationChartDesignTokens) as OrganizationChartDesignTokens;
