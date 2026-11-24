import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/popover';
import { overlayMotion } from '../motion';
import type { PopoverDesignTokens } from '@openuxkit/themes/types/popover';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        gutter: '{anchor.gutter}'
    },
    css: `${overlayMotion}
.p-popover.p-component::before,
.p-popover.p-component::after {
    display: none;
}

.p-popover-content {
    font-size: 0.875rem;
    line-height: 1.4286;
}
`
} satisfies PopoverDesignTokens) as PopoverDesignTokens;
