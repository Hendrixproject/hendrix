## AWS Amplify Next.js (App Router) Starter Template

This repository provides a starter template for creating applications using Next.js (App Router) and AWS Amplify, emphasizing easy setup for authentication, API, and database capabilities.

## Tech Stack

- **Next.js 15** - React framework with App Router
- **React 19** - Latest React with enhanced features
- **Tailwind CSS 4** - Utility-first CSS framework with modern configuration
- **TypeScript** - Type-safe development
- **AWS Amplify Gen 2** - Backend infrastructure and services

## Overview

This template equips you with a foundational Next.js application integrated with AWS Amplify, streamlined for scalability and performance. It is ideal for developers looking to jumpstart their project with pre-configured AWS services like Cognito, AppSync, and DynamoDB.

## Features

- **Authentication**: Setup with Amazon Cognito for secure user authentication.
- **API**: Ready-to-use GraphQL endpoint with AWS AppSync.
- **Database**: Real-time database powered by Amazon DynamoDB.
- **Styling**: Tailwind CSS 4 with simplified configuration using `@import "tailwindcss"`.
- **Admin Interface**: Django-like admin panel with full CRUD operations and dynamic model creation.

## Getting Started

Hendrix follows a Django-like workflow: **iterate on your data model in a
personal dev backend, then deploy to production** — except the dev backend is a
real (per-developer, isolated) cloud sandbox, so it has full parity with prod
(same schema, same data client, same auth rules). No "works locally, breaks in
prod" surprises.

1. **Install dependencies:**

   ```bash
   npm install
   ```

2. **Start your sandbox** — your personal dev backend (the parity-true
   equivalent of Django's local SQLite). Leave it running; it watches
   `amplify/` and redeploys on change, and writes `amplify_outputs.json`:

   ```bash
   npx ampx sandbox
   ```

3. **Run the dev server** (second terminal):

   ```bash
   npm run dev
   ```

   > `npm run dev` needs `amplify_outputs.json`, so the sandbox must run first.

4. **Open your browser:** [http://localhost:3000](http://localhost:3000)

### Local → AWS

- **Develop:** edit models in `amplify/data/resource.ts` (or via the admin's
  Schema Builder for dynamic models). Your sandbox applies changes in seconds.
- **Deploy:** push to `main`. Amplify builds and ships the *same* schema to the
  production backend via CI/CD. The sandbox and prod are separate environments
  (separate data, separate Cognito pools) — by design.

## Admin Interface

This template includes a powerful Django-like admin interface:

- **Access**: [http://localhost:3000/admin](http://localhost:3000/admin) — gated
  behind Cognito sign-in plus membership of the `admins` group. After signing up
  once, add yourself:

  ```bash
  aws cognito-idp admin-add-user-to-group \
    --user-pool-id <auth.user_pool_id from amplify_outputs.json> \
    --username <your-email> --group-name admins
  ```

- **Persistence**: models and records are stored in **DynamoDB** (the
  `AdminModel` / `AdminRecord` models), scoped per signed-in user — not in the
  browser. Visit `/admin/setup` to seed example data.
- **Features**: Dynamic model creation, full CRUD operations, multiple field types, validation, search & filtering
- **Documentation**: See [ADMIN_COMPLETE.md](ADMIN_COMPLETE.md) for detailed usage guide

Quick start:

- Visit `/admin/setup` to seed example data
- Or go directly to `/admin` to start fresh
- Create models, add fields, manage records - all through the UI!

## Deploying to AWS

For detailed instructions on deploying your application, refer to the [deployment section](https://docs.amplify.aws/nextjs/start/quickstart/nextjs-app-router-client-components/#deploy-a-fullstack-app-to-aws) of our documentation.

## Security

See [CONTRIBUTING](CONTRIBUTING.md#security-issue-notifications) for more information.

## License

This library is licensed under the MIT-0 License. See the LICENSE file.
