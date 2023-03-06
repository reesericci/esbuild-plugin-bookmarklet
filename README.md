# esbuild-plugin-bookmarklet

![license type](https://img.shields.io/github/license/reesericci/esbuild-plugin-bookmarklet)
![this is an ESM module](https://img.shields.io/badge/module%20type-ESM-purple)
![deno supported](https://img.shields.io/badge/runtime-deno-black)
![node supported](https://img.shields.io/badge/runtime-node-green)
![npm version](https://img.shields.io/npm/v/esbuild-plugin-bookmarklet)

An ESM-only, Deno-first (supports node) plugin to generate bookmarklet code with esbuild! 

### Versioning

All releases after v1.0.0 are covered under [semver](https://semver.org)

## How to use

### Deno
Add to the top of your build script:

```javascript
import bookmarkletPlugin from "https://deno.land/x/esbuild_plugin_bookmarklet@{VERSION}/mod.js"
```

Replacing `{VERSION}` with the current released version

### Node

- Run `npm i esbuild-plugin-bookmarklet`

- Add to the top of your build script:

  ```javascript
  import bookmarkletPlugin from "esbuild-plugin-bookmarklet"
  ```

---

Then set the following parameters in your esbuild build script:

```javascript
minify: true,
write: false,
format: 'iife',
plugins: [bookmarkletPlugin]
```

## Example esbuild build scripts

### Deno
```javascript
import * as esbuild from "https://deno.land/x/esbuild@v0.17.11/mod.js";
import bookmarkletPlugin from "https://deno.land/x/esbuild_plugin_bookmarklet@{VERSION}/main.js" 

esbuild.build({
  entryPoints: ['index.js'], // points to normal javascript
  bundle: true,
  minify: true,
  outfile: 'bookmarklet.js', // where to save bookmarklet javascript
  write: false,
  format: 'iife',
  plugins: [bookmarkletPlugin],
  target: ["chrome58", "firefox57", "safari11", "edge16"]
})
```

### Node

```javascript
import * as esbuild from "esbuild";
import bookmarkletPlugin from "esbuild-plugin-bookmarklet" 

esbuild.build({
  entryPoints: ['index.js'], // points to normal javascript
  bundle: true,
  minify: true,
  outfile: 'bookmarklet.js', // where to save bookmarklet javascript
  write: false,
  format: 'iife',
  plugins: [bookmarkletPlugin],
  target: ["chrome58", "firefox57", "safari11", "edge16"]
})
```
