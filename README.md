# Sample Connect Error Message

This example shows the error message when trying to connect an object that does not exist. In this case, there are 2 connects that do not exist, but the error is unclear, it could be one or the other or both.

## How to use

### 1. Download example & install dependencies

Clone this repository:

```
git clone git@github.com:Pat-Ayres/prisma-error-message-reproduction.git --depth=1
```

Install npm dependencies:

```
cd prisma-error-message-reproduction
npm install
```

Note that this also generates Prisma Client JS into `node_modules/@prisma/client` via a `postinstall` hook of the `@prisma/client` package from your `package.json`.

### 2. Attempt to seed the database

```
npm run seed
```

