import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 289,
  site: "store-example",
  domains: ["store-example-deco.deno.dev"],
});
