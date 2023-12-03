import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
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
import "@vue/shared";
import "vue-i18n";
import "lodash-unified";
import "@popperjs/core";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "skill",
  __ssrInlineRender: true,
  setup(__props) {
    const data = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div class="flex justify-center items-center w-full" data-v-d62ff2bd><h1 class="dark:text-gray-100 text-black text-2xl font-medium m-2" data-v-d62ff2bd>Skills</h1></div><!--[-->`);
      ssrRenderList(unref(data), (item) => {
        _push(`<div class="dark:text-white" data-v-d62ff2bd><span data-v-d62ff2bd>${ssrInterpolate(item.name)}</span></div>`);
      });
      _push(`<!--]--><div class="w-full bg-gray-200 rounded-full" data-v-d62ff2bd><div class="h-4 bg-blue-500 rounded-full w-[3.]/4" data-v-d62ff2bd></div></div><!--]-->`);
    };
  }
});
const skill_vue_vue_type_style_index_0_scoped_d62ff2bd_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/skill.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const skill = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-d62ff2bd"]]);
export {
  skill as default
};
//# sourceMappingURL=skill-5099d96e.js.map
