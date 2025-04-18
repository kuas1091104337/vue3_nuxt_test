import { defineComponent, mergeProps, unref } from 'vue';
import { ssrRenderAttrs, ssrInterpolate } from 'vue/server-renderer';
import { u as useDialog, d as dialogData } from './useDialog.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useDialog();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<dialog${ssrRenderAttrs(mergeProps({
        id: "dialog",
        class: "text-[14px] text-center w-[320px] h-[280px] bg-white rounded-[10px] border-none [box-shadow:0_0_5px_rgb(218_115_56/.4)] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      }, _attrs))}><header class="text-[16px] leading-[50px] w-full">${ssrInterpolate(unref(dialogData).title)}</header><main class="leading-[180px] w-full overflow-auto">${ssrInterpolate(unref(dialogData).content)}</main><footer class="text-white leading-[30px] flex justify-around"><button class="w-[40%] bg-[#741d13] rounded-[20px]">${ssrInterpolate(unref(dialogData).cancel.btnName)}</button><button class="w-[40%] bg-[#2e7ca8] rounded-[20px] ml-[10px]">${ssrInterpolate(unref(dialogData).confirm.btnName)}</button></footer></dialog>`);
    };
  }
});

export { _sfc_main as _ };
//# sourceMappingURL=index.vue33.mjs.map
