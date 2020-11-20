<template>
  <form :class="classList" @submit.prevent="addCardToList">
    <input v-model="body"
           type="text"
           class="text-input"
           placeholder="Add new card"
           @focusin="startEditing"
           @focusout="finishEditing"
    />
    <button type="submit" class=add-button>
      Add
    </button>
  </form>
</template>

<script>
export default {
  props: {
    listIndex: {
      type: Number,
      required: true,
    }
  },
  data: function() {
    return {
      body: '',
      isEditing: false,
    }
  },
  computed: {
    classList() {
      const classList = ['addcard']
      if (this.isEditing) {
        classList.push('active')
      }
      return classList
    },
  },
  methods: {
    addCardToList: function() {
      this.$store.dispatch('addCardToList', { body: this.body, listIndex: this.listIndex })
      this.body = ''
    },
    startEditing() {
      isEditing = true
    },
    finishEditing() {
      isEditing = false
    },
  }
}
</script>