import { _ as __nuxt_component_0 } from './nuxt-link.mjs';
import { _ as _export_sfc, a as __nuxt_component_1 } from './server.mjs';
import { withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
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

const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(`<!--[--><nav class="flex">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-center leading-[30px] bg-cyan-300 px-2",
    to: "/game"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` game - index `);
      } else {
        return [
          createTextVNode(" game - index ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-center leading-[30px] bg-cyan-300 px-2",
    to: "/game/a"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` game - a `);
      } else {
        return [
          createTextVNode(" game - a ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-center leading-[30px] bg-cyan-300 px-2",
    to: "/game/b"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(` game - b `);
      } else {
        return [
          createTextVNode(" game - b ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><main>`);
  _push(ssrRenderComponent(_component_NuxtPage, null, null, _parent));
  _push(`</main><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/game.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const game = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { game as default };
//# sourceMappingURL=game.vue.mjs.map
