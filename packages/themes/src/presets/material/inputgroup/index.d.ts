import type { StyleOptions } from '@openuxkit/styled';
import type { InputGroupTokenSections } from '@openuxkit/themes/types/inputgroup';

export * from '@openuxkit/themes/types/inputgroup';

declare const addon: InputGroupTokenSections.Addon;
declare const css: InputGroupTokenSections.CSS;
declare const _default: {
    addon: InputGroupTokenSections.Addon;
    css: (options: StyleOptions) => string;
};

export { addon, css, _default as default };
