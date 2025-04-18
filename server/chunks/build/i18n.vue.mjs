import { mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from 'vue/server-renderer';

const _sfc_main = {
  __name: "i18n",
  __ssrInlineRender: true,
  setup(__props) {
    const { locale } = useI18n();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-[#ecc9a0] p-4" }, _attrs))}><select class="text-center w-[300px] h-[30px] block bg-white border border-[#d4613e] rounded-[4px] px-[10px] mx-auto mb-[10px] active:outline-none focus:outline-none"><option value="zh-TW"${ssrIncludeBooleanAttr(Array.isArray(unref(locale)) ? ssrLooseContain(unref(locale), "zh-TW") : ssrLooseEqual(unref(locale), "zh-TW")) ? " selected" : ""}>zh-TW</option><option value="en-US"${ssrIncludeBooleanAttr(Array.isArray(unref(locale)) ? ssrLooseContain(unref(locale), "en-US") : ssrLooseEqual(unref(locale), "en-US")) ? " selected" : ""}>en-US</option><option value="ja-JP"${ssrIncludeBooleanAttr(Array.isArray(unref(locale)) ? ssrLooseContain(unref(locale), "ja-JP") : ssrLooseEqual(unref(locale), "ja-JP")) ? " selected" : ""}>ja-JP</option></select><ul class="text-[#84551c] text-[24px] text-center w-[300px] mx-auto"><li class="cursor-pointer mb-[10px]">${ssrInterpolate(_ctx.$t("front_page"))}</li><li class="cursor-pointer mb-[10px]">${ssrInterpolate(_ctx.$t("contact_us"))}</li><li class="cursor-pointer mb-[10px]">${ssrInterpolate(_ctx.$t("product_description"))}</li><li class="cursor-pointer mb-[10px]">${ssrInterpolate(_ctx.$t("latest_news"))}</li><li class="cursor-pointer mb-[10px]">${ssrInterpolate(_ctx.$t("history"))}</li><li class="cursor-pointer mb-[10px]">${ssrInterpolate(_ctx.$t("about_us"))}</li></ul></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/i18n.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=i18n.vue.mjs.map
