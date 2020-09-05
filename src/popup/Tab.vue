<template>
    <div class="todo-item" @click="$emit('open', bookmark)">
        <a class="title" :href="bookmark.url"> {{bookmark.title}}</a>
    </div>
</template>

<script>

export default {
  name: 'Tab',
  props: ['bookmark'],
};

</script>

<style scoped>
    .todo-item {
        display: flex;
        align-items: center;
        height: 40px;
        padding: 0 6px;
        border-radius: 3px;
        cursor: pointer;
        user-select: none;
  }
      .title {
          flex: 1 1 auto;
          margin: 0 6px;
          font-size: 14px;
          line-height: 40px;
          white-space: nowrap;
          text-overflow: ellipsis;
          overflow: hidden;
      }
    .is-complete {
        text-decoration: line-through;
    }

    .del {
        background: #ff0000;
        color: #fff;
        border: none;
        padding: 5px 9px;
        border-radius: 50%;
        cursor: pointer;
        float: right;
    }
</style>
