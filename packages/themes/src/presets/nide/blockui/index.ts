import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/blockui';
import type { BlockUIDesignTokens } from '@openuxkit/themes/types/blockui';

// The base mask is rgba(0, 0, 0, 0.5): heavy grey in light mode and nearly invisible in dark mode.
// A half-transparent wash of the surface with a light blur keeps the content readable but clearly blocked.
// The mask animation reads --px-mask-background before mask.background, so this overrides only BlockUI.
export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-blockui-mask.p-overlay-mask {
    --px-mask-background: color-mix(in srgb, dt('content.background'), transparent 50%);
    backdrop-filter: blur(1px);
}
`
} satisfies BlockUIDesignTokens) as BlockUIDesignTokens;
