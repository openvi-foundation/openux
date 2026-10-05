# Contributing to OpenUXKit

Thanks for considering a contribution. OpenUXKit is the styling, theming and utility layer underneath [OpenVue](https://github.com/openvi-foundation/openvue), maintained by a small team of volunteers.

## Before you start

- Search existing [issues](https://github.com/openvi-foundation/openux/issues) to check your bug or idea hasn't already been reported.
- For anything beyond a small fix, open an issue first so we can discuss the approach before you put time into a PR.
- Not sure whether a bug is in OpenUXKit or OpenVue? Report it in [OpenVue](https://github.com/openvi-foundation/openvue/issues) and we will move it if needed. Questions and support requests belong in [OpenVue Discussions](https://github.com/openvi-foundation/openvue/discussions).

## Reporting a bug

Include:

- The affected package and version (for example `@openuxkit/styles@1.1.0`), plus the OpenVue version if you hit it through a component.
- A minimal reproducer. A StackBlitz or CodeSandbox with OpenVue works well, since most issues show up through a component.
- What you expected to happen and what happened instead.

## Development setup

This is a pnpm monorepo. Every package lives in `packages/`.

```bash
git clone https://github.com/openvi-foundation/openux.git
cd openux
pnpm run init
```

Useful commands:

```bash
pnpm run build:packages            # build every package
pnpm --filter @openuxkit/utils build   # build a single package
pnpm run type:check
pnpm test
pnpm run lint
pnpm run format
```

`submodules/` holds read-only upstream clones kept for reference. Don't edit them; they are not built or published.

### Trying a change in OpenVue

Most changes here are only visible through OpenVue components. With both repositories cloned side by side, build the package you changed, then point OpenVue at it with an override in OpenVue's root `package.json`:

```json
"pnpm": {
    "overrides": {
        "@openuxkit/utils": "link:../openux/packages/utils"
    }
}
```

Run `pnpm install` in OpenVue to apply it. Remove the override and run `pnpm install` again before committing anything in the OpenVue repository.

## Submitting a pull request

1. Fork the repository.
2. Create a branch off `main` (`git checkout -b fix/your-fix-name`).
3. Make your change, and add or update tests where the package has them.
4. Run `pnpm run lint` and `pnpm run format` before committing.
5. Add a changelog entry if the change is user-facing (see below).
6. Link the related issue in your PR description. The PR check fails without one.
7. Open the PR against `main`.

Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/) and are checked on commit. Allowed types are `feat`, `fix`, `docs`, `style`, `refactor`, `test` and `chore`, for example `fix(zindex): release previous entry when re-setting an element`.

Small, focused PRs are easier to review and get merged faster than large ones that touch many packages at once.

## Design tokens and presets

When a change adds or renames a design token, add it to every preset (Aura, Lara, Material and Nora) in `@openuxkit/themes`, so no theme is left with a missing value. A component's base CSS in `@openuxkit/styles` and its tokens usually change together in the same PR.

## Keeping the changelog

[CHANGELOG.md](CHANGELOG.md) is written by hand in [Keep a Changelog](https://keepachangelog.com/en/1.1.0/) format. Each `@openuxkit/*` package is versioned on its own, so start every bullet with the package it affects.

If your change is something a consumer would notice, add a bullet under `## [Unreleased]` in the same PR, under `Added`, `Changed`, `Fixed`, `Deprecated` or `Removed`. Write it for someone upgrading, not for someone reading the diff:

```md
## [Unreleased]

### Fixed

- `@openuxkit/styles`: `Toast` no longer shifts the messages below it while one is dismissed.
```

Skip it for internal refactors, test-only changes, CI and documentation typos. At release time the maintainers move the entries under the new package version and date.

## Code style

Formatting is enforced by Prettier and ESLint (`pnpm run format:check`, `pnpm run lint`). Match the existing patterns in a package rather than introducing a new style.
