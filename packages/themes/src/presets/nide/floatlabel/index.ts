import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/floatlabel';
import type { FloatLabelDesignTokens } from '@openuxkit/themes/types/floatlabel';

export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-floatlabel label {
    font-size: 0.875rem;
}
`
} satisfies FloatLabelDesignTokens) as FloatLabelDesignTokens;
