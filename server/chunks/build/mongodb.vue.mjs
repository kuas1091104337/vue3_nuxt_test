import { defineComponent, withAsyncContext, ref, computed, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "mongodb",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const {
      data: peopleList,
      refresh,
      error
    } = ([__temp, __restore] = withAsyncContext(() => useFetch("/api/people", {
      onRequest({ request, options }) {
        options.headers = options.headers || {};
        options.headers.authorization = `Bearer token 1234567890`;
        console.log(options.headers);
      },
      onRequestError({ request, options, error: error2 }) {
        console.error(request, options, error2);
      },
      onResponse({ request, response, options }) {
        return response._data;
      },
      onResponseError({ request, response, options }) {
        console.error(request, response, options);
      }
    }, "$r2BOl63qNF")), __temp = await __temp, __restore(), __temp), peopleData = ref({ name: "", email: "", age: "" }), peopleArr = computed(() => {
      return peopleList.value.map((item) => ({
        ...item,
        isEdit: ref(false)
      }));
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#6cb7da] p-5" }, _attrs))}><div class="flex justify-center"><input${ssrRenderAttr("value", unref(peopleData).name)} class="text-center bg-white h-[30px] border border-2 rounded-full" type="text" placeholder="名字"><input${ssrRenderAttr("value", unref(peopleData).email)} class="text-center bg-white h-[30px] border border-2 rounded-full mx-2" type="text" placeholder="信箱"><input${ssrRenderAttr("value", unref(peopleData).age)} class="text-center bg-white h-[30px] border border-2 rounded-full" type="text" placeholder="年齡"></div><button class="text-white cursor-pointer w-[150px] h-[30px] block bg-[#d77186] border-2 border-[#d75725] rounded-full [box-shadow:0_2px_0_#b4314b] m-[10px_auto_2px] [transition:border-color_.3s,box-shadow_.3s,margin_.3s] active:border-[#982b00] active:[box-shadow:0_0_0_#b4314b] active:m-[12px_auto_0]"> 新增 </button><div class="pt-[38px]"><!--[-->`);
      ssrRenderList(unref(peopleArr), (item, idx) => {
        _push(`<div class="${ssrRenderClass(["flex justify-center", { "mt-[20px]": idx > 0 }])}"><div class="text-center leading-[42px] min-w-[100px] px-2">`);
        if (!item.isEdit.value) {
          _push(`<p class="text-white text-[26px] font-bold">${ssrInterpolate(item.name)},${ssrInterpolate(item.isEdit.value)}</p>`);
        } else {
          _push(`<input${ssrRenderAttr("value", item.name)} class="text-center w-[100px] h-[30px] bg-white border border-2 rounded-full" type="text" placeholder="名字">`);
        }
        _push(`</div><div class="text-[14px]"><button class="cursor-pointer size-[42px] bg-white border-2 rounded-full mr-2">${ssrInterpolate(!item.isEdit.value ? "edit" : "save")}</button><button class="cursor-pointer size-[42px] bg-white border-2 rounded-full"> 刪除 </button></div></div>`);
      });
      _push(`<!--]--></div><pre>${ssrInterpolate(unref(error))}</pre><pre>${ssrInterpolate(unref(peopleArr))}</pre></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/mongodb.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=mongodb.vue.mjs.map
