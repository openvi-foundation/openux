import { definePreset } from '@openuxkit/styled';
import aura from '@openuxkit/themes/aura/tree';
import type { TreeDesignTokens } from '@openuxkit/themes/types/tree';
import { instantHover } from '../motion';

export default definePreset<Record<string, unknown>>(aura, {
    node: {
        borderRadius: '{border.radius.sm}'
    },
    nodeToggleButton: {
        borderRadius: '{border.radius.sm}',
        size: '1.5rem'
    },
    css: `${instantHover('div.p-tree-node-content')}
.p-tree {
    font-size: 0.875rem;
    line-height: 1.25rem;
}
`,
    // Hover and selected were both {surface.100}; selected now sits one step darker.
    colorScheme: {
        light: {
            node: {
                selectedBackground: '{surface.200}'
            }
        },
        dark: {
            node: {
                selectedBackground: '{surface.700}'
            }
        }
    }
} satisfies TreeDesignTokens) as TreeDesignTokens;
