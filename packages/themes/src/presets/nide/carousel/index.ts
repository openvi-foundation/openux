import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/carousel';
import type { CarouselDesignTokens } from '@openuxkit/themes/types/carousel';

export default definePreset<Record<string, unknown>>(aura, {
    indicator: {
        borderRadius: '9999px'
    }
} satisfies CarouselDesignTokens) as CarouselDesignTokens;
