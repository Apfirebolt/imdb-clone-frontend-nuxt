<template>
  <div>
    <Header />
    <div class="mx-auto bg-blue-700 max-w-7xl lg:px-8">
      {{ singleMovie }}
      <div class="lg:grid lg:grid-cols-2 lg:gap-8">
        <div
          class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center"
        >
          <div class="lg:py-24">
            <h1
              class="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl"
            >
              <span class="block">A better way to</span>
              <span
                class="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5"
                >ship web apps</span
              >
            </h1>
            <p class="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
              Manage movies and watchlist, share among others and more..
            </p>
            <div class="mt-10 sm:mt-12">
              <form class="sm:max-w-xl sm:mx-auto lg:mx-0">
                <div class="sm:flex">
                  <div class="min-w-0 flex-1">
                    <label for="searchText" class="sr-only">Search Movie</label>
                    <input
                      id="searchText"
                      type="text"
                      placeholder="Enter Movie Name"
                      v-model="searchText"
                      class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                    />
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <button
                      type="submit"
                      class="block w-full py-3 px-4 rounded-md shadow bg-red-300 from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                      @click.prevent="movieApiCall()"
                    >
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
          <div
            class="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0"
          >
            <!-- Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ -->
            <img
              class="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
              src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  components: { Footer },
  name: "Movie",
  computed: {
    ...mapGetters({
      singleMovie: "movie/movieGetter",
    }),
  },
  data() {
    return {
      isDropDownVisible: false,
      searchText: ''
    };
  },
  methods: {
    ...mapActions({
      getMovieAction: "movie/getMovieAction",
    }),
    async movieApiCall() {
      let apiKey = this.$config.apiKey;
      const movieData = await this.$axios.$get(
        `http://www.omdbapi.com/?t=${this.searchText}&apikey=${apiKey}`
      );
      console.log(movieData);
      this.getMovieAction(movieData);
    },
    toggleDropdown() {
      this.isDropDownVisible = !this.isDropDownVisible;
    },
  },
};
</script>
