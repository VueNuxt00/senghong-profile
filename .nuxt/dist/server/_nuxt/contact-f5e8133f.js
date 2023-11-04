import { m as myInfo, _ as _export_sfc } from "../server.mjs";
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
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full justify-center items-center lg:p-10" }, _attrs))} data-v-05cc5cc4><div class="w-[700px] relative my_animated bg-gray-800 h-screen justify-center flex items-center rounded-[10px] my-5 sm:mt-0" data-v-05cc5cc4><div class="dark:text-white absolute top-5 md:top-20 font-bold text-2xl md:text-4xl hover:underline" data-v-05cc5cc4>Contact Me</div><div class="md:w-[800px] w-[calc(100vw-50px)] absolute h-[500px] bg-gray-200 rounded-[15px] shadow-md shadow-green-900" data-v-05cc5cc4><div class="w-full relative h-full flex justify-center" data-v-05cc5cc4><div class="flex justify-center w-[300px] md:w-[400px] bg-gray-400 py-10 -top-10 absolute -right-[10px] md:right-[-50px] md:top-10 rounded-[20px] shadow-md shadow-gray-500" data-v-05cc5cc4><div class="text-gray-100 space-y-2 justify-center flex-col flex" data-v-05cc5cc4><div class="text-lg font-medium text-white" data-v-05cc5cc4>Hang Senghong</div><!--[-->`);
      ssrRenderList(unref(myInfo), (info, index) => {
        _push(`<div class="space-x-2" data-v-05cc5cc4><span class="text-md font-medium" data-v-05cc5cc4>${ssrInterpolate(info.title)}:</span>`);
        if (index === 1) {
          _push(`<span class="text-blue-600" data-v-05cc5cc4><a${ssrRenderAttr("href", info.data)} data-v-05cc5cc4>${ssrInterpolate(info.data)}</a></span>`);
        } else {
          _push(`<span data-v-05cc5cc4>${ssrInterpolate(info.data)}</span>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="absolute top-[180px] md:top-10 md:left-[60px] space-y-1 rounded-md hover:shadow-md p-2" data-v-05cc5cc4><div class="flex flex-col space-y-0" data-v-05cc5cc4><label for="name" data-v-05cc5cc4>Your Name</label><input type="text" class="px-1 rounded-md outline-none focus:ring-yellow py-1 ring-1 ring-green-500" data-v-05cc5cc4></div><div class="flex flex-col space-y-0" data-v-05cc5cc4><label for="email" data-v-05cc5cc4>Email</label><input type="text" class="px-1 rounded-md outline-none focus:ring-yellow py-1 ring-1 ring-green-500" data-v-05cc5cc4></div><div class="flex flex-col space-y-0" data-v-05cc5cc4><label for="name" data-v-05cc5cc4>Phone</label><input type="number" class="px-1 rounded-md outline-none focus:ring-yellow py-1 ring-1 ring-green-500" data-v-05cc5cc4></div><div class="flex flex-col space-y-0" data-v-05cc5cc4><label for="name" data-v-05cc5cc4>Message</label><textarea name="" id="" cols="30" rows="3" class="px-1 rounded-md outline-none focus:ring-yellow py-1 ring-1 ring-green-500" data-v-05cc5cc4></textarea></div></div><div class="absolute top-[480px] text-white h-full md:right-[-20px]" data-v-05cc5cc4><button class="px-4 py-1.5 bg-yellow-500 rounded-md" data-v-05cc5cc4>Submit</button></div></div></div></div></div>`);
    };
  }
});
const contact_vue_vue_type_style_index_0_scoped_05cc5cc4_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contact.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const contact = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-05cc5cc4"]]);
export {
  contact as default
};
//# sourceMappingURL=contact-f5e8133f.js.map
