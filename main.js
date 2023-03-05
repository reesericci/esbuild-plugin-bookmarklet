import * as esbuild from "https://deno.land/x/esbuild@v0.17.11/mod.js";

const bookmarkletPlugin = {
  name: 'bookmarklet',
  setup(build) {
    const options = build.initialOptions
    if(options.write == true) {
      throw new Error("`write` must be set to false for this plugin to work correctly.")
    }

    if(options.format != "iife") {
      throw new Error("`format` must be set to iife for this plugin to work correctly.")
    } 

    if(options.minify != true) {
      throw new Error("`minify` must be set to true for your bookmarklet to work as expected.")
    }

    build.onEnd(async (result) => {
      if(result.outputFiles == null) {
        throw new Error("Unable to access outputFiles. This is likely due to `write` being set to true.")
      }
      const encoder = new TextEncoder()
      const js = result.outputFiles.find(f => f.path.match(/\.js$/))
      const modified = encodeURI("javascript:void " + js.text)
      js.contents = encoder.encode(modified)
      await Deno.writeTextFile(js.path, js.text)     
    })

    build.onDispose(() => {
      close()
    })
  },
}

export default bookmarkletPlugin;