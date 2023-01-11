<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <p>Add Watchlist Page</p>
    <t-modal v-model="isWatchListModalOpened" header="Create Watchlist">
      <AddEditWatchlist />
    </t-modal>
    <t-button type="button" @click="toggleModal">
      Open Modal
    </t-button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Watchlist",
  data() {
    return {
      isWatchListModalOpened: false,
    };
  },
  computed: {
    ...mapGetters({
      getToken: "auth/getToken",
    }),
  },
  methods: {
    ...mapActions({
      addNewPlayListAction: "watchlist/setTokenAction",
    }),
    toggleModal() {
      this.isWatchListModalOpened = !this.isWatchListModalOpened;
    },
    addNewPlaylist(data) {

    }
  },
};
</script>
