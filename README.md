# Reinhard

Reinhard is the infrastructure configuration for our edge service. It may also be home to the services that should be
centralized.

## Important links

- [Documentation page](https://turnipxenon.github.io/reinhard)
- [Project page](https://github.com/users/TurnipXenon/projects/8)
- [ ] Technical specification doc

**Specific sections inside the documentation page:**

- [ ] Setup?
- [ ] Quickstart
- [ ] [Onboarding guide](./docs/docs/docs/docs/onboarding.md)
- [ ] Testing locally
- [ ] Testing via dev stack
- [ ] Deploying to production
- [ ] Runbook
- [ ] API
- [ ] Technical specification (generated)
- Private workflow: https://turnipxenon.github.io/cornmaze/private_workflow/
- Code standards: https://turnipxenon.github.io/cornmaze/code_standards/

## Contributing to README.md

**Do not edit `./README.md`!** Instead, edit `./docs/docs/index.md`.

**Requirements:**

- You need Go >=1.17 installed.
- Run `go install github.com/TurnipXenon/cornmaze/dev/sync_readme@latest`

**Command:**

After editing that file, run `go run github.com/TurnipXenon/cornmaze/dev/sync_readme` from the root folder `/`. That
should automatically transform all the relative references.
