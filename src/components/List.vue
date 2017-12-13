<template>
  <div>
    <h1>  {{this.$props.listName}} </h1>
    <app-new-card :index='this.$props.index' />
    <draggable
      v-model='cards' 
      :options="{group:'card'}" 
      @start="drag=true" 
      @end="drag=false">
      <div v-if='cards.length>0' v-for='c in cards' :key='c'>
        <app-card :item='c'/>
      </div>
      <div v-if='cards.length == 0'>
        <app-card class='placeholder' item='No Cards' />
      </div>
    </draggable>
    
  </div>
</template>

<script>
import Card from './Card'
import NewCard from './NewCard'
import draggable from 'vuedraggable'

export default {
  name: 'list',
  props: ['listName', 'index'],
  data () {
    return {
    }
  },
  computed: {
    cards: {
      get() {
        return this.$store.state.lists[this.$props.index].items
      },
      set(value) {
        this.$store.commit('moveCard', {value, index: this.$props.index})
      }
    }
  },
  components: {
    'app-card': Card,
    'app-new-card': NewCard,
    draggable
  },
}
</script>

<style>
</style>

