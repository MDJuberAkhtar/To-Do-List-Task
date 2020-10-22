<template>
  <div>
      <div class="todos">
        <p class="todo"  v-if="!editing">{{todo.title}} <span>created by: <strong>{{todo.name}}</strong></span> </p>
         <input v-bind:value="todoText" @change="todoTextChange" type="text"  v-else>
        <div>
           <button class="btn btn1" @click="updateTodoText(todo)">{{editing ? 'Update' : 'Edit'}}</button>
           <button class="btn btn2" @click="deleteTodo(todo.id)"> Delete</button>
        </div>
      </div>    
  </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name:"TodoItem",
    props:{
        todo:{}
    },
    data(){
      return{
        todoText: '',
        editing: false
      }
    },
    methods:{
      ...mapActions(['deleteTodo'],['updateTodo']),
      todoTextChange(e){
        e.preventDefault()
        this.todoText = e.target.value
      },
      updateTodoText(todo){
        this.editing = this.editing == true ? false : true;
        if(this.editing){
          this.todoText = todo.title
          this.updateTodo(todo)
        } else{
          todo.title = this.todoText
        }
      }
    }

}
</script>

<style>
.todos {
  display: flex;
  justify-content: space-around;  
}
.todo {
  flex: 6;
  border: 1px solid #ccc;
  background: #41b883;
  padding: 1rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
}

.btn{
    margin: 1rem;
    border: 1px solid #ccc;
    padding: 1rem;
    border-radius: 12px;
    text-align: center;
    position: relative;
    appearance: none;
    outline: none;
    cursor: pointer;
    display: inline-block;
    color: #fff;
    transition: 0.4 ease-out;
}
.btn:hover{
    box-shadow: 6px 6px rgba(0,0,0, 0.6);
}

.btn1{
  background: #008CBA;
   margin-right: 5px;
}

.btn2{
  background: #f44336;
}

input[type="text"] {
  margin: 1rem;
  flex: 8;
  width: 80%;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
  height: 25px;
}

span{
  font-family: 'Dancing Script', cursive;
  float: right;
  font-weight: bolder;
  bottom: 0;
}

@media (max-width: 540px) {
  .todos {
    display: flex;
    flex-direction: column;
  }
  .todo{
    flex: 12;
    
  }
  .btn{
    flex:1;
  }

}






</style>