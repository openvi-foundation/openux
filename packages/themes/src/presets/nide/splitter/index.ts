import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/splitter';
import type { SplitterDesignTokens } from '@openuxkit/themes/types/splitter';

// Panel text at 14px like the rest of Nide; the unitless line height scales for larger text inside.
export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-splitter {
    font-size: 0.875rem;
    line-height: 1.4286;
}
`
} satisfies SplitterDesignTokens) as SplitterDesignTokens;
