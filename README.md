# nx-homepage

<p href="https://nx.dev"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="100"></p>

This project was generated using [Nx](https://nx.dev).

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Applications in this repo:

- [homepage-app](apps/homepage-app/README.md) (react)
- [homepage-e2e](apps/homepage-e2e/README.md) (cypress)
- [homepage-bff](apps/homepage-bff/README.md) (nest)

## Development server

Run `nx serve my-app` for a dev server. Navigate to http://localhost:4200/. The app will automatically reload if you change any of the source files.

Run `nx run-many --target=serve --projects=homepage-app,homepage-bff` to run both applications

## Build

Run `nx build my-app` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `nx test my-app` to execute the unit tests via [Jest](https://jestjs.io).

Run `nx affected:test` to execute the unit tests affected by a change.

## Running end-to-end tests

Run `nx e2e my-app` to execute the end-to-end tests via [Cypress](https://www.cypress.io).

Run `nx affected:e2e` to execute the end-to-end tests affected by a change.

## Using generators

run `nx g @nrwl/nest:module --help` to see available commands.
run `nx g @nrwl/nest:module my-module --dry run` to preview changes.

### Generate a new application

Run `nx g @nrwl/[nest, node, react]:app my-app` to generate an application.

### Generate a library

Run `nx g @nrwl/[node, react]:lib my-lib` to generate a library.

Libraries are shareable across libraries and applications. They can be imported from `@nx-homepage/mylib`.

### Code scaffolding

Run `nx g @nrwl/react:component my-component --project=ui` to generate a new component.

Run `nx g @nrwl/nest:module my-module --project=api --directory lib` to generate a new nest module.

## Understand your workspace

Run `nx graph` to see a diagram of the dependencies of your projects.

## Further help

Visit the [Nx Documentation](https://nx.dev) to learn more.
