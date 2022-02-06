# Project Shelf

## Description

Project Shelf aims to give a space for developers to showcase their projects, get feedback and connect with other developers.

## Technology stack

- Backend: [Node.js](https://nodejs.org/en/), [GraphQL Nexus](https://nexusjs.org/), [Prisma](https://www.prisma.io/) and [Apollo Server](https://www.apollographql.com/docs/apollo-server/#:~:text=Apollo%20Server%20is%20an%20open,use%20data%20from%20any%20source.)
- Frontend: [React.js](https://reactjs.org/), [Next.js](https://nextjs.org/) and [Apollo Client](https://www.apollographql.com/docs/react/)

## Monorepo Setup

This monorepo contains

- `apps/api`: [Node.js](https://nodejs.org/en/) app, provides all the apis and connects to the database.
- `apps/web`: Main app powered by [Next.js](https://nextjs.org)
- `apps/admin`: [Next.js](https://nextjs.org) app for admin purposes
- `packages/ui`: Internal component library used by both `web` and `admin` applications
- `packages/apollo-hooks`: Libary of apollo-graphql hooks generated by [GraphQL Code Generator](https://www.graphql-code-generator.com/) for `web` and `admin` app to consume

## Requirements

- ### General

  - **Yarn**

  This repository uses [Yarn](https://classic.yarnpkg.com/lang/en/) as a package manager.

- ### Backend

  - **PostgreSQL Database**

    To run the backend, a connection to a database is needed. The easiest way to run a Postgres DB locally is via [Docker](https://www.docker.com/).

    Once you have Docker installed run this command:

    ```
    docker run --detach --publish 5432:5432 -e POSTGRES_PASSWORD=postgres --name project-sheld postgres:10.12
    ```

    Another alternative is running a PostgreSQL DB in the cloud with services like [fly.io](https://fly.io/) or [Heroku](https://dashboard.heroku.com) wich have a a free tier.

  - **Cloudinary**

    All the images are saved in [Cloudinary](https://cloudinary.com/), the free tier is more than enough for development.

  - **Enviroment Variables**
    Inside the `apps/api` directory
    ```
    DATABASE_URL="database url, if running with docker it would be: postgresql://postgres:postgres@localhost:5432/project-shelf"
    CLOUDINARY_URL="Your Cloudinary key goes here"
    JWT_SECRET="Any random string, only for development"
    SERVER_URL="http://localhost"
    ```

- ### Frontend

  - **Github OAuth**
    Github is being used as an auth provider, you will need to [create an OAuth](https://docs.github.com/en/developers/apps/building-oauth-apps/creating-an-oauth-app) app on your github account with these settings:

    ![](https://res.cloudinary.com/ivanms1/image/upload/v1644078662/Screen_Shot_2022-02-06_at_1.28.01_AM_aa0u5l.png)

  - **Enviroment Variables**
    Inside the `apps/web` and `apps/admin` directories
    ```
    GITHUB_CLIENT_ID="your oatuh github client id"
    GITHUB_CLIENT_SECRET="your oatuh github client secret"
    JWT_SECRET="some random string, only for development"
    NEXTAUTH_URL="http://localhost:3000"
    NEXT_PUBLIC_SERVER_URL="http://localhost:8080/graphql"
    NEXT_PUBLIC_CLOUD_NAME="cloudinary id"
    ```

## Running the app

- ### General

  - Build the hooks library
    ```
    yarn build:hooks
    ```
  - Install all dependencies, on the root folder run

    ```
    yarn install
    ```

- ### Backend

  #### Only when running the app for the first time

  - Generate data source client code with prisma

  ```
  npx prisma generate
  ```

  - Initialize Database

  ```
  npx prisma migrate dev
  ```

  #### After

  - Run app

  ```
  yarn dev:api
  ```

- ### Frontend
  - Start the app
    ```
    yarn dev:web
    ```
