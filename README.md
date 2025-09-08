This is a prototype of NextJS api connecting to SQLite DB via Prisma, done for learning purposes.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Usage

DB schema:

```
CREATE TABLE "Test" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "key" TEXT NOT NULL,
    "value" TEXT NOT NULL
);
```

### Available api methods

- GET data

```
curl --location 'http://localhost:3000/api/test'
```

- POST data

```
curl --location 'http://localhost:3000/api/test' \
--header 'Content-Type: application/json' \
--data '{"key": "5",
"value": "pikachu"}'
```
