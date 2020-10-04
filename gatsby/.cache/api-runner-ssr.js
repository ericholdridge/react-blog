var plugins = [{
      plugin: require('/Users/ericholdridge/Documents/Projects/react-blog/gatsby/node_modules/gatsby-plugin-styled-components/gatsby-ssr'),
      options: {"plugins":[]},
    },{
      plugin: require('/Users/ericholdridge/Documents/Projects/react-blog/gatsby/node_modules/gatsby-source-sanity/gatsby-ssr'),
      options: {"plugins":[],"projectId":"ml1gb46a","dataset":"production","watchMode":true,"token":"skg0H6E79UilqZBsuXGdvgyq3y6EXuO4MBiItp5NChIKCAgKG8pICgmxjWAtMaF6Csn7oBvAJmdcG2nThsv6SXHp1LIxHIGaoi3crMKHlELnW1OoCwvAlGKkymsxN2pYgeJ566fzlsVa1a4DMnzyNaU4h1MicxLztOa0p19391U42WtvjkOt"},
    },{
      plugin: require('/Users/ericholdridge/Documents/Projects/react-blog/gatsby/gatsby-ssr'),
      options: {"plugins":[]},
    }]
// During bootstrap, we write requires at top of this file which looks like:
// var plugins = [
//   {
//     plugin: require("/path/to/plugin1/gatsby-ssr.js"),
//     options: { ... },
//   },
//   {
//     plugin: require("/path/to/plugin2/gatsby-ssr.js"),
//     options: { ... },
//   },
// ]

const apis = require(`./api-ssr-docs`)

// Run the specified API in any plugins that have implemented it
module.exports = (api, args, defaultReturn, argTransform) => {
  if (!apis[api]) {
    console.log(`This API doesn't exist`, api)
  }

  // Run each plugin in series.
  // eslint-disable-next-line no-undef
  let results = plugins.map(plugin => {
    if (!plugin.plugin[api]) {
      return undefined
    }
    const result = plugin.plugin[api](args, plugin.options)
    if (result && argTransform) {
      args = argTransform({ args, result })
    }
    return result
  })

  // Filter out undefined results.
  results = results.filter(result => typeof result !== `undefined`)

  if (results.length > 0) {
    return results
  } else {
    return [defaultReturn]
  }
}
