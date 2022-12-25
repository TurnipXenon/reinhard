# PLACEHOLDER

**PLACEHOLDER**

## Github housekeeping
- [ ] Do we want this to be public?
- [ ] Remove wiki
- [ ] Do not allow merge commits and rebase mergine
- [ ] Default message for squash merging should be pull request title
- [ ] Automatically delete head branches
- [ ] If asset heavy, include Git LFS and run `git lfs install` locally
- [ ] Protect main branch
  - [ ]  Require a pull request before merging
    - [ ] Require approvals and dismiss stale request approvals
  - [ ]  Require status check to pass and require branches to be up to date before merging

## Important links

- [ ] Replace all PLACEHOLDER text
- [ ] Documentation page
- [ ] Project page
- [ ] Technical specification doc

**Specific sections inside the documentation page:**

- [ ] Setup?
- [ ] Quickstart
- [ ] [Onboarding guide](./docs/docs/onboarding.md)
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
