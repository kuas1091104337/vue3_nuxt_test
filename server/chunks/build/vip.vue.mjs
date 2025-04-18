import { defineComponent, watch, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useLogingStore, a as useCookie } from './login.mjs';
import 'pinia';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "vip",
  __ssrInlineRender: true,
  setup(__props) {
    var _a;
    useLogingStore();
    const cookie = useCookie("token");
    const isValidJSON = (str) => {
      try {
        JSON.parse(str);
        return true;
      } catch {
        return false;
      }
    };
    const auth1 = cookie.value && isValidJSON(cookie.value) ? (_a = JSON.parse(cookie.value)) == null ? void 0 : _a.token : null;
    console.log(cookie);
    watch(cookie, (newVal) => {
      var _a2;
      console.log(newVal);
      const auth2 = useCookie("token");
      if (auth1 !== (auth2.value && isValidJSON(auth2.value) ? (_a2 = JSON.parse(auth2.value)) == null ? void 0 : _a2.token : null)) {
        (void 0).location.reload();
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-full flex bg-[#f1e4db]" }, _attrs))}><h1 class="m-auto">登入中</h1></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vip.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=vip.vue.mjs.map
