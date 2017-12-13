<template>
  <div>
    <draggable class='board'
      v-model='lists' 
      :options="{draggable: '.app-list'}" 
      @start="drag=true" @end="drag=false">

      <div class='list app-list'
        v-for='(list, index) in lists'  
        :key='list.listName'> 
        <app-list 
          :listName='list.listName' 
          :index='index' />
      </div>

      <div class='list app-new-list'>
        <app-new-list />
      </div>

    </draggable>
  </div>
</template>

<script>
import List from './List'
import NewList from './NewList'
import draggable from 'vuedraggable'

export default {
  components: {
    'app-list': List,
    'app-new-list': NewList,
    draggable
  },
  computed: {
    lists: {
      get() {
        return this.$store.state.lists
      },
      set(value) {
        this.$store.commit('moveList', value)
      }
    }
  }
}

</script>

<style>
.board {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 1em;
}
.list {
  flex: 1 1;
  border: 1px solid black;
  padding: 0.5em;
  margin: 1em;
}
</style>