import { _ as _export_sfc, a as __nuxt_component_0, b as __nuxt_component_1 } from '../server.mjs';
import { useSSRContext, defineComponent, mergeProps, withCtx, createTextVNode, createVNode, toDisplayString } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import '../../nitro/node-server.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'fs';
import 'path';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import '@vue/shared';
import 'vue-i18n';
import '@popperjs/core';
import 'lodash-unified';
import '@ctrl/tinycolor';

const javascript = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACKElEQVR4nO2WT0hVQRTGz/GZ7yEiRJJ/SsMiRaigUFwUhQgGouLChZS5Cmmj5c4kol1tRNoYLcJ0JRKUFYmUJi5EQSP/dEFxkUW4iQyUIMS+mHe5jtN7ihLeO8L54OPBmXmX+c2c+90hEolEIisFh2CTSQAcOQFIC+1GQbcM5CV2gt91SIw6we885EPm2GHarYJeMATACX7XIS3k/M+O8YZ7282xmT5CbTkjI42RGGJkHWbUVTJmX+4DgMFOQiSsx2iTkyMcHbcWYH2WkHtU18NJjILj7q9XKz7D+PPJUoCPz3U9IYEx/cKtLw4STmQzbl5jrExYfALDXbqu2uj3lJ7/64NlKRQP4MuQWa8uZXx+t9PnWQCgfPmC+eJGwozrNYz5/n0C8G2YcLYgNoFCIRdkddJyAGW1yNYGRkpyLMjpPMaPMcsBPH8fJdxvJqQfMiEar3KwACrvtwP4N+d/jlM0/7352Rk+AqgUqSphvH6kawsDJsCrDj3W/YBQeCo279tb9H+SDvgE0NNG0c+/lya36hkddwnnz5ktoe4+ar66/3i1kmLG1yG3vjxOuFSkx9TX2heAuTcaYCufPKavBg9bzZNhZhxJN68SyrcbfGyh908JqSnxF69a4e0Ts/fv3Nge+GJh/CjdMwDlpRFCUx0jJ9PNc3VNriljTD6LP3+sh3ClgpGf6+7+wVR34Y/vEdZmtkq1PQTwwyQAjpwAfG0hkUgkIj/0FxH0JVVHu8XgAAAAAElFTkSuQmCC";
const flutter = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAACXBIWXMAAAsTAAALEwEAmpwYAAABa0lEQVR4nGNgIAOkb/1mnbH926eM7d//Y+JvXzN3fHckx1wwGDV8mAVL/MpnGdELbvyLnn/9PwZecON/4upnhaOG/x86wZK48kl2DA7DYxbc+AeSh6mNW/koMmbBrT/R80HqUXHMkru/Mrd9syfe9QtQXZ6w6mE4Tl/Ov/E/YdXTFqJ9ge7ypBXPgnH5EuyQlU8bCAYV3CdoLndc9EXfdennx7GL7n4m2eXYfILscsdFX/Sdlnx97bT063+XZV++xi6594Vkl+MCjkiGwzDYErBPSHQ5Oghd9Z/Tbtazt3azn/1Hxw5zX3z1n3ptIgOlwHbGkwzLidf+WU64+h+GrSZe+69RfuIWj9vCr9yui5yoaokV1HBe94X/ed3m/ed2mvaL23lKHlUssZpw7Z86yOXOM/7zOEz4z23Xg8DUsEQ2bpsbt9Ok3ygGI/A/bqdp8JRHNuCxn5zBbdf7D6sl9r3/uR2nk19ekWMJAJPsdOf7Q3dPAAAAAElFTkSuQmCC";
const python = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAADGUlEQVR4nO2YPWgUQRTHZ2dzM5dYaCFBAiaFNkZRBMUuiI0fRdBCwSZFolj4kWCSmRMJhyksBJVgI2qhhYIpFEREczPZmUSDSBo/kIAERWMnETQmSDRPdm89g4TczCXrXnD/8Jpr9vfb92Z25hBKkiRJEoTAQTy3GWcEd7i8i7l4hZkYx0x+x1xMYi4+YCaeOlxecrncgbJZXD5vrUNsDIC5BNNyuHiITnor40ZHKHuvCjM5ZgNfKCaHYu+Ey/p3lgQflpvJ7YpVAHPZHL7NMXRK1COeq8VcvrAYpe54BZhoy4PIa39+k13mAvJiWQgUOtAu6+w6IMtEoMRyEoGYu+SEHQBN2kBTmFVToOkzUGTfUhWAoBSdAU0Plf70jLfW4fJy+KWdWMi8lySgg/oKMl1nze52ykbM5LfFhi5BAEDRs3b0+e1w0d/4HALnzQTIqBW/w0VP1PBBMXEsEFDk9LwCfnlVq4wFMBNvohcQn1H7o+p8B+jtogKK7DGjb/VWYC5mIhaY8A+CyId/sqw6WKjFBVrNBHhuezTjIn9iJt87TF5FHXLN78eBpreKwufrjNn4ZORBy1EYwVw2oc6+muBmZhgAhEHRC4bw/k50zkyAi6Pmu4i4iY4/oKbQhZFRqQOg6LAxfH6EuJkAEy2GW2A/ynoVAdTjyhrQtAc0eQua/rAC06YC6SYjAbdT7DWZZ8T61gXwXsUW0ORTJNB6Vg2mNpn1mMn1BgJDeXiUBk3eRQ6v6CQMo5SZwP5et9hX2OHiSiCgSGPk8DqoO8gmDhPS6AyjyIl/AD/tj6mVAGbiiJFAsTPMYsAr2oysw3PL5/u/J2KBKdD0NShy3XzhzhGXid2YiemSBRSN98IehMsGf7//+16wdASKZMEjpGKW/M8EyBgMkHrQ6dWg6POlJ6BI4e9H0KSrTARoi4XAR/BSG2AwXQuavgwFuuMVCEZiAWvAo4djFTC+z869gL9YXdQjExhGVaDJDTt4Mgo63YDKKaAqtvrXPlBEh0fsifAsMw6KjoCi90GRLAxUboNe5MbNmyRJElQe+QWgfIcmva+j+wAAAABJRU5ErkJggg==";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const links = [
      { name: "Javascript", link: "/", img: javascript },
      { name: "Flutter", link: "/flutter", img: flutter },
      { name: "Python", link: "/python", img: python }
    ];
    const skills = [
      {
        name: "Web Development",
        program: ["Node js", "Vue Js", "Nuxt Js"],
        bg: "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png"
      },
      {
        name: "Mobile Development",
        program: ["Node js", "Vue Js", "Nuxt Js"],
        bg: "https://www.ideamotive.co/hubfs/app%20development%20cost.png"
      },
      {
        name: "Design UI/UX",
        program: ["Node js", "Vue Js", "Nuxt Js"],
        bg: "https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/07/30182024/UX-UI-Design.jpg"
      },
      {
        name: "Machine Learning (ML)",
        program: ["Node js", "Vue Js", "Nuxt Js"],
        bg: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center w-full h-full justify-center sticky top-0 z-[1] m-0" }, _attrs))} data-v-615d92ee><div class="w-full flex justify-center flex-wrap p-5 space-x-4 items-center px-20 dark:text-gray-300" data-v-615d92ee><div class="w-[200px] auto rounded-full" data-v-615d92ee></div><div data-v-615d92ee><div class="mb-2" data-v-615d92ee><label for="name" class="dark:text-white text-4xl" data-v-615d92ee>Hang Senghong</label></div><br data-v-615d92ee><p data-v-615d92ee>Hello I&#39;m Senghong, <br data-v-615d92ee> I&#39;m Studying at `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "https://www.norton-u.com/",
        target: "_blank",
        class: "text-blue-500 hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Norton University`);
          } else {
            return [
              createTextVNode("Norton University")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`, my major Software Development </p><p data-v-615d92ee>I am working as <span data-v-615d92ee>QA</span> at <a href="https://www.techbodia.com/" target="_blank" class="text-red-500 font-medium text-sm" data-v-615d92ee>Techbodia</a></p></div></div><div class="flex w-full justify-center flex-wrap items-center md:p-10 p-4" data-v-615d92ee><!--[-->`);
      ssrRenderList(skills, (skill, index2) => {
        _push(`<div class="md:min-w-[400px] w-[350px] group max-w-md myanimation relative overflow-hidden h-[200px] dark:bg-gray-700 px-4 bg-gray-200 rounded-md mx-2 my-2 flex justify-center border-2 hover:shadow-md shadow-blue-400 border-transparent hover:border-green-500 items-center" data-v-615d92ee><img${ssrRenderAttr("src", skill.bg)} class="h-full group-hover:scale-105 w-full group-hover:duration-[1s] rounded-md absolute" alt="" data-v-615d92ee><h2 class="text-white text-3xl group-hover:text-4xl group-hover:duration-[1s] group-hover:animate-pulse font-bold z-[1]" data-v-615d92ee>${ssrInterpolate(skill.name)}</h2></div>`);
      });
      _push(`<!--]--></div><div class="flex justify-start items-center px-10 py-2 bg-gray-600 dark:bg-gray-900 w-full m-0 space-x-5" data-v-615d92ee><!--[-->`);
      ssrRenderList(links, (link, index2) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: ["text-white rounded-md px-3 py-1.5", { "border ": _ctx.$route.path === link.link }],
          to: link.link,
          key: index2
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<div class="flex space-x-2 justify-center w-full items-center" data-v-615d92ee${_scopeId}><img${ssrRenderAttr("src", link.img)} alt="" width="20" data-v-615d92ee${_scopeId}><span data-v-615d92ee${_scopeId}>${ssrInterpolate(link.name)}</span></div>`);
            } else {
              return [
                createVNode("div", { class: "flex space-x-2 justify-center w-full items-center" }, [
                  createVNode("img", {
                    src: link.img,
                    alt: "",
                    width: "20"
                  }, null, 8, ["src"]),
                  createVNode("span", null, toDisplayString(link.name), 1)
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div><div class="w-full px-10 py-5" data-v-615d92ee>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-615d92ee"]]);

export { index as default };
//# sourceMappingURL=index-0968c085.mjs.map
