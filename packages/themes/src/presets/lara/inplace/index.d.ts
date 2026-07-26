import type { InplaceTokenSections } from '@openuxkit/themes/types/inplace';

export * from '@openuxkit/themes/types/inplace';

declare const root: InplaceTokenSections.Root;
declare const display: InplaceTokenSections.Display;
declare const _default: {
    root: InplaceTokenSections.Root;
    display: InplaceTokenSections.Display;
};

export { _default as default, display, root };
