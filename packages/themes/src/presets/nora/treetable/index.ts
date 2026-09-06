import type { TreeTableDesignTokens, TreeTableTokenSections } from '@openuxkit/themes/types/treetable';

export const root: TreeTableTokenSections.Root = {
    transitionDuration: '{transition.duration}'
};

export const header: TreeTableTokenSections.Header = {
    background: '{content.background}',
    borderColor: '{treetable.border.color}',
    color: '{content.color}',
    borderWidth: '1px 0 1px 0',
    padding: '0.75rem 1rem'
};

export const headerCell: TreeTableTokenSections.HeaderCell = {
    background: '{content.background}',
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{highlight.background}',
    borderColor: '{treetable.border.color}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    selectedColor: '{highlight.color}',
    gap: '0.5rem',
    padding: '0.75rem 1rem',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '-1px',
        shadow: '{focus.ring.shadow}'
    }
};

export const columnTitle: TreeTableTokenSections.ColumnTitle = {
    fontWeight: '700'
};

export const row: TreeTableTokenSections.Row = {
    background: '{content.background}',
    hoverBackground: '{content.hover.background}',
    selectedBackground: '{highlight.background}',
    color: '{content.color}',
    hoverColor: '{content.hover.color}',
    selectedColor: '{highlight.color}',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '-1px',
        shadow: '{focus.ring.shadow}'
    }
};

export const bodyCell: TreeTableTokenSections.BodyCell = {
    borderColor: '{treetable.border.color}',
    padding: '0.75rem 1rem',
    gap: '0.5rem'
};

export const footerCell: TreeTableTokenSections.FooterCell = {
    background: '{content.background}',
    borderColor: '{treetable.border.color}',
    color: '{content.color}',
    padding: '0.75rem 1rem'
};

export const columnFooter: TreeTableTokenSections.ColumnFooter = {
    fontWeight: '700'
};

export const footer: TreeTableTokenSections.Footer = {
    background: '{content.background}',
    borderColor: '{treetable.border.color}',
    color: '{content.color}',
    borderWidth: '0 0 1px 0',
    padding: '0.75rem 1rem'
};

export const columnResizer: TreeTableTokenSections.ColumnResizer = {
    width: '0.5rem'
};

export const resizeIndicator: TreeTableTokenSections.ResizeIndicator = {
    width: '1px',
    color: '{primary.color}'
};

export const sortIcon: TreeTableTokenSections.SortIcon = {
    color: '{text.muted.color}',
    hoverColor: '{text.hover.muted.color}',
    size: '0.875rem'
};

export const loadingIcon: TreeTableTokenSections.LoadingIcon = {
    size: '2rem'
};

export const nodeToggleButton: TreeTableTokenSections.NodeToggleButton = {
    hoverBackground: '{content.hover.background}',
    selectedHoverBackground: '{content.background}',
    color: '{text.muted.color}',
    hoverColor: '{text.color}',
    selectedHoverColor: '{primary.color}',
    size: '1.75rem',
    borderRadius: '50%',
    focusRing: {
        width: '{focus.ring.width}',
        style: '{focus.ring.style}',
        color: '{focus.ring.color}',
        offset: '{focus.ring.offset}',
        shadow: '{focus.ring.shadow}'
    }
};

export const filter: TreeTableTokenSections.Filter = {
    inlineGap: '0.5rem',
    overlaySelect: {
        background: '{overlay.select.background}',
        borderColor: '{overlay.select.border.color}',
        borderRadius: '{overlay.select.border.radius}',
        color: '{overlay.select.color}',
        shadow: '{overlay.select.shadow}'
    },
    overlayPopover: {
        background: '{overlay.popover.background}',
        borderColor: '{overlay.popover.border.color}',
        borderRadius: '{overlay.popover.border.radius}',
        color: '{overlay.popover.color}',
        shadow: '{overlay.popover.shadow}',
        padding: '{overlay.popover.padding}',
        gap: '0.5rem'
    },
    rule: {
        borderColor: '{content.border.color}'
    },
    constraintList: {
        padding: '{list.padding}',
        gap: '{list.gap}'
    },
    constraint: {
        focusBackground: '{list.option.focus.background}',
        selectedBackground: '{list.option.selected.background}',
        selectedFocusBackground: '{list.option.selected.focus.background}',
        color: '{list.option.color}',
        focusColor: '{list.option.focus.color}',
        selectedColor: '{list.option.selected.color}',
        selectedFocusColor: '{list.option.selected.focus.color}',
        separator: {
            borderColor: '{content.border.color}'
        },
        padding: '{list.option.padding}',
        borderRadius: '{list.option.border.radius}'
    }
};

export const paginatorTop: TreeTableTokenSections.PaginatorTop = {
    borderColor: '{content.border.color}',
    borderWidth: '0 0 1px 0'
};

export const paginatorBottom: TreeTableTokenSections.PaginatorBottom = {
    borderColor: '{content.border.color}',
    borderWidth: '0 0 1px 0'
};

export const colorScheme: TreeTableTokenSections.ColorScheme = {
    light: {
        root: {
            borderColor: '{surface.300}'
        },
        bodyCell: {
            selectedBorderColor: '{primary.100}'
        }
    },
    dark: {
        root: {
            borderColor: '{surface.600}'
        },
        bodyCell: {
            selectedBorderColor: '{primary.900}'
        }
    }
};

export default {
    root,
    header,
    headerCell,
    columnTitle,
    row,
    bodyCell,
    footerCell,
    columnFooter,
    footer,
    columnResizer,
    resizeIndicator,
    sortIcon,
    loadingIcon,
    nodeToggleButton,
    filter,
    paginatorTop,
    paginatorBottom,
    colorScheme
} satisfies TreeTableDesignTokens;
