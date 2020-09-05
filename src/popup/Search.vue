<template>

    <div class="container">
        <form @submit="search">
        <div class="input-group">
            <input type="text" autofocus v-model="title" class="form-control" placeholder="Search for bookmarks...">
            <span class="input-group-btn">
        <button @click="search" class="btn btn-search" type="button"><i class="fa fa-search fa-fw"></i> Search</button>
      </span>
        </div>
            </form>
    </div>
</template>

<script>

export default {
  name: 'Search',
  methods: {
    search(e) {
      e.preventDefault();
      this.$emit('search', this.title);
      localStorage.setItem('title', this.title);
    },
  },
  data() {
    return {
      title: '',
    };
  },
  mounted() {
    if (localStorage.title) {
      this.title = localStorage.title;
    }
  },
};

</script>

<style scoped>
    .search {
        flex: 0 0 auto;
        width: 100%;
        padding: 16px 24px;
        font-size: 20px;
        font-weight: 500;
        border: none;
        box-shadow: 0 1px 0;
        outline: 0;
        z-index: 0;
    }
</style>
