# OpenUXKit

The framework-agnostic UI foundation behind [OpenVue](https://github.com/openvi-foundation/openvue) — permanently MIT.

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-4-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

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

## Contributors ✨

Everyone who has helped build OpenUXKit since the fork: code, docs, design, bug reports, and ideas.

<!--
  This list is maintained by hand. To credit someone, run from the repo root:
    npx all-contributors-cli@6 add <github-login> <types>   (e.g. code,bug,doc)
  and commit the updated README.md and .all-contributorsrc.
-->

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tbody>
    <tr>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/NJevric"><img src="https://avatars.githubusercontent.com/u/46942531?v=4?s=64" width="64px;" alt="Nikola Jevrić"/><br /><sub><b>Nikola Jevrić</b></sub></a><br /><a href="https://github.com/openvi-foundation/openux/commits?author=NJevric" title="Code">💻</a> <a href="#maintenance-NJevric" title="Maintenance">🚧</a> <a href="#infra-NJevric" title="Infrastructure (Hosting, Build-Tools, etc)">🚇</a> <a href="https://github.com/openvi-foundation/openux/pulls?q=is%3Apr+reviewed-by%3ANJevric" title="Reviewed Pull Requests">👀</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/dekitriv"><img src="https://avatars.githubusercontent.com/u/52245546?v=4?s=64" width="64px;" alt="dekitriv"/><br /><sub><b>dekitriv</b></sub></a><br /><a href="https://github.com/openvi-foundation/openux/commits?author=dekitriv" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/floriegl"><img src="https://avatars.githubusercontent.com/u/22279483?v=4?s=64" width="64px;" alt="floriegl"/><br /><sub><b>floriegl</b></sub></a><br /><a href="https://github.com/openvi-foundation/openux/commits?author=floriegl" title="Code">💻</a></td>
      <td align="center" valign="top" width="12.5%"><a href="https://github.com/dmitrii-nikiforov"><img src="https://avatars.githubusercontent.com/u/14326112?v=4?s=64" width="64px;" alt="Dmitrii"/><br /><sub><b>Dmitrii</b></sub></a><br /><a href="https://github.com/openvi-foundation/openux/issues?q=author%3Admitrii-nikiforov" title="Bug reports">🐛</a></td>
    </tr>
  </tbody>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

## License

MIT. See [LICENSE](LICENSE), and [NOTICE](NOTICE) for attribution of the upstream PrimeUIX work.

OpenUXKit is not affiliated with, sponsored by, or endorsed by PrimeTek Informatics.
