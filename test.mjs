import hljs from 'highlight.js/lib/core.js';
import javascript from 'highlight.js/lib/languages/javascript.js';
import vuePlugin from "@highlightjs/vue-plugin";

hljs.registerLanguage('javascript', javascript);
console.log('hljs.listLanguages()', hljs.listLanguages())
console.log('vuePlugin.hljs.listLanguages()', vuePlugin.hljs.listLanguages())

vuePlugin.hljs.registerLanguage('javascript', javascript);
console.log('vuePlugin.hljs.listLanguages()', vuePlugin.hljs.listLanguages())
