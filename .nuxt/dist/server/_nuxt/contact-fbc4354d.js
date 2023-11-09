import { m as myInfo } from "../server.mjs";
import { defineComponent, ref, reactive, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderClass } from "vue/server-renderer";
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
    const isLoading = ref(false);
    const Info = reactive({
      name: "",
      email: "",
      phone: null,
      message: ""
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex w-full justify-center items-center lg:p-10" }, _attrs))}><form method="POST"><div class="w-[700px] relative my_animated dark:bg-gray-800 bg-gray-300 h-screen justify-center flex items-center rounded-[10px] my-5 sm:mt-0"><div class="dark:text-white absolute top-5 md:top-15 font-bold text-2xl md:text-4xl hover:underline">Contact Me </div><div class="md:w-[800px] w-[calc(100vw-50px)] absolute h-[500px] bg-gray-200 rounded-[15px] shadow-md shadow-green-900"><div class="w-full relative h-full flex justify-center"><div class="flex justify-center w-[300px] md:w-[400px] bg-gray-400 py-10 -top-10 absolute -right-[10px] md:right-[-50px] md:top-10 rounded-[20px] shadow-md shadow-gray-500"><div class="text-gray-100 space-y-2 justify-center flex-col flex"><div class="text-lg font-medium text-white">Hang Senghong</div><!--[-->`);
      ssrRenderList(unref(myInfo), (info, index) => {
        _push(`<div class="space-x-2"><span class="text-md font-medium">${ssrInterpolate(info.title)}:</span>`);
        if (index === 1) {
          _push(`<span class="text-blue-600"><a${ssrRenderAttr("href", info.data)}>${ssrInterpolate(info.data)}</a></span>`);
        } else {
          _push(`<span>${ssrInterpolate(info.data)}</span>`);
        }
        _push(`</div>`);
      });
      _push(`<!--]--></div></div><div class="absolute top-[180px] md:top-10 md:left-[60px] space-y-1 rounded-md hover:shadow-md p-2"><div class="flex flex-col space-y-0"><label for="name">Your Name</label><input type="text" placeholder="enter name"${ssrRenderAttr("value", unref(Info).name)} class="px-1 rounded-md outline-none focus:ring-yellow py-1 ring-1 ring-green-500"></div><div class="flex flex-col space-y-0"><label for="email">Email</label><input type="text" placeholder="enter your email address"${ssrRenderAttr("value", unref(Info).email)} class="px-1 rounded-md outline-none focus:ring-yellow py-1 ring-1 ring-green-500"></div><div class="flex flex-col space-y-0"><label for="name">Phone</label><input type="number" placeholder="enter phone number"${ssrRenderAttr("value", unref(Info).phone)} class="px-1 rounded-md outline-none focus:ring-yellow py-1 ring-1 ring-green-500"></div><div class="flex flex-col space-y-0"><label for="name">Message</label><textarea name="" id="" cols="30" rows="3" placeholder="enter your message" class="px-1 rounded-md outline-none focus:ring-yellow py-1 ring-1 ring-green-500">${ssrInterpolate(unref(Info).message)}</textarea></div></div><div class="absolute top-[480px] text-white h-full md:right-[-20px]"><button type="submit"${ssrIncludeBooleanAttr(isLoading.value) ? " disabled" : ""} class="${ssrRenderClass([{ "bg-gray-400": isLoading.value }, "px-4 py-1.5 bg-yellow-500 rounded-md"])}">`);
      if (isLoading.value) {
        _push(`<span>Sending...</span>`);
      } else {
        _push(`<span>Submit</span>`);
      }
      _push(`</button></div></div></div></div></form></div>`);
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
//# sourceMappingURL=contact-fbc4354d.js.map
