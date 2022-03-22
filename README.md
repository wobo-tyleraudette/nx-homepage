# nx-homepage

<p href="https://nx.dev"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="100"></p>

This project was generated using [Nx](https://nx.dev).

## Adding capabilities to your workspace

Nx supports many plugins which add capabilities for developing different types of applications and different tools.

These capabilities include generating applications, libraries, etc as well as the devtools to test, and build projects as well.

Applications in this repo:

- [homepage-app](apps/homepage-app/README.md) (react)
- [homepage-e2e](apps/homepage-e2e/README.md) (cypress)
- [homepage-api](apps/homepage-api/README.md) (nest)

## Getting Started

Refer to the [Wiki](https://github.com/wobo-tyleraudette/nx-homepage/wiki/Getting-Started) to get started with this repository.

Visit the [Nx Documentation](https://nx.dev) to learn more.

## Generators

(`--dry-run` shows preview only)

## React

- **Create React Component:** `nx g @nrwl/react:component --project ui --directory lib/components --dry-run`
- **Create React Hook:** `nx g @nrwl/react:hook --project ui --directory lib/hooks --dry-run`

## Redux

- **Create Redux Slice:** `nx g @nrwl/react:redux --project store --directory lib --name ${slice name} `--dry-run

## Nest

- **Create Nest Class:** `nx g @nrwl/nest:class --project api --directory lib --dry-run`
- **Create Nest Controller:** `nx g @nrwl/nest:controller --project api --directory lib --dry-run`
- **Create Nest Interceptor:** `nx g @nrwl/nest:interceptor --project api --directory lib --dry-run`
- **Create Nest Module:** `nx g @nrwl/nest:module --project api --directory lib --dry-run`
