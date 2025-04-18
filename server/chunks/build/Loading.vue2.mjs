import { mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "lds_ellipsis relative size-[80px] mx-auto" }, _attrs))}><div class="size-[13px] bg-[#888] rounded-full absolute top-[33px] left-[8px] [animation:ellipsis_.6s_infinite]"></div><div class="size-[13px] bg-[#888] rounded-full absolute top-[33px] left-[8px] [animation:ellipsis-move_.6s_infinite]"></div><div class="size-[13px] bg-[#888] rounded-full absolute top-[33px] left-[32px] [animation:ellipsis-move_.6s_infinite]"></div><div class="size-[13px] bg-[#888] rounded-full absolute top-[33px] left-[56px] [animation:ellipsis_.6s_infinite_reverse]"></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/Loading.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { __nuxt_component_0 as default };
//# sourceMappingURL=Loading.vue2.mjs.map
