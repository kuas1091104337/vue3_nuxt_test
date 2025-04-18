import { defineStore } from 'pinia';
import { ref } from 'vue';
import { z as destr, y as klona, A as getRequestHeader, B as isEqual, C as setCookie, D as getCookie, E as deleteCookie } from '../nitro/nitro.mjs';
import { e as useNuxtApp, b as useRoute, c as useRouter } from './server.mjs';
import { u as useRequestEvent } from './ssr.mjs';

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = options || {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const CookieDefaults = {
  path: "/",
  watch: true,
  decode: (val) => destr(decodeURIComponent(val)),
  encode: (val) => encodeURIComponent(typeof val === "string" ? val : JSON.stringify(val))
};
function useCookie(name, _opts) {
  var _a;
  const opts = { ...CookieDefaults, ..._opts };
  opts.filter ?? (opts.filter = (key) => key === name);
  const cookies = readRawCookies(opts) || {};
  let delay;
  if (opts.maxAge !== void 0) {
    delay = opts.maxAge * 1e3;
  } else if (opts.expires) {
    delay = opts.expires.getTime() - Date.now();
  }
  const hasExpired = delay !== void 0 && delay <= 0;
  const cookieValue = klona(hasExpired ? void 0 : cookies[name] ?? ((_a = opts.default) == null ? void 0 : _a.call(opts)));
  const cookie = ref(cookieValue);
  {
    const nuxtApp = useNuxtApp();
    const writeFinalCookieValue = () => {
      if (opts.readonly || isEqual(cookie.value, cookies[name])) {
        return;
      }
      nuxtApp._cookies || (nuxtApp._cookies = {});
      if (name in nuxtApp._cookies) {
        if (isEqual(cookie.value, nuxtApp._cookies[name])) {
          return;
        }
      }
      nuxtApp._cookies[name] = cookie.value;
      writeServerCookie(useRequestEvent(nuxtApp), name, cookie.value, opts);
    };
    const unhook = nuxtApp.hooks.hookOnce("app:rendered", writeFinalCookieValue);
    nuxtApp.hooks.hookOnce("app:error", () => {
      unhook();
      return writeFinalCookieValue();
    });
  }
  return cookie;
}
function readRawCookies(opts = {}) {
  {
    return parse(getRequestHeader(useRequestEvent(), "cookie") || "", opts);
  }
}
function writeServerCookie(event, name, value, opts = {}) {
  if (event) {
    if (value !== null && value !== void 0) {
      return setCookie(event, name, value, opts);
    }
    if (getCookie(event, name) !== void 0) {
      return deleteCookie(event, name, opts);
    }
  }
}

const useLogingStore = defineStore("login", () => {
  const cookie = useCookie("token", { maxAge: 60 * 60 * 24 * 7 }), route = useRoute(), router = useRouter(), isLoading = ref(false), errorMsg = ref({
    username: "",
    password: ""
  });
  const handleLoading = () => isLoading.value = !isLoading.value;
  const sendLoginAuth = async ({ username, password }) => {
    if (isLoading.value) return;
    isLoading.value = true;
    try {
      const res = await $fetch("https://vue-lessons-api.vercel.app/auth/login", {
        method: "POST",
        body: { username, password }
      });
      cookie.value = {
        token: res.data.token
      };
      router.replace("/vip");
    } catch (error) {
      const { username: username2 } = error.response._data.errorMsg;
      errorMsg.value = {
        username: username2,
        password: "password error"
      };
    } finally {
      isLoading.value = false;
    }
  };
  const checkAuth = async () => {
    var _a, _b;
    try {
      await $fetch("https://vue-lessons-api.vercel.app/testToken", {
        method: "POST",
        headers: {
          // Authorization: "123",
          Authorization: (_a = cookie.value) == null ? void 0 : _a.token
          // ...(cookie.value ? { Authorization: cookie.value.token } : {}),
        }
      });
      router.replace("/vip");
      console.log("驗證成功");
    } catch (error) {
      if (((_b = error.response) == null ? void 0 : _b.status) === 403) {
        cookie.value = null;
        const { query } = route;
        console.error("驗證失敗", error);
        router.replace("/login");
      }
    }
  };
  return {
    isLoading,
    handleLoading,
    sendLoginAuth,
    checkAuth,
    errorMsg
  };
});

export { useCookie as a, useLogingStore as u };
//# sourceMappingURL=login.mjs.map
