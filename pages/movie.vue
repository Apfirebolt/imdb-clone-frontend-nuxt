<template>
  <div>
    <div class="mx-auto bg-blue-700 max-w-7xl lg:px-8">
      <t-modal v-model="isConfirmModalOpened" header="Confirm Delete Modal">
        <confirm-modal @onConfirmAction="deleteMovie" :message="deleteMessage" />
      </t-modal>
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
                <button class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                  Add To Watch List
                  <!-- Heroicon name: solid/external-link -->
                  <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </button>
                <button @click="saveMovieUtil()" class="inline-flex items-center ml-3 justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                  Save Movie
                  <!-- Heroicon name: solid/external-link -->
                  <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                    <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                  </svg>
                </button>
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
    <div class="relative max-w-7xl mx-auto">
    <div class="text-center">
      <h2 class="text-3xl my-3 tracking-tight font-extrabold text-gray-900 sm:text-4xl">
        Saved Movies List
      </h2>
      <p class="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
        You can add movies here, later, you can categorize movies based on the playlist you created earlier.
      </p>
    </div>
    <div class="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
      <div v-for="movie in movies" :key="movie._id" class="flex flex-col rounded-lg shadow-lg overflow-hidden">
        <div class="flex-shrink-0">
          <img class="h-48 w-full object-cover" :src="movie.poster" alt="">
        </div>
        <div class="flex-1 bg-white p-6 flex flex-col justify-between">
          <div class="flex-1">
            <p class="text-sm font-medium text-indigo-600">
              <a href="#" class="hover:underline">
                {{ movie.title }}
              </a>
            </p>
            <a href="#" class="block mt-2">
              <p class="text-xl font-semibold text-gray-900">
                {{ movie.actors }} - {{ movie.released }}
              </p>
              <p class="mt-3 text-base text-gray-500">
                {{ movie.plot }}
              </p>
            </a>
          </div>
          <div class="mt-6 flex items-center">
            <div class="ml-3">
              <t-button variant="error" @click="deleteMovieUtil(movie)">
                Delete
              </t-button>
              <t-button @click="deleteMovieUtil(movie)">
                Add To Playlist
              </t-button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";

export default {
  components: { Footer },
  name: "Movie",
  mounted() {
    this.getAllMovies()
  },
  computed: {
    ...mapGetters({
      singleMovie: "movie/movieGetter",
      movies: "movie/getAllMovies"
    }),
  },
  data() {
    return {
      isDropDownVisible: false,
      searchText: '',
      deleteMessage: '',
      selectedMovie: null,
      isConfirmModalOpened: false
    };
  },
  methods: {
    ...mapActions({
      getMovieAction: "movie/getMovieAction",
      getAllMovies: "movie/getAllMoviesAction",
      saveMovieAction: "movie/saveMovieAction",
      deleteMovieAction: "movie/deleteMovieAction"
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
    saveMovieUtil() {
      const payload = {
        title: this.singleMovie.Title,
        year: this.singleMovie.Year,
        rated: this.singleMovie.Rated,
        released: this.singleMovie.Released,
        genre: this.singleMovie.Genre,
        director: this.singleMovie.Director,
        writer: this.singleMovie.Writer,
        actors: this.singleMovie.Actors,
        plot: this.singleMovie.Plot,
        language: this.singleMovie.Language,
        country: this.singleMovie.Country,
        poster: this.singleMovie.Poster,
        awards: this.singleMovie.Awards,
        collection: this.singleMovie.Collection,
        imdbVotes: parseInt(this.singleMovie.imdbVotes),
        imdbRatings: this.singleMovie.imdbRating,
        imdbId: this.singleMovie.imdbId
      }
      this.saveMovieAction(payload)
    },
    deleteMovieUtil(item) {
      this.isConfirmModalOpened = true
      this.selectedMovie = item
      this.deleteMessage = `Are you sure you want to delete the movie titled "${item.title}" ?`
    },
    deleteMovie() {
      this.deleteMovieAction(this.selectedMovie)
      this.isConfirmModalOpened = false
    }
  },
};
</script>
