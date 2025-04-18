import { defineComponent, ref, withAsyncContext, unref, useSSRContext } from 'vue';
import { ssrRenderComponent } from 'vue/server-renderer';
import { u as useFetch } from './fetch.mjs';
import { _ as _sfc_main$1 } from './CardList.vue3.mjs';
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
import './ssr.mjs';
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
import './asyncData.mjs';
import './nuxt-link.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    ref([]);
    const { data: dataList } = ([__temp, __restore] = withAsyncContext(() => useFetch(
      "https://vue-lessons-api.vercel.app/courses/list",
      "$0kfGCrqZ4_"
    )), __temp = await __temp, __restore(), __temp);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CardList = _sfc_main$1;
      _push(`<!--[--><p class="">courses list</p><div class="min-[620px]:flex min-[620px]:flex-wrap min-[620px]:justify-start min-[620px]:gap-[20px] min-[620px]:w-[620px] min-[620px]:pb-[20px] min-[620px]:mx-auto min-[940px]:w-[940px]">`);
      _push(ssrRenderComponent(_component_CardList, { courses: unref(dataList) }, null, _parent));
      _push(`</div><!--]-->`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/courses/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index.vue3.mjs.map
