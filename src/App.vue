<template>
  <div id="app" class="container">
    <TodoInput/>
    <TodoList/>
  </div>
</template>

<script>
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList
  }
}
</script>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
  text-align: center;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

</style>
