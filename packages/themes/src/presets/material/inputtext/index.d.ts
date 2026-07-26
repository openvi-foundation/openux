import type { StyleOptions } from '@openuxkit/styled';
import type { InputTextTokenSections } from '@openuxkit/themes/types/inputtext';

export * from '@openuxkit/themes/types/inputtext';

declare const root: InputTextTokenSections.Root;
declare const css: InputTextTokenSections.CSS;
declare const _default: {
    root: InputTextTokenSections.Root;
    css: (options: StyleOptions) => string;
};

export { css, _default as default, root };
