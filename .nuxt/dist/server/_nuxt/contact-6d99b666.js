import { m as myInfo } from "../server.mjs";
import { defineComponent, ref, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "destr";
import "devalue";
import "defu";
import "klona";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "vue-i18n";
import "lodash-unified";
import "@vue/shared";
import "@ctrl/tinycolor";
const elBadge = "";
const elMessage = "";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "contact",
  __ssrInlineRender: true,
  setup(__props) {
    ref("test");
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
export {
  _sfc_main as default
};
//# sourceMappingURL=contact-6d99b666.js.map
