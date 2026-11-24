import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/toolbar';
import type { ToolbarDesignTokens } from '@openuxkit/themes/types/toolbar';

export default definePreset<Record<string, unknown>>(aura, {
    root: {
        padding: '0.5rem'
    },
    css: `
.p-toolbar {
    box-shadow: dt('form.field.shadow');
    font-size: 0.875rem;
    line-height: 1.25rem;
}
`
} satisfies ToolbarDesignTokens) as ToolbarDesignTokens;
