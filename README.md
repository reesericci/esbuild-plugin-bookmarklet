# esbuild-bookmarklet

A plugin to generate bookmarklet code with esbuild! 

### Versioning

All releases after v1.0.0 are covered under [semver](https://semver.org)

## How to use

Add `import bookmarkletPlugin from "https://deno.land/x/esbuild-bookmarklet@{VERSION}/mod.js"`

Then set the following parameters:

```
minify: true,
write: false,
format: 'iife',
plugins: [bookmarkletPlugin]
```

## Example 

```
import * as esbuild from "https://deno.land/x/esbuild@v0.17.11/mod.js";
import bookmarkletPlugin from "https://deno.land/x/esbuild-bookmarklet@{VERSION}/main.js" 

esbuild.build({
  entryPoints: ['index.js'],
  bundle: true,
  minify: true,
  outfile: 'bookmarklet.js',
  write: false,
  format: 'iife',
  plugins: [bookmarkletPlugin],
  target: ["chrome58", "firefox57", "safari11", "edge16"]
})
```
