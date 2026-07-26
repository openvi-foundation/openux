# OpenUXKit

The framework-agnostic UI foundation behind [OpenVue](https://github.com/open-vue/openvue) — permanently MIT.

OpenUXKit is a fork of [PrimeUIX](https://github.com/primefaces/primeuix), taken from the last MIT-licensed source and maintained independently by the OpenVi Foundation. It exists so that OpenVue owns its own styling and theming engine end to end, rather than resolving it at runtime from a scope it does not control.

## Packages

| Package                                    | Description                                                    |
| ------------------------------------------ | -------------------------------------------------------------- |
| [`@openuxkit/utils`](packages/utils)       | DOM, object, event bus, uuid and z-index helpers               |
| [`@openuxkit/styled`](packages/styled)     | CSS-in-JS theming engine                                       |
| [`@openuxkit/styles`](packages/styles)     | Per-component base CSS                                         |
| [`@openuxkit/themes`](packages/themes)     | Theme presets (aura, lara, material, nora) and the theming API |
| [`@openuxkit/forms`](packages/forms)       | Form state and validation resolvers                            |
| [`@openuxkit/locale`](packages/locale)     | Locale and i18n utilities                                      |
| [`@openuxkit/motion`](packages/motion)     | Motion and transition utilities                                |
| [`@openuxkit/headless`](packages/headless) | Headless UI utilities                                          |
| [`@openuxkit/mcp`](packages/mcp)           | Shared Model Context Protocol server core                      |

## Development

```bash
pnpm install
pnpm run build:packages   # build all packages
pnpm run type:check       # typecheck all packages
pnpm test                 # run the test suites
```

`submodules/` holds read-only upstream clones kept purely for reference. They are not source, are not built, and are not published.

## License

MIT. See [LICENSE](LICENSE), and [NOTICE](NOTICE) for attribution of the upstream PrimeUIX work.

OpenUXKit is not affiliated with, sponsored by, or endorsed by PrimeTek Informatics.
