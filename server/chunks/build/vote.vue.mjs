import { defineComponent, withAsyncContext, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { u as useVoteStore } from './vote.mjs';
import { u as useHomeStore } from './Home.mjs';
import { u as useAsyncData } from './asyncData.mjs';
import { _ as _sfc_main$1 } from './voteCard.vue3.mjs';
import 'pinia';
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
import './VoteBtn.vue2.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "vote",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const store = useVoteStore(), homeStore = useHomeStore();
    [__temp, __restore] = withAsyncContext(async () => useAsyncData("vote", async () => {
      const res = await "https://vue-lessons-api.vercel.app/vote/list";
      store.setVoteData(res);
      return res;
    })), await __temp, __restore();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_VoteCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><h1 class="text-[30px] mb-[50px]">投票列表</h1><div class="flex justify-center gap-[20px] mb-[50px]">`);
      _push(ssrRenderComponent(_component_VoteCard, null, null, _parent));
      _push(`</div><pre>${ssrInterpolate(unref(homeStore).voteToHomeData)}</pre></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vote.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=vote.vue.mjs.map
