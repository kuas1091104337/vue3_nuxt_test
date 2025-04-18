import { ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from 'vue/server-renderer';
import { u as useIndexStore } from './github.mjs';

const _imports_0 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2019.1.0,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20fill='%232c3e50'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%20469.331%20469.331'%20style='enable-background:new%200%200%20469.331%20469.331;'%20xml:space='preserve'%3e%3cg%3e%3cpath%20d='M438.931,30.403c-40.4-40.5-106.1-40.5-146.5,0l-268.6,268.5c-2.1,2.1-3.4,4.8-3.8,7.7l-19.9,147.4%20c-0.6,4.2,0.9,8.4,3.8,11.3c2.5,2.5,6,4,9.5,4c0.6,0,1.2,0,1.8-0.1l88.8-12c7.4-1,12.6-7.8,11.6-15.2c-1-7.4-7.8-12.6-15.2-11.6%20l-71.2,9.6l13.9-102.8l108.2,108.2c2.5,2.5,6,4,9.5,4s7-1.4,9.5-4l268.6-268.5c19.6-19.6,30.4-45.6,30.4-73.3%20S458.531,49.903,438.931,30.403z%20M297.631,63.403l45.1,45.1l-245.1,245.1l-45.1-45.1L297.631,63.403z%20M160.931,416.803l-44.1-44.1%20l245.1-245.1l44.1,44.1L160.931,416.803z%20M424.831,152.403l-107.9-107.9c13.7-11.3,30.8-17.5,48.8-17.5c20.5,0,39.7,8,54.2,22.4%20s22.4,33.7,22.4,54.2C442.331,121.703,436.131,138.703,424.831,152.403z'/%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e";

const _imports_1 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2018.1.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20fill='%232c3e50'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cg%3e%3cg%20id='check'%3e%3cg%3e%3cpolygon%20style='fill:%232c3e50;'%20points='11.941,28.877%200,16.935%205.695,11.24%2011.941,17.486%2026.305,3.123%2032,8.818%20'/%3e%3c/g%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e";

const _imports_2 = "data:image/svg+xml,%3c?xml%20version='1.0'%20encoding='iso-8859-1'?%3e%3c!--%20Generator:%20Adobe%20Illustrator%2018.1.1,%20SVG%20Export%20Plug-In%20.%20SVG%20Version:%206.00%20Build%200)%20--%3e%3csvg%20fill='%232c3e50'%20version='1.1'%20id='Capa_1'%20xmlns='http://www.w3.org/2000/svg'%20xmlns:xlink='http://www.w3.org/1999/xlink'%20x='0px'%20y='0px'%20viewBox='0%200%2032%2032'%20style='enable-background:new%200%200%2032%2032;'%20xml:space='preserve'%3e%3cg%3e%3cg%20id='x_x5F_alt'%3e%3cpath%20style='fill:%232c3e50;'%20d='M16,0C7.164,0,0,7.164,0,16s7.164,16,16,16s16-7.164,16-16S24.836,0,16,0z%20M23.914,21.086%20l-2.828,2.828L16,18.828l-5.086,5.086l-2.828-2.828L13.172,16l-5.086-5.086l2.828-2.828L16,13.172l5.086-5.086l2.828,2.828%20L18.828,16L23.914,21.086z'/%3e%3c/g%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3cg%3e%3c/g%3e%3c/svg%3e";

const useRepoSearch = () => {
  const { resetData, fetchUserData, fetchRepos } = useIndexStore();
  const searchData = async (name) => {
    resetData();
    await fetchUserData(name);
    await fetchRepos(name);
  };
  return { searchData };
};

const _sfc_main = {
  __name: "UserTitle",
  __ssrInlineRender: true,
  setup(__props) {
    const { state } = useIndexStore();
    useRepoSearch();
    const editNameText = ref("");
    const isEdit = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "user_title" }, _attrs))}><img class="size-[150px] block border-5 border-white rounded-full mt-[65px] mx-auto mb-[20px]"${ssrRenderAttr("src", unref(state).avatarUrl)} alt=""><div class="edit_box w-[310px] mx-auto mb-[40px] flex justify-center items-center"><h1 style="${ssrRenderStyle(!unref(isEdit) ? null : { display: "none" })}" class="text-[#2c3e50] text-[24px] text-center [font-family:Avenir,Helvetica,Arial,sans-serif]">${ssrInterpolate(unref(state).userName)}</h1><input style="${ssrRenderStyle(unref(isEdit) ? null : { display: "none" })}"${ssrRenderAttr("value", unref(editNameText))} class="text-[18px] w-full h-[30px] pl-[5px]" type="text"><div class="edit_btn flex"><a style="${ssrRenderStyle(!unref(isEdit) ? null : { display: "none" })}" class="w-[18px] ml-[10px]" href="javascript:;"><img${ssrRenderAttr("src", _imports_0)} alt=""></a><div class="flex" style="${ssrRenderStyle(unref(isEdit) ? null : { display: "none" })}"><a href="javascript:;" class="w-[18px] ml-[10px]"><img${ssrRenderAttr("src", _imports_1)} alt=""></a><a href="javascript:;" class="w-[18px] ml-[10px]"><img${ssrRenderAttr("src", _imports_2)} alt=""></a></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/global/UserTitle.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

const UserTitle_vue2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  default: _sfc_main
});

export { UserTitle_vue2 as U, _sfc_main as _, useRepoSearch as u };
//# sourceMappingURL=UserTitle.vue2.mjs.map
