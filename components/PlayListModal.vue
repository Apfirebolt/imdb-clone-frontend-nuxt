<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img
          class="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          All your watchlist
        </h2>
      </div>
      <form
        @submit.prevent="addPlaylistUtil"
        class="mt-8 space-y-6"
        method="POST"
      >
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <t-input-group label="* Playlist">
              <t-select
                v-model="selectedPlaylist"
                placeholder="Select Playlist"
                :options="playlist"
                name="Select Playlist"
                value-attribute="_id"
                text-attribute="title"
              />
            </t-input-group>
          </div>
        </div>

        <div>
          <button
            type="submit"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add to Playlist
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddEditWatchlistModal",
  props: {
    playlist: {
      type: Array,
      required: true,
    },
  },
  mounted() {
    if (this.selectedPlaylist) {
      this.name = this.selectedPlaylist.title;
    }
  },
  data() {
    return {
      selectedPlaylist: "",
    };
  },
  methods: {
    addPlaylistUtil() {
      this.$emit('onConfirmAction', this.selectedPlaylist);
    },
  },
};
</script>
