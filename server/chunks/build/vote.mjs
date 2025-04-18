import { defineStore } from 'pinia';
import { ref } from 'vue';

const useVoteStore = defineStore("vote", () => {
  const voteData = ref({}), isFetch = ref(false), setVoteData = (data) => {
    voteData.value = data;
    console.log(data);
  }, addVote = async (type) => {
    if (isFetch.value) return;
    isFetch.value = true;
    try {
      const data = await $fetch("https://vue-lessons-api.vercel.app/vote/add", {
        method: "POST",
        body: { type }
      });
      voteData.value = data;
      console.log(data);
      alert("投票成功");
    } catch (error) {
      alert("投票失敗，請稍後再試");
    } finally {
      isFetch.value = false;
    }
  };
  return { isFetch, voteData, setVoteData, addVote };
});

export { useVoteStore as u };
//# sourceMappingURL=vote.mjs.map
