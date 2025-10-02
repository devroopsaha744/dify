# Copilot Instructions for Dify

## Project Architecture
- **Backend API** (`api/`): Python Flask, Domain-Driven Design, Celery for async tasks (Redis broker).
- **Frontend Web** (`web/`): Next.js 15, TypeScript, React 19, strict ESLint/Prettier, i18n (English source: `web/i18n/en-US/`).
- **Docker** (`docker/`): Containerized deployment, middleware setup (PostgreSQL, Redis, Weaviate).

## Key Workflows
- **Backend**: Use `uv run --project api <command>` for all Python commands.
  - Start API: `./dev/start-api`
  - Start worker: `./dev/start-worker`
  - Run tests: `uv run --project api pytest`
  - Code quality: `./dev/reformat`, `ruff`, `basedpyright`
- **Frontend**:
  - Lint: `pnpm lint`
  - Fix lint: `pnpm eslint-fix`
  - Test: `pnpm test`

## Conventions & Patterns
- **Python**: Type hints required, avoid `Any`, implement `__repr__`/`__str__`.
- **TypeScript**: Strict config, avoid `any`, use ESLint/Prettier.
- **Comments**: Explain "why", not "what".
- **File Creation**: Edit existing files unless new file is required.
- **Internationalization**: All user-facing text must use i18n keys (edit `web/i18n/en-US/`).
- **Async Tasks**: Use Celery (Redis broker).
- **API Endpoints**: Controller in `api/controllers/`, service logic in `api/services/`, update routes in controller's `__init__.py`, tests in `api/tests/`.

## Integration Points
- **Middleware**: Use Docker Compose (`docker/docker-compose.middleware.yaml`).
- **Environment Variables**: Copy `.env.example` to `.env` (backend) or `.env.local` (frontend).
- **Frontend/Backend Communication**: API URLs set via env vars (`NEXT_PUBLIC_API_PREFIX`).

## Examples
- To add an API endpoint: create controller, service, update route, add tests.
- To add a translation: edit the relevant module in `web/i18n/en-US/`.

## Code Quality
- Always run `./dev/reformat` before backend commits.
- Do not create documentation files unless requested.

---
For questions or unclear conventions, review `AGENTS.md`, `README.md`, or ask for clarification.
