import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    const name = ref("");
    ref(false);
    const items = ref();
    ref([
      { id: 1, title: "Create test case", complete: false },
      { id: 2, title: "Create test case", complete: true }
    ]);
    const myData = JSON.parse(localStorage.getItem("dataList"));
    items.value = myData._value;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full p-10 space-y-2" }, _attrs))}><div class="flex space-x-3"><input type="text"${ssrRenderAttr("value", name.value)} placeholder="enter value" class="px-2 rounded-full py-1.5 focus:ring-1 outline-none focus:ring-red-500"><button class="bg-green-700 px-3 py-1.5 rounded-full text-md font-semibold text-gray-300">Add</button></div><div class="p-5 bg-gray-500 rounded-sm"><!--[-->`);
      ssrRenderList(items.value, (item, index) => {
        _push(`<ol type="A"><li><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(item.complete) ? ssrLooseContain(item.complete, null) : item.complete) ? " checked" : ""}> ${ssrInterpolate(item.title)}`);
        if (item.complete) {
          _push(`<span>✅</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li></ol>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-55c7eaba.js.map
