import __nuxt_component_0 from './Loading.vue2.mjs';
import { ref, watch, unref, useSSRContext } from 'vue';
import { ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { storeToRefs } from 'pinia';
import { u as useIndexStore } from './github.mjs';
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

const _imports_0 = "data:image/svg+xml,%3csvg%20fill='%23ffe600'%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%3e%3cpath%20d='M12%20.587l3.668%207.568%208.332%201.151-6.064%205.828%201.48%208.279-7.416-3.967-7.417%203.967%201.481-8.279-6.064-5.828%208.332-1.151z'/%3e%3c/svg%3e";

function useIntersectionObserver() {
  const observer = ref(null), elRef = ref(null), isIntersection = ref(false), intersectionObserver = (el, option = { threshold: 0 }) => {
    elRef.value = el;
    observer.value = new IntersectionObserver((entries) => {
      console.log(entries, entries[0]);
      entries.forEach((item) => {
        console.log(item);
        isIntersection.value = item.isIntersecting;
      });
    }, option);
    observer.value.observe(el);
  };
  return {
    elRef,
    isIntersection,
    intersectionObserver
  };
}

const _sfc_main = {
  __name: "ReposList",
  __ssrInlineRender: true,
  setup(__props) {
    const { isIntersection } = useIntersectionObserver();
    const store = useIndexStore();
    const { repoList, isLoadRepos, isReposOver } = storeToRefs(store);
    const { state, fetchRepos } = store;
    const loadRef = ref(null);
    watch(isIntersection, (newVal) => {
      if (!newVal) return;
      if (isLoadRepos.value) return;
      if (state.userName === "") return;
      fetchRepos();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Loading = __nuxt_component_0;
      _push(`<!--[--><ul class="card_box pb-[20px]"><!--[-->`);
      ssrRenderList(unref(repoList), (item) => {
        _push(`<li class="[font-family:-apple-system,BlinkMacSystemFont,Segoe_UI,Helvetica,Arial,sans-serif,Apple_Color_Emoji,Segoe_UI_Emoji] w-[500px] bg-white [box-shadow:0_3px_5px_rgb(71_71_71/.1)] p-[20px] mx-auto mb-[20px]"><h1 class="font-bold text-[18px] mb-[5px]">${ssrInterpolate(item.name)}</h1><h2 class="text-[16px] text-[#7f7f7f] mb-[5px]">${ssrInterpolate(item.description)}</h2><a class="text-[#888] text-[14px] block overflow-ellipsis overflow-hidden decoration-0 mb-[5px] hover:text-[#3d638a] hover:font-bold"${ssrRenderAttr("href", item.html_url)} target="_blank">${ssrInterpolate(item.html_url)}</a><div class="star_box font-bold text-[#888] flex h-full"><img class="star_icon w-[20px] mr-1"${ssrRenderAttr("src", _imports_0)} alt=""> ${ssrInterpolate(item.stargazers_count)}</div></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_Loading, {
        style: !unref(isReposOver) ? null : { display: "none" },
        ref_key: "loadRef",
        ref: loadRef
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/ReposList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ReposList.vue2.mjs.map
