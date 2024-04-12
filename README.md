# pw-planner

## Setup

Make sure to install the dependencies:

```bash
pnpm i
```

### Development Server

Start the development server on `http://localhost:3000`:

```bash
pnpm run dev
```

### Production

Build the application for production:

```bash
pnpm run build
```

Locally preview production build:

```bash
pnpm run preview
```

## Development

### Stack

Both frontend and backend part of the application is using the Nuxt 3 meta-framework. Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

### Git

Commits follow the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) and [gitmoji](https://gitmoji.dev/). The [commitlint](https://commitlint.js.org/) and [husky](https://typicode.github.io/husky/) keep on guard on following those rules.

While you're developing some new functionalities or bug fixes please follow the GitHub Flow and use those prefixes on branch names:

| Type of change | Prefix |
|----------------|--------|
| Feature        | feat/  |
| Bug fix        | fix/   |
| CI/CD changes  | ci/    |
| Other stuff    | chore/ |

## Deployment

TBD
