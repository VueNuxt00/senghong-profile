import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'file://D:/My%20Projects/VueProjects/senghong/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file://D:/My%20Projects/VueProjects/senghong/node_modules/vue/server-renderer/index.mjs';
import { m as myInfo } from '../server.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/ofetch/dist/node.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/hookable/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/unctx/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/defu/dist/defu.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/unhead/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/@unhead/shared/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/h3/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/ufo/dist/index.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/vue-i18n/dist/vue-i18n.mjs';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/lodash-unified/import.js';
import 'file://D:/My%20Projects/VueProjects/senghong/node_modules/@vue/shared/index.js';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full justify-center items-center lg:p-10" }, _attrs))}><div class="w-[700px] relative bg-gray-800 h-screen justify-center flex items-center rounded-[10px] my-5 sm:mt-0"><div class="dark:text-white absolute top-4 font-bold text-2xl md:text-4xl hover:underline">Contact Me</div><div class="md:w-[800px] w-[calc(100vw-50px)] absolute h-[500px] bg-gray-200 rounded-[15px] shadow-md shadow-green-900"><div class="w-full relative h-full flex justify-center"><div class="flex justify-center w-[300px] md:w-[400px] bg-gray-400 py-10 -top-10 absolute -right-[10px] md:right-[-50px] md:top-10 rounded-[20px] shadow-md shadow-green-900"><div class="text-gray-100 space-y-2 justify-center flex-col flex"><div class="text-lg font-medium text-white">Hang Senghong</div><!--[-->`);
      ssrRenderList(unref(myInfo), (info, index) => {
        _push(`<div class="space-x-2"><span class="text-md font-medium">${ssrInterpolate(info.title)}:</span>`);
        if (index === 1) {
          _push(`<span class="text-blue-600"><a${ssrRenderAttr("href", info.data)}>${ssrInterpolate(info.data)}</a></span>`);
        } else {
          _push(`<span>${ssrInterpolate(info.data)}</span>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="absolute top-[480px] text-white h-full md:right-[-20px]"><button class="px-4 py-1.5 bg-yellow-500 rounded-md">Submit</button></div></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=contact-e7db4868.mjs.map
