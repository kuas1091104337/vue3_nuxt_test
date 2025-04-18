import { defineComponent, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { u as useLogingStore } from './login.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    const store = useLogingStore();
    const user = ref({
      username: "mike",
      password: "7654321"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login_box w-[500px] h-[700px] flex bg-[#d7c9be] [box-shadow:0_0_1px_#1a1d35] mx-auto my-5" }, _attrs))}><div class="m-auto"><div class="mb-[20px]"><p class="text-[34px] text-[#657359] font-bold mb-1.5">NAME</p><input type="text" class="text-[20px] leading-[48px] w-[280px] bg-white border border-[#657359] rounded-full px-3" placeholder="輸入使用者名稱"${ssrRenderAttr("value", unref(user).username)}>`);
      if (unref(store).errorMsg.username) {
        _push(`<p class="text-[18px] text-[#ff2e2e] pt-1 mb-1.5">${ssrInterpolate(unref(store).errorMsg.username)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-[20px]"><p class="text-[34px] text-[#657359] font-bold mb-1.5">PASSWORD</p><input type="password" class="text-[20px] leading-[48px] w-[280px] bg-white border border-[#657359] rounded-full px-3" placeholder="輸入密碼"${ssrRenderAttr("value", unref(user).password)}>`);
      if (unref(store).errorMsg.password) {
        _push(`<p class="text-[18px] text-[#ff2e2e] pt-1 mb-1.5">${ssrInterpolate(unref(store).errorMsg.password)}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><button class="cursor-pointer text-white text-[20px] text-center w-full h-[40px] bg-[#9aa582] border-2 border-[#657359] rounded-full"> 登入 </button></div></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login.vue.mjs.map
