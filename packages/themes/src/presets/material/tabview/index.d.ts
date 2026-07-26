import type { TabViewTokenSections } from '@openuxkit/themes/types/tabview';

export * from '@openuxkit/themes/types/tabview';

declare const root: TabViewTokenSections.Root;
declare const tabList: TabViewTokenSections.TabList;
declare const tab: TabViewTokenSections.Tab;
declare const tabPanel: TabViewTokenSections.TabPanel;
declare const navButton: TabViewTokenSections.NavButton;
declare const colorScheme: TabViewTokenSections.ColorScheme;
declare const css: TabViewTokenSections.CSS;
declare const _default: {
    root: TabViewTokenSections.Root;
    tabList: TabViewTokenSections.TabList;
    tab: TabViewTokenSections.Tab;
    tabPanel: TabViewTokenSections.TabPanel;
    navButton: TabViewTokenSections.NavButton;
    colorScheme: TabViewTokenSections.ColorScheme;
    css: string;
};

export { colorScheme, css, _default as default, navButton, root, tab, tabList, tabPanel };
