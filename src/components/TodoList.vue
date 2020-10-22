<template>
  <div class="marginTodo">
      <div v-for="todo in allTodos" :key="todo.id">
           <TodoItem :todo='todo'/>
      </div>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
import { mapGetters } from 'vuex';
export default {
    name: "TodoList",
    components:{
        TodoItem
    },
    computed:{
        ...mapGetters(['allTodos'])
    }

}
</script>

<style>
.marginTodo{
     margin-top: 20px;
}

</style>