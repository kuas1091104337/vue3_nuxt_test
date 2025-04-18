import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { b as useRoute, a as __nuxt_component_1 } from './server.mjs';
import { defineComponent, withAsyncContext, unref, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { u as useFetch } from './fetch.mjs';
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
import './ssr.mjs';
import './asyncData.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[courses]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const route = useRoute();
    console.log(route);
    console.log(route.fullPath);
    console.log(route.name);
    const { data: dataId } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://vue-lessons-api.vercel.app/courses/" + route.params.courses,
      "$VJNMjvuw9z"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtPage = __nuxt_component_1;
      _push(`<!--[--><p class="">courses ${ssrInterpolate(unref(route).fullPath)}</p><pre class="">${ssrInterpolate(unref(dataId))}</pre><nav class="">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-blue-300 px-2",
        to: "/courses/" + unref(route).params.courses + "/"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` dist - 內頁介紹 `);
          } else {
            return [
              createTextVNode(" dist - 內頁介紹 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-blue-300 px-2",
        to: "/courses/" + unref(route).params.courses + "/A"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` dist - A `);
          } else {
            return [
              createTextVNode(" dist - A ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-blue-300 px-2",
        to: `/courses/${unref(route).params.courses}/B`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` dist - B `);
          } else {
            return [
              createTextVNode(" dist - B ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "text-center leading-[30px] bg-blue-300 px-2",
        to: `/courses/${unref(route).params.courses}/C`
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` dist - C `);
          } else {
            return [
              createTextVNode(" dist - C ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav>`);
      _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/[courses].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_courses_.vue.mjs.map
