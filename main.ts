/// <reference no-default-lib="true" />
/// <reference lib="dom" />
/// <reference lib="dom.iterable" />
/// <reference lib="dom.asynciterable" />
/// <reference lib="deno.ns" />

import { start } from "$fresh/server.ts"
import manifest from "@/fresh.gen.ts"

import twindPlugin from "$fresh/plugins/twind.ts"
import twindConfig from "@/twind.config.ts"

import { PORT } from "@/utils/config.js"

import css from "@/plugins/css/mod.js"

await start(manifest, {
  port: PORT,
  plugins: [twindPlugin(twindConfig), css()],
})
