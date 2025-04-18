import { withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrInterpolate } from 'vue/server-renderer';
import { u as useAsyncData } from './asyncData.mjs';
import './server.mjs';
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

const _sfc_main = {
  __name: "apiTest",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const res = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "seoUser",
      () => $fetch("https://vue-lessons-api.vercel.app/seo/user")
    )), __temp = await __temp, __restore(), __temp);
    const { data, pending, error } = ([__temp, __restore] = withAsyncContext(() => useAsyncData(
      "apiTest",
      () => $fetch("https://api.nuxtjs.dev/mountains")
    )), __temp = await __temp, __restore(), __temp);
    console.log(res.data.value);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div>Page: api</div>`);
      if (unref(pending)) {
        _push(`<div>載入中...</div>`);
      } else if (unref(error)) {
        _push(`<div>發生錯誤：${ssrInterpolate(unref(error).message)}</div>`);
      } else {
        _push(`<div>資料：${ssrInterpolate(unref(data))}</div>`);
      }
      _push(`<button class="bg-gray-200 border border-b-gray-800 rounded px-2 py-1 ml-2"> refresh </button><p>${ssrInterpolate(unref(res).data)}</p><div class=""></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/apiTest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=apiTest.vue.mjs.map
