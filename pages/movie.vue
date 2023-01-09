<template>
  <div>
    <Header />
    <p>Movie Page</p>
    <t-button @click="toggleDropdown"> Get Movie Data </t-button>
    {{ singleMovie }}
    <Footer />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import Footer from '../components/Footer.vue';
import Header from '../components/Header.vue';

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
    };
  },
  methods: {
    ...mapActions({
      getMovieAction: "movie/getMovieAction",
    }),
    async movieApiCall(movieName) {
      let apiKey = this.$config.apiKey;
      const movieData = await this.$axios.$get(
        `http://www.omdbapi.com/?t=${movieName}&apikey=${apiKey}`
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
