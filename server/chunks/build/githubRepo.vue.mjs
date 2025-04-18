import { u as useRepoSearch, _ as _sfc_main$1 } from './UserTitle.vue2.mjs';
import _sfc_main$2 from './ReposList.vue2.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useAsyncData } from './asyncData.mjs';
import './github.mjs';
import 'pinia';
import './Loading.vue2.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "githubRepo",
  __ssrInlineRender: true,
  setup(__props) {
    const { searchData } = useRepoSearch();
    useAsyncData("repos", async () => {
      const res = await searchData("MikeCheng1208");
      return res;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_UserTitle = _sfc_main$1;
      const _component_ReposList = _sfc_main$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#e5e5e5] p-2" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_UserTitle, null, null, _parent));
      _push(ssrRenderComponent(_component_ReposList, null, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/githubRepo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=githubRepo.vue.mjs.map
