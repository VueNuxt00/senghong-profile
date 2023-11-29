import { useSSRContext } from "vue";
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
import "vue-i18n";
import "vue/server-renderer";
import "lodash-unified";
import "@vue/shared";
import "@ctrl/tinycolor";
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<!--[--><div class="text-2xl font-bold dark:text-white"> Skill Page </div><iframe src="https://www.youtube.com/" frameborder="0"></iframe><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/skill.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const skill = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  skill as default
};
//# sourceMappingURL=skill-721830b0.js.map
