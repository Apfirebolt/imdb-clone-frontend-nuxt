<template>
  <div>
    <Header />
    <div class="mx-auto bg-blue-700 max-w-7xl lg:px-8">
      <div v-if="singleMovie" class="relative bg-gray-900">
        <div class="relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2">
          <img class="w-full h-full object-cover" :src="singleMovie.Poster" alt="Image" />
          <div aria-hidden="true" class="absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply"></div>
        </div>
        <div class="relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32">
          <div class="md:ml-auto md:w-1/2 md:pl-10">
            <h2 class="text-base font-semibold uppercase tracking-wider text-gray-300">
              {{ singleMovie.Title }}
            </h2>
            <p class="mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl">
              {{ singleMovie.Actors }}
            </p>
            <p class="mt-3 text-lg text-gray-300">
              {{ singleMovie.Plot }}
            </p>
            <p class="mt-3 text-lg text-gray-300">
              Released in {{ singleMovie.Year }}, Directed By {{ singleMovie.Director }}
            </p>
            <div class="mt-8">
              <div class="inline-flex rounded-md shadow">
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                  Add To Watch List
                  <!-- Heroicon name: solid/external-link -->
                  <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
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
