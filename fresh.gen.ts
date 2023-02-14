// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" }
import * as $0 from "./routes/_404.tsx"
import * as $1 from "./routes/_middleware.js"
import * as $2 from "./routes/account/index.tsx"
import * as $3 from "./routes/api/[provider]/auth.js"
import * as $4 from "./routes/api/joke.ts"
import * as $5 from "./routes/bird/[index].tsx"
import * as $6 from "./routes/bird/index.tsx"
import * as $7 from "./routes/gallery/index.tsx"
import * as $8 from "./routes/guestbook/index.tsx"
import * as $9 from "./routes/index.tsx"
import * as $10 from "./routes/login/[provider].js"
import * as $11 from "./routes/logout.jsx"
import * as $12 from "./routes/privacy.tsx"
import * as $13 from "./routes/terms.tsx"
import * as $14 from "./routes/unauthorized.tsx"
import * as $15 from "./routes/uploads/[file].js"
import * as $$0 from "./islands/Counter.tsx"

const manifest = {
  routes: {
    "./routes/_404.tsx": $0,
    "./routes/_middleware.js": $1,
    "./routes/account/index.tsx": $2,
    "./routes/api/[provider]/auth.js": $3,
    "./routes/api/joke.ts": $4,
    "./routes/bird/[index].tsx": $5,
    "./routes/bird/index.tsx": $6,
    "./routes/gallery/index.tsx": $7,
    "./routes/guestbook/index.tsx": $8,
    "./routes/index.tsx": $9,
    "./routes/login/[provider].js": $10,
    "./routes/logout.jsx": $11,
    "./routes/privacy.tsx": $12,
    "./routes/terms.tsx": $13,
    "./routes/unauthorized.tsx": $14,
    "./routes/uploads/[file].js": $15,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
  },
  baseUrl: import.meta.url,
  config,
}

export default manifest
