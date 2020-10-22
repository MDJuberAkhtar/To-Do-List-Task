<template>
  
<div>
    <button class="button" @click="show"> Add Todos</button>
   <modal name="my-first-modal" :adaptive="true">
       <div class="popup-close" @click="hide">&times;</div>
       <h3>Todo Details...</h3>
       <div class=".form">
          <input type="text" placeholder="Task Details..."  @change="todoTextChange" v-bind:value="todoText">
          <input type="text"  placeholder="Enter your name..." @change="todoNameChange" v-bind:value="todoName">
          <br>
          <input type="submit" value="Submit" @click="addTodoText(); hide()" >
      </div>
      
   </modal>
</div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from 'uuid';
export default {
    name: "TodoInput",
    data(){
        return{
            todoText:'',
            todoName:'',
            showModal: true
        }
    },
    methods:{
        ...mapActions(['addTodo']),
        todoTextChange(e){
            this.todoText = e.target.value;
        },
        todoNameChange(e){
            this.todoName = e.target.value;
        },
        addTodoText(){
         this.addTodo({id: v1(), title: this.todoText, name: this.todoName});
         this.todoText="";
         this.todoName='';
        },
        show () {
            this.$modal.show('my-first-modal');
        },
        hide () {
            this.$modal.hide('my-first-modal');
        }
    },

    mount(){
         this.show()
    }

}
</script>

<style scoped>

.form{
    display: flex;
    justify-content: row;
}

input[type="text"] {
  width: 80%;
  padding: 10px;
  border: 1px solid #41b883;
  outline: 0;
}
input[type="submit"] {
  margin-left: 2px;
  height: 40px;
  background: #41b883;
  color: #fff;
  border: 1px #41b883 solid;
  cursor: pointer;
}
.button{
    
    appearance: none;
    outline: none;
    cursor: pointer;
    display: inline-block;
    padding: 15px 25px;
    background-image: linear-gradient(to right, #cc2e5d, #ff5858);
    border-radius: 8px;
    color: #fff;
    font-size: 18px;
    font-weight: 700;
    transition: 0.4 ease-out;
}

.button:hover{
    box-shadow: 6px 6px rgba(0,0,0, 0.6);
}

.popup-close {
	position:absolute;
	top:-5px;
	right:-5px;
	width:40px;
	height:40px;
	background:#555;
	color:#f5f5f5;
	font-size:25px;
	font-weight:600;
	text-align:center;
	border-radius:50%;
	cursor:pointer;
  }

</style>