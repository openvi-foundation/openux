import type { StyleOptions } from '@openuxkit/styled';
import type { ToggleButtonTokenSections } from '@openuxkit/themes/types/togglebutton';

export * from '@openuxkit/themes/types/togglebutton';

declare const root: ToggleButtonTokenSections.Root;
declare const icon: ToggleButtonTokenSections.Icon;
declare const content: ToggleButtonTokenSections.Content;
declare const colorScheme: ToggleButtonTokenSections.ColorScheme;
declare const css: ToggleButtonTokenSections.CSS;
declare const _default: {
    root: ToggleButtonTokenSections.Root;
    icon: ToggleButtonTokenSections.Icon;
    content: ToggleButtonTokenSections.Content;
    colorScheme: ToggleButtonTokenSections.ColorScheme;
    css: (options: StyleOptions) => string;
};

export { colorScheme, content, css, _default as default, icon, root };
