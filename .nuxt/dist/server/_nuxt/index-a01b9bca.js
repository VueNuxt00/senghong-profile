import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderList } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("senghongpic.b42c9aa9.jpg");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
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
        bg: "https://img.freepik.com/free-vector/gradient-style-ui-ux-background_52683-69621.jpg"
      }
      // {
      //     name: "Machine Learning (ML)",
      //     program: ["Node js", "Vue Js", "Nuxt Js"],
      //     bg: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Deep-Learning-vs-Machine-Learning.jpg",
      // },
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col items-center w-full justify-center top-0 m-0 md:px-[80px]" }, _attrs))} data-v-9c24a0dc><div class="flex justify-between items-start w-full space-x-2 h-full mt-4" data-v-9c24a0dc><div class="myanimation w-2/4 h-[500px] border-2 rounded-md overflow-hidden" data-v-9c24a0dc><img class="w-full h-full object-cover"${ssrRenderAttr("src", _imports_0)} alt="" data-v-9c24a0dc></div><div class="w-full" data-v-9c24a0dc><span class="dark:text-gray-100 text-[120px] font-[Roboto]" data-v-9c24a0dc>${ssrInterpolate(`seng hong`.toUpperCase())}</span><p class="dark:text-gray-100" data-v-9c24a0dc> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab quibusdam numquam veritatis, at dolorem assumenda perferendis molestiae ex porro suscipit corrupti alias ea enim recusandae voluptas quaerat exercitationem ratione cumque tempore aliquam repellendus iusto earum? Aliquid doloremque porro illum molestiae cum, ea nisi nesciunt illo accusamus expedita maxime atque laudantium placeat voluptas, distinctio ducimus hic? Id temporibus, fuga modi quisquam reprehenderit doloribus obcaecati rerum aut saepe eaque cumque illum non ut dolores! Amet inventore sequi deserunt! Ex, perferendis impedit cum recusandae saepe magni eligendi tempore modi, debitis ea doloremque a? Excepturi in fuga hic! Repellendus fugiat odit sit atque et cupiditate, sint labore cumque itaque? Repudiandae enim vero nulla ducimus omnis! Blanditiis quisquam repudiandae quod molestiae sapiente recusandae magni quae debitis numquam nesciunt architecto vitae, voluptatem vel quasi unde labore inventore voluptas eveniet. Doloribus amet aliquid ipsum tenetur rem, molestiae optio vitae dolorem odio ullam perferendis ducimus tempore similique aliquam pariatur fugiat culpa, saepe veniam consectetur minima ad voluptate labore dicta. Perspiciatis expedita possimus voluptate dicta vitae illo excepturi, illum quidem nobis animi voluptatem quam cumque cupiditate quos adipisci culpa sequi eos debitis molestiae facere dignissimos obcaecati voluptates delectus. Dolorum laborum aspernatur magnam voluptates eum tenetur sapiente omnis perspiciatis. </p></div></div><div class="flex w-full justify-center flex-wrap items-center md:p-10 p-4" data-v-9c24a0dc><!--[-->`);
      ssrRenderList(skills, (skill, index2) => {
        _push(`<div class="md:min-w-[400px] w-[350px] group max-w-md relative overflow-hidden h-[200px] dark:bg-gray-700 px-4 bg-gray-200 rounded-md mx-2 my-2 flex justify-center border-2 hover:shadow-md shadow-blue-400 border-transparent hover:border-green-500 items-center" data-v-9c24a0dc><img${ssrRenderAttr("src", skill.bg)} class="h-full group-hover:scale-125 group-hover:opacity-70 w-full group-hover:duration-[1s] rounded-md absolute" alt="" data-v-9c24a0dc><h2 class="text-white text-3xl group-hover:text-4xl group-hover:text-red-400 font-bold z-[1]" data-v-9c24a0dc>${ssrInterpolate(skill.name)}</h2></div>`);
      });
      _push(`<!--]--></div><div class="dark:text-gray-50 text-2xl flex w-full font-medium border-b dark:border-gray-400 dark:hover:text-green-600" data-v-9c24a0dc>${ssrInterpolate(`constact me`.toUpperCase())}</div></div>`);
    };
  }
});
const index_vue_vue_type_style_index_0_scoped_9c24a0dc_lang = "";
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c24a0dc"]]);
export {
  index as default
};
//# sourceMappingURL=index-a01b9bca.js.map
