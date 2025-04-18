import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { defineComponent, withCtx, createVNode, toDisplayString } from 'vue';
import { ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "CardList",
  __ssrInlineRender: true,
  props: {
    courses: {
      type: Array,
      default: () => []
    }
  },
  setup(__props) {
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<!--[-->`);
      ssrRenderList(props.courses, (item) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "cursor-pointer w-[300px] block rounded-md opacity-85 shadow-lg overflow-hidden mx-auto mb-5 relative [transition:opacity_.3s] hover:opacity-100 min-[620px]:m-0",
          key: item.id,
          to: "/courses/" + item.id
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<img class="w-full"${ssrRenderAttr("src", item.photo)}${ssrRenderAttr("alt", item.name)}${_scopeId}><div class="text-indigo-900"${_scopeId}><h1 class="text-xl pt-4 px-6"${_scopeId}>${ssrInterpolate(item.name)}</h1><p class="text-xs px-6 py-4"${_scopeId}>${ssrInterpolate(item.description)}</p><div class="text-gray-800 flex justify-between items-center px-3.5 px-4 py-3"${_scopeId}><div class="flex items-center"${_scopeId}><img class="w-7 rounded-full mr-2"${ssrRenderAttr("src", item.teacher.img)}${ssrRenderAttr("alt", item.teacher.name)}${_scopeId}><p${_scopeId}>${ssrInterpolate(item.teacher.name)}</p></div><h2 class="text-sm"${_scopeId}>NTD: ${ssrInterpolate(item.money)}</h2></div></div>`);
            } else {
              return [
                createVNode("img", {
                  class: "w-full",
                  src: item.photo,
                  alt: item.name
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "text-indigo-900" }, [
                  createVNode("h1", { class: "text-xl pt-4 px-6" }, toDisplayString(item.name), 1),
                  createVNode("p", { class: "text-xs px-6 py-4" }, toDisplayString(item.description), 1),
                  createVNode("div", { class: "text-gray-800 flex justify-between items-center px-3.5 px-4 py-3" }, [
                    createVNode("div", { class: "flex items-center" }, [
                      createVNode("img", {
                        class: "w-7 rounded-full mr-2",
                        src: item.teacher.img,
                        alt: item.teacher.name
                      }, null, 8, ["src", "alt"]),
                      createVNode("p", null, toDisplayString(item.teacher.name), 1)
                    ]),
                    createVNode("h2", { class: "text-sm" }, "NTD: " + toDisplayString(item.money), 1)
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=CardList.vue3.mjs.map
