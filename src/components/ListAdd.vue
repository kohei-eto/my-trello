<template>
  <form class="addList" @submit.prevent="addList">
    <input type="text"
           v-model="title"
           class="text-input"
           placeholder="Add new list">
    <button type="submit" class="add-button">
      add
    </button>
  </form>
</template>

<script>
export default {
  data () {
    return {
      title: ''
    }
  },
  methods: { 
    addList: function () {
    this.$store.dispatch('addlist', { title: this.title } )
    this.title = ''
  }
 }
}
</script>
