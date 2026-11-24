import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/carousel';
import type { CarouselDesignTokens } from '@openuxkit/themes/types/carousel';

export default definePreset<Record<string, unknown>>(aura, {
    indicator: {
        borderRadius: '9999px'
    },
    css: `
.p-carousel {
    font-size: 0.875rem;
    line-height: 1.4286;
}
`
} satisfies CarouselDesignTokens) as CarouselDesignTokens;
