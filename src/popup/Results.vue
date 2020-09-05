<template>
    <div class="results container">
        <div v-bind:key="bookmark.id" v-for="bookmark in bookmarks">
            <Tab v-bind:bookmark="bookmark" v-on:open="$emit('open', bookmark)"/>
        </div>
    </div>
</template>

<script>

import Tab from './Tab';

export default {
  name: 'results',
  components: {
    Tab,
  },
  props: ['bookmarks'],
};

</script>

<style scoped>
    .results {
        left: 10px;
    }
</style>
