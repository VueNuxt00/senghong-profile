import { defineComponent, ref, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderClass, ssrInterpolate } from "vue/server-renderer";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const item = ref(0);
    const links = [
      { name: "Node Js", item: "1" },
      { name: "Vue3 Js", item: "2" },
      { name: "Nuxt3 Js", item: "3" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full p-4 flex md:flex-row flex-col justify-start space-x-2 items-start dark:text-white relative" }, _attrs))}><div class="flex md:flex-col flex-row space-y-4 dark:bg-gray-800 bg-gray-200 w-[200px] p-2 rounded-md sticky top-0"><!--[-->`);
      ssrRenderList(links, (link, index) => {
        _push(`<button class="${ssrRenderClass([{ "bg-gray-600": item.value === index }, "px-2 py-1 rounded-sm"])}">${ssrInterpolate(link.name)}</button>`);
      });
      _push(`<!--]--></div><div class="w-full h-[calc(100vh-200px)] bg-gray-800 rounded-sm p-5">`);
      if (item.value === 1) {
        _push(`<div><h2>Hello Vue3 js</h2><a href="https://vuejs.org/" target="_blank" class="text-green-500 underline hover:text-green-400">Go to vue web site for tutorial</a></div>`);
      } else if (item.value === 2) {
        _push(`<div> Hello Nuxt3 js </div>`);
      } else {
        _push(`<div><h2>Hello Node js</h2></div>`);
      }
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-de339225.js.map
