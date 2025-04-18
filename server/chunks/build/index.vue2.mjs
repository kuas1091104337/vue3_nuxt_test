import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import __nuxt_component_1 from './Home.vue2.mjs';
import { ref, defineComponent, withCtx, createTextVNode, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'mongoose';
import 'node:url';
import '@iconify/utils';
import 'consola';
import 'ipx';
import './server.mjs';
import 'pinia';
import 'vue-router';
import 'tailwindcss/colors';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'unhead/utils';
import 'devalue';
import 'unhead/plugins';
import '@iconify/vue';
import 'v-calendar';
import 'dayjs';
import './index.vue32.mjs';
import './Home.mjs';
import './vote.mjs';
import './Btn.vue3.mjs';

const useAdd = () => {
  const count = ref(0), addCount = () => count.value++;
  return { count, addCount };
};

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { count } = useAdd();
    const apiData = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_Home = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(_attrs)}> Page: index `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] block bg-amber-300 px-2 m-4",
        to: "/user",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` user `);
          } else {
            return [
              createTextVNode(" user ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] block bg-amber-300 px-2 m-4",
        to: "https://thecodingpro.com/courses/nuxt3",
        external: ""
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Nuxt 3 高效入門全攻略 `);
          } else {
            return [
              createTextVNode(" Nuxt 3 高效入門全攻略 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Home, null, null, _parent));
      _push(`<p class="text-center w-[90px] border bg-gray-100 rounded px-2 py-1 ml-4 my-2">${ssrInterpolate(unref(count))}</p><button class="block border bg-blue-300 rounded px-2 py-1 ml-4"> add count </button><pre class="text-white bg-black rounded px-4 py-2 m-2">${ssrInterpolate(unref(apiData))}</pre><button class="block border bg-blue-300 rounded px-2 py-1 ml-4"> get api data </button></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue2.mjs.map
