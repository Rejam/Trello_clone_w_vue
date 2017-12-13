<template>
  <div>
    <h1>Add a new list:</h1>
    <input type='text' 
      placeholder="New list name" 
      v-model='listName'
      @keypress.enter="addNewList" />
    <button @click='addNewList'>
      <i class='material-icons'>add</i>
    </button/>   
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'newlist',
  data () {
    return {
      listName: ''
    }
  },
  methods: {
    addNewList() {
      this.$store.commit('addNewList', this.listName)
      this.listName = ''
    }
  },
  components: {
    draggable
  },
}
</script>

<style scoped>

</style>

