import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/terminal';
import type { TerminalDesignTokens } from '@openuxkit/themes/types/terminal';

export default definePreset<Record<string, unknown>>(aura, {
    css: `
.p-terminal {
    font-size: 0.875rem;
    line-height: 1.25rem;
}

.p-terminal .p-terminal-prompt-value {
    font-size: inherit;
    line-height: inherit;
}

@media (max-width: 47.99rem) {
    .p-terminal {
        font-size: 1rem;
    }
}
`
} satisfies TerminalDesignTokens) as TerminalDesignTokens;
