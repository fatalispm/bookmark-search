<template>
    <div class="row">
        <div class="app">
            <Search v-on:search="search" ref="search"/>
            <Results v-bind:bookmarks="bookmarks" v-on:open="open"/>
        </div>
    </div>
</template>

<script>

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import axios from 'axios';
import Vue from 'vue';
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import Results from './Results';
import Search from './Search';

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);

export default {
  components: {
    Results,
    Search,
  },
  methods: {
    search(title) {
      axios.get(`http://127.0.0.1:8000/api/bookmarks/?page_size=10&query=${title}`, { withCredentials: true }).then(
        (res) => {
          console.log(res);
          this.bookmarks = res.data.results;
          localStorage.setItem('bookmarks', JSON.stringify(this.bookmarks));
        },
      ).catch((err) => console.log(err));
    },
    open(bookmark) {
      browser.tabs.create({
        url: bookmark.url,
        active: true,
      });
    },
  },
  data() {
    return {
      bookmarks: [],
    };
  },
  mounted() {
    if (localStorage.bookmarks) {
      this.bookmarks = JSON.parse(localStorage.bookmarks);
    }
  },
};
</script>

<style lang="scss" scoped>
    p {
        font-size: 20px;
    }

    .app {
        display: flex;
        flex-direction: column;
        width: 400px;
        max-height: 600px;
    }

</style>
