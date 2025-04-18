import _sfc_main$1 from './SvgIcon.vue2.mjs';
import { defineComponent, withAsyncContext, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { d as useRuntimeConfig } from './server.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const config = useRuntimeConfig();
    const { data, refresh } = ([__temp, __restore] = withAsyncContext(() => useFetch(`${config.public.apiUrl}/api/banner`, {
      headers: {
        Authorization: `Bearer ${config.token}`
      }
    }, "$70PBz55a5C")), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_SvgIcon = _sfc_main$1;
      _push(`<!--[--><h1 class="">game</h1><button>click refresh</button>`);
      _push(ssrRenderComponent(_component_SvgIcon, {
        class: "w-[100px] h-[100px]",
        color: "#f00",
        name: "icon-community"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SvgIcon, {
        class: "w-[100px] h-[100px]",
        color: "#0f0",
        name: "icon-documentation"
      }, null, _parent));
      _push(ssrRenderComponent(_component_SvgIcon, {
        className: "w-[100px] h-[100px] svg-shadow",
        name: "icon-documentation",
        color: "#f0f"
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/game/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue.mjs.map
