import { ssrRenderAttrs } from 'file://D:/My%20Projects/VueProjects/senghong/node_modules/vue/server-renderer/index.mjs';
import { useSSRContext } from 'file://D:/My%20Projects/VueProjects/senghong/node_modules/vue/index.mjs';
import { _ as _export_sfc } from '../server.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/ofetch/dist/node.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/hookable/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/unctx/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/defu/dist/defu.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/unhead/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/h3/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/ufo/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/@vue/shared/index.js';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/vue-i18n/dist/vue-i18n.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/@popperjs/core/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/lodash-unified/import.js';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/@ctrl/tinycolor/dist/public_api.js';
import '../../nitro/nitro-prerenderer.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/destr/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/unenv/runtime/fetch/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/scule/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/klona/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/ohash/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/unstorage/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/unstorage/drivers/fs.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/unstorage/drivers/memory.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/pathe/dist/index.mjs';

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}> absolute </div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const about = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { about as default };
//# sourceMappingURL=about-aead74c3.mjs.map
