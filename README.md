

Added export of `hljs` in `node_modules/\@highlightjs/vue-plugin/src/vue.js` after `yarn`
```
export default {
  install(Vue) {
    Vue.component('highlightjs', Component);
  },
  component: Component,
  hljs,
};
```

```
$ node test.mjs 
hljs.listLanguages() [ 'javascript' ]
vuePlugin.hljs.listLanguages() []
vuePlugin.hljs.listLanguages() [ 'javascript' ]
```

```
$ npm ls
highlightjs-modules@1.0.0 /Users/matt/clones/mhio/highlightjs-modules
├─┬ @highlightjs/vue-plugin@0.9.0
│ └── highlight.js@10.7.2
└── highlight.js@10.7.0
```
