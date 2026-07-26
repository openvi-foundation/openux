import type { PopoverTokenSections } from '@openuxkit/themes/types/popover';

export * from '@openuxkit/themes/types/popover';

declare const root: PopoverTokenSections.Root;
declare const content: PopoverTokenSections.Content;
declare const css: PopoverTokenSections.CSS;
declare const _default: {
    root: PopoverTokenSections.Root;
    content: PopoverTokenSections.Content;
    css: string;
};

export { content, css, _default as default, root };
