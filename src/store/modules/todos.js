const state={
    todos:[
        {
            id:1,
            title: 'Attend Morning Status Meeting at 10 A.M',
            name:'Juber'
        },
        {
            id:2,
            title: 'Attend Evening Status Meeting at 6:30 P.M',
            name:'Juber'
        }
    ]
}

const getters={
    allTodos: (state)=> state.todos
}

const actions={
    addTodo({commit}, todo){
        commit('add_todo', todo)
    },
    deleteTodo({commit}, id){
        commit('delete_todo', id)
    },
    updateTodo({commit}, todo){
        commit('update_todo', todo)
    }
}

const mutations={
    add_todo(state, todo){
        if(todo.title ===''){
            alert('Please add a TASK for the list')
            return state.todos
        } else{
            return  state.todos.push(todo)

        }

    },
    delete_todo(state, id){
       state.todos = state.todos.filter(x=> x.id !=id);
    },
    update_todo(state, todo){
        let index = state.todos.findIndex(x=> x.id == todo.id);
        if(index != -1){
            state.todos[index]= todo;
        }
    }
}

export default{
    state,
    getters,
    actions,
    mutations
}