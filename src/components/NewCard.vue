<template>
  <div class='card'>
    <h2>Add a new card:</h2>
    <input type='text' 
      placeholder="New card name" 
      v-model='cardName' 
      @keydown.enter='addNewCard(cardName)' />
    <button @click='addNewCard(cardName)' >
      <i class='material-icons'>add</i>
    </button/>   
  </div>
</template>

<script>
import draggable from 'vuedraggable'

export default {
  name: 'newcard',
  props: ['index'],
  data () {
    return {
      cardName: ''
    }
  },
  methods: {
    addNewCard(newCardName) {
      this.$store.commit('addNewCard', {
        newCardName, 
        index: this.$props.index })
      this.cardName = ''  
    }
  },
  components: {
    draggable
  },
}
</script>

<style scoped>
.list {
  border: 1px solid black;
  margin: 1em;
  padding: 0.5em;
  margin-top: 1em;
}
</style>

