# Changelog

All notable changes to OpenUXKit are documented in this file. The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).

OpenUXKit forked from [PrimeUIX](https://github.com/primefaces/primeuix). Pre-fork history lives in the upstream repository.

Each `@openuxkit/*` package is versioned and released on its own, so every entry names the package it belongs to.

## [Unreleased]

## [@openuxkit/utils 1.0.1] - 2026-10-05

### Fixed

- `ZIndex.set()` releases an element's previous z-index before assigning a new one. Calling `set()` again on an element that already had a z-index, as `Toast` in OpenVue does for every new message, left the old value behind in the internal stack. Every overlapping toast pushed all later auto z-index values up by one, and a single leftover value lifted every overlay, dropdown and menu opened afterwards by about 1000 (a `Select` overlay went from 1001 to 2106) until the page was reloaded. Stacking order is unchanged: a re-set element still lands on top, so a toast fired from an open dialog still renders above it. Contributed by [@floriegl](https://github.com/floriegl). ([#3](https://github.com/openvi-foundation/openux/pull/3), [openvue#659](https://github.com/openvi-foundation/openvue/issues/659))

## [@openuxkit/styles 1.1.0 and @openuxkit/themes 1.1.0] - 2026-09-06

### Added

- `TreeTable` filtering styles, so OpenVue's `TreeTable` can offer the same filter row and filter menu as `DataTable`. `@openuxkit/styles` adds the CSS for the inline filter, the filter menu overlay, constraint list, operator dropdown, rule list and the add/remove rule and button bar actions.
- A `treetable.filter` token section in every preset (Aura, Lara, Material and Nora) in `@openuxkit/themes`, covering the inline gap, the select and popover overlays, rule borders and constraint list items, with matching TypeScript types. The values are derived from the existing overlay and list tokens, so the filter UI follows a theme's current look without extra configuration.

## [@openuxkit/styles 1.0.2] - 2026-09-02

### Fixed

- `Toast` no longer nudges the messages under it in the last frame of a dismissal. A leaving message collapsed its height and margin but kept its border width, so the rest of the stack shifted by a couple of pixels as it vanished. The border now collapses with everything else, and the leave animation holds its final frame.

## [@openuxkit/styles 1.0.1] - 2026-08-23

### Fixed

- `Toast` and `Image` apply their backdrop blur in Safari and other WebKit browsers, which still need the `-webkit-backdrop-filter` prefix. The surface behind a toast and the toolbar over an image preview were rendering unblurred there. Contributed by [@dekitriv](https://github.com/dekitriv).

## [1.0.0] - 2026-08-17

The first stable release of every `@openuxkit/*` package: `forms`, `headless`, `locale`, `mcp`, `motion`, `styled`, `styles`, `themes` and `utils`. From here each package follows semantic versioning on its own.

### Changed

- Packages that depend on each other now require `^1.0.0` of one another instead of the alpha.

### Fixed

- `@openuxkit/themes`: the `tokens` entry point declared its types as `./tokens/index.d.ts`, a file the package does not ship. It now points to `./tokens/index.d.mts`, so TypeScript resolves types for `@openuxkit/themes/tokens`.

## [0.0.1-alpha.1] - 2026-07-26

The first release under the `@openuxkit` npm scope, published for every package.

### Changed

- Forked from PrimeUIX `main` at commit [`b9467bc`](https://github.com/openvi-foundation/openux/commit/b9467bc). At that point the packages were at: `@primeuix/styles` and `@primeuix/themes` 2.0.3, `@primeuix/styled` 0.7.4, `@primeuix/utils` 0.6.4, `@primeuix/mcp` 1.0.1, `@primeuix/forms` 0.1.0, `@primeuix/motion` 0.0.11, `@primeuix/locale` 0.0.2 and `@primeuix/headless` 0.0.0-alpha.1.
- Every package is renamed from `@primeuix/*` to `@openuxkit/*`, and the packages import each other under the new names. To move a project over, replace `@primeuix/` with `@openuxkit/` in your dependencies and imports. The code is otherwise unchanged from upstream.
- Each package carries the OpenVi Foundation copyright next to PrimeTek's in its `LICENSE`, and the repository adds a `NOTICE` file describing the fork. The license stays MIT.
