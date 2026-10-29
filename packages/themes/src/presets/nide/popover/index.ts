import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/popover';
import type { PopoverDesignTokens } from '@openuxkit/themes/types/popover';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        gutter: '{anchor.gutter}'
    },
    css: `
.p-popover.p-component::before,
.p-popover.p-component::after {
    display: none;
}
`
} satisfies PopoverDesignTokens) as PopoverDesignTokens;
