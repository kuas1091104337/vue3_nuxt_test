import { defineComponent, ref, provide, createElementBlock, useSSRContext, computed, resolveComponent, resolveDirective, unref, isRef } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderClass, ssrGetDirectiveProps } from 'vue/server-renderer';
import dayjs from 'dayjs';
import { _ as _export_sfc, u as useHead, e as useNuxtApp } from './server.mjs';
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

const clientOnlySymbol = Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});

const _sfc_main$2 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>header : aubout</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Head.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AboutHead = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$1]]);

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(_attrs)}>footer : aubout</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/About/Foot.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const AboutFoot = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "關於我們 About - Nuxt3 高效入門全攻略",
      meta: [
        { name: "description", content: "關於我們 About - 最棒的Nuxt3的線上課程" },
        {
          property: "og:description",
          content: "關於我們 About - 最棒的Nuxt3的線上課程"
        },
        { property: "og:title", content: "關於我們 About - Nuxt3 高效入門全攻略" },
        { property: "og:url", content: "http://localhost:3000/about" },
        { property: "og:image", content: "http://localhost:3000/share.jpg" }
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        }
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
          async: true
        }
      ]
    });
    const { $hello } = useNuxtApp(), time = (/* @__PURE__ */ new Date()).getTime(), selectedDate = ref(/* @__PURE__ */ new Date()), calendarIsShow = ref(false), date = computed(
      () => dayjs(selectedDate.value).format("YYYY年MM月DD日")
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      const _component_VDatePicker = resolveComponent("VDatePicker");
      const _directive_timeformat = resolveDirective("timeformat");
      let _temp0;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(AboutHead, null, null, _parent));
      _push(` Page: about `);
      _push(ssrRenderComponent(_component_ClientOnly, null, {}, _parent));
      _push(`<p${ssrRenderAttrs(_temp0 = ssrGetDirectiveProps(_ctx, _directive_timeformat, unref(time)))}>${"textContent" in _temp0 ? ssrInterpolate(_temp0.textContent) : _temp0.innerHTML ?? ""}</p><p>${ssrInterpolate(unref(selectedDate))}</p><p>${ssrInterpolate(unref(date))}</p><div class="w-[200px] h-[38px] bg-gray-200 rounded border border-e-neutral-800 relative before:w-[30px] before:h-[30px] before:bg-[#fff] before:absolute before:top-[3px] before:left-[3px] before:rounded"><div class="${ssrRenderClass([
        "absolute top-[2px] left-[2px] origin-top",
        unref(calendarIsShow) ? "scale-y-100 [transition:scale_.4s]" : "scale-y-0 [transition:scale_.2s]"
      ])}">`);
      _push(ssrRenderComponent(_component_VDatePicker, {
        modelValue: unref(selectedDate),
        "onUpdate:modelValue": ($event) => isRef(selectedDate) ? selectedDate.value = $event : null
      }, null, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(AboutFoot, null, null, _parent));
      _push(`</div>`);
    };
  }
});

const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=about.vue.mjs.map
