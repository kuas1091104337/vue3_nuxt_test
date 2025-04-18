import { defineStore } from 'pinia';
import { ref, reactive } from 'vue';

const apiFetch = $fetch.create({ baseURL: "https://api.github.com" });
const apiGetUserData = (name) => {
  return apiFetch(`/users/${name}`);
};
const apiGetRepos = (name, page, per_page) => {
  return apiFetch(
    `/users/${name}/repos?page=${page}&per_page=${per_page}&sort=pushed`
  );
};

const notFoundJpg = "" + __buildAssetsURL("notFound.CEzYeOk8.jpg");

const useIndexStore = defineStore("indexStore", () => {
  const repoList = ref([]);
  const isReposOver = ref(false);
  const isLoadRepos = ref(false);
  const state = reactive({
    userName: "",
    avatarUrl: "",
    updatedAt: "",
    publicRepos: 0,
    page: 1,
    limit: 9
  });
  const resetData = () => {
    state.userName = "";
    state.page = 0;
    state.avatarUrl = "";
    state.updatedAt = "";
    repoList.value = [];
  };
  const addPage = () => state.page++;
  const setUserName = (name) => state.userName = name;
  const fetchUserData = async (name) => {
    try {
      const ud = await apiGetUserData(name);
      const { login, avatar_url, public_repos, updated_at } = ud;
      state.userName = login;
      state.avatarUrl = avatar_url;
      state.updatedAt = updated_at;
      state.publicRepos = public_repos;
    } catch (error) {
      if (error.response.status === 404) {
        state.avatarUrl = notFoundJpg;
        state.userName = "This user is not found!!!";
      }
    }
  };
  const fetchRepos = async () => {
    if (isReposOver.value) return;
    if (isLoadRepos.value) return;
    isLoadRepos.value = true;
    addPage();
    const repos = await apiGetRepos(state.userName, state.page, state.limit);
    repoList.value = [...repoList.value, ...repos];
    isLoadRepos.value = false;
    isReposOver.value = repos.length < state.limit;
  };
  return {
    state,
    fetchUserData,
    fetchRepos,
    addPage,
    setUserName,
    resetData,
    repoList,
    isReposOver,
    isLoadRepos
  };
});

export { useIndexStore as u };
//# sourceMappingURL=github.mjs.map
