import { withLive } from "$live/live.ts";

export const handler = withLive({
  siteId: 239,
  site: "store-example",
  domains: ["store-example-deco.deno.dev"],
});
