import type { DividerTokenSections } from '@openuxkit/themes/types/divider';

export * from '@openuxkit/themes/types/divider';

declare const root: DividerTokenSections.Root;
declare const content: DividerTokenSections.Content;
declare const horizontal: DividerTokenSections.Horizontal;
declare const vertical: DividerTokenSections.Vertical;
declare const css: DividerTokenSections.CSS;
declare const _default: {
    root: DividerTokenSections.Root;
    content: DividerTokenSections.Content;
    horizontal: DividerTokenSections.Horizontal;
    vertical: DividerTokenSections.Vertical;
    css: string;
};

export { content, css, _default as default, horizontal, root, vertical };
