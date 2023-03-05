# esbuild-bookmarklet

A plugin to generate bookmarklet code with esbuild! 

## How to use

Add `import bookmarkletPlugin from "https://deno.land/x/esbuild_bookmarklet/main.js"`

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
import bookmarkletPlugin from "https://deno.land/x/esbuild_bookmarklet/main.js" 

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
