// ex. scripts/build_npm.ts
import { build, emptyDir } from "https://deno.land/x/dnt/mod.ts";

await emptyDir("./npm");

await build({
  entryPoints: ["./mod.js"],
  scriptModule: false,
  typeCheck: false,
  test: false,
  declaration: false,
  outDir: "./npm",
  shims: {
    // see JS docs for overview and more options
    deno: true,
  },
  package: {
    // package.json properties
    name: "esbuild-bookmarklet",
    version: Deno.args[0],
    description: "An esbuild plugin to generate bookmarklets!",
    license: "GPL-v3.0-or-later",
    repository: {
      type: "git",
      url: "git+https://github.com/reesericci/esbuild-bookmarklet.git",
    },
    bugs: {
      url: "https://github.com/reesericci/esbuild-bookmarklet/issues",
    },
  },
});

// post build steps
Deno.copyFileSync("LICENSE", "npm/LICENSE");
Deno.copyFileSync("README.md", "npm/README.md");
