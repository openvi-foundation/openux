import type { OverlayBadgeDesignTokens, OverlayBadgeTokenSections } from '@openuxkit/themes/types/overlaybadge';

export const root: OverlayBadgeTokenSections.Root = {
    outline: {
        width: '2px',
        color: '{content.background}'
    }
};

export default {
    root
} satisfies OverlayBadgeDesignTokens;
