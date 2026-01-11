# Repository Guidelines

## Project Structure & Module Organization
- `src/` contains the Nuxt 3 app. Key folders: `src/pages/` (routes), `src/components/` (Vue components), `src/layouts/` (page shells), `src/assets/` (processed assets), `src/public/` (static files), `src/store/` (state), `src/plugins/`, `src/middleware/`, `src/api/`, `src/hooks/`, `src/common/`, and `src/zdog/` (Zdog-related code).
- Root config lives in `nuxt.config.ts`, `tsconfig.json`, and `mise.toml`.

## Build, Test, and Development Commands
- `yarn install`: install dependencies.
- `yarn dev`: run the local dev server (Nuxt).
- `yarn build`: build the production bundle.
- `yarn preview`: serve the built app locally.
- `yarn generate`: output a static site.
- `yarn fix`: run linting and formatting (`yarn fix:lint`, `yarn fix:format`).

## Coding Style & Naming Conventions
- Indentation: 2 spaces, LF endings, trim trailing whitespace (`.editorconfig`).
- Formatting: Prettier with no semicolons, double quotes, and ES5 trailing commas (`.prettierrc.js`).
- Linting: ESLint with TypeScript + Vue 3 recommended rules (`.eslintrc.js`).
- Vue file names should be descriptive and PascalCase where appropriate, matching existing components and pages.

## Testing Guidelines
- No dedicated test runner is configured in `package.json`.
- If you add tests, document the framework and commands in this file and wire a `yarn test` script.

## Commit & Pull Request Guidelines
- Commit messages are short and often use conventional prefixes like `feat:` and `chore:`; keep them concise and action-oriented (e.g., `feat: add zenn link`).
- PRs should include a clear description, link to related issues, and add screenshots for UI changes.
- Before opening a PR, run `yarn fix` and verify the app locally with `yarn dev` or `yarn preview`.

## Configuration Tips
- Node tooling is managed with `mise.toml` and `.node-version`; align your local version with these files.
- Nuxt generates build artifacts under `.nuxt/`; avoid committing generated outputs.
