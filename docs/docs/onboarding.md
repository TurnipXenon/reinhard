# Onboarding

## Setup

**TODO**

**PLACEHOLDER**

**Requirements:**

- This is a CDK project so you need the prerequisites for CDK. Look
  at [Prerequisite for the CDK Workshop](https://cdkworkshop.com/15-prerequisites.html). You need the following:
  - [AWS CLI](https://cdkworkshop.com/15-prerequisites/100-awscli.html)
  - [AWS Account and User](https://cdkworkshop.com/15-prerequisites/200-account.html)
  - [Node.js](https://cdkworkshop.com/15-prerequisites/300-nodejs.html)
  - [AWS CDK Toolkit](https://cdkworkshop.com/15-prerequisites/500-toolkit.html)
  - Note that you might need admin privileges for some of the commands!

The `cdk.json` file tells the CDK Toolkit how to execute your app.

## Useful commands

* `npm run build`   compile typescript to js
* `npm run watch`   watch for changes and compile
* `npm run test`    perform the jest unit tests
* `cdk deploy`      deploy this stack to your default AWS account/region
* `cdk diff`        compare deployed stack with current state
* `cdk synth`       emits the synthesized CloudFormation template

## MKDocs

You don't really need to run through this to make edits to MKDocs, but if you want to see the layout and what it looks
like served, check this guide.

This assumes that you have **Python** installed locally.

### MKDocs: Setup

```shell
pip install mkdocs
```

### MKDocs: Commands

When entering these commands, go to `/docs` instead of being in the project's root folder `/`.

* `mkdocs serve` - Start the live-reloading docs server.
* `mkdocs build` - Build the documentation site.
* `mkdocs -h` - Print help message and exit.

### MKDocs: Ideal workflow

1. Make changes
2. See changes made using `mkdocs serve`
3. If you edited index.md, run `go run dev/sync_mkdocs_readme.go` from the root folder `/`.
