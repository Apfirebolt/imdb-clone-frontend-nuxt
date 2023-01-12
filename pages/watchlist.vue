<template>
  <div class="py-12 text-center px-4 sm:px-6 lg:px-8">
    <p class="text-center text-3xl text-red-500">Add Watchlist Page</p>
    <t-modal v-model="isWatchListModalOpened" header="Create Watchlist">
      <AddEditWatchlist :addPlaylist="addNewPlaylist"/>
    </t-modal>
    <t-modal v-model="isWatchListEditModalOpened" header="Update Watchlist">
      <AddEditWatchlist :updatePlaylist="updatePlaylist" :selectedPlaylist="selectedWatchlist" />
    </t-modal>
    <t-modal v-model="isConfirmModalOpened" header="Confirm Delete Modal">
      <confirm-modal @onConfirmAction="deletePlaylist" :message="deleteMessage" />
    </t-modal>
    <t-button type="button" class="my-3" @click="toggleModal">
      Add Watchlist
    </t-button>

    <div class="grid grid-cols-1 md:grid-cols-3">
      <div
        v-for="item in playlists"
        :key="item._id"
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg"
            src="/docs/images/blog/image-1.jpg"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              {{ item.title }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <button
            @click="editPlaylistUtil(item)"
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              aria-hidden="true"
              class="w-4 h-4 ml-2 -mr-1"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <t-button variant="error" @click="deletePlaylistUtil(item)"> Delete </t-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import ConfirmModal from '../components/ConfirmModal.vue';

export default {
  name: "Watchlist",
  mounted() {
    this.getAllPlaylistAction();
  },
  data() {
    return {
      isWatchListModalOpened: false,
      isConfirmModalOpened: false,
      isWatchListEditModalOpened: false,
      selectedWatchlist: {},
      deleteMessage: '',
      mode: 'add'
    };
  },
  computed: {
    ...mapGetters({
      getToken: "auth/getToken",
      playlists: "watchlist/getAllPlayList",
    }),
  },
  methods: {
    ...mapActions({
      addNewPlayListAction: "watchlist/addWatchList",
      getAllPlaylistAction: "watchlist/getAllPlaylistAction",
      deletePlaylistAction: "watchlist/deleteSinglePlaylistAction",
      updatePlaylistAction: "watchlist/updateSinglePlaylistAction"
    }),
    toggleModal() {
      this.isWatchListModalOpened = !this.isWatchListModalOpened;
    },
    addNewPlaylist(data) {
      this.addNewPlayListAction(data);
      this.isWatchListModalOpened = false;
    },
    deletePlaylistUtil(item) {
      this.selectedWatchlist = item
      this.isConfirmModalOpened = true
      this.deleteMessage = `Are you sure you want to delete item titled ${item.title} ?`
    },
    deletePlaylist() {
      console.log('Playlist')
      this.deletePlaylistAction(this.selectedWatchlist)
      this.isConfirmModalOpened = false
    },
    editPlaylistUtil(item) {
      this.selectedWatchlist = item
      this.isWatchListEditModalOpened = true
    },
    updatePlaylist(data) {
      console.log('Data is ', data)
      data._id = this.selectedWatchlist._id
      this.updatePlaylistAction(data)
      this.isWatchListEditModalOpened = false
    }
  },
};
</script>
