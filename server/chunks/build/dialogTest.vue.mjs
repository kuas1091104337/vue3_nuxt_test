import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useDialog } from './useDialog.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "dialogTest",
  __ssrInlineRender: true,
  setup(__props) {
    useDialog();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-screen h-screen flex" }, _attrs))}><button class="font-bold text-[#2e7ca8] cursor-pointer w-[150px] h-[30px] bg-[#f1c061] border-3 border-[#2e7ca8] rounded-[5px] m-auto active:text-[#741d13] active:border-[#741d13]"> OPEN </button></div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dialogTest.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dialogTest.vue.mjs.map
