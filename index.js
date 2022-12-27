document.addEventListener("DOMContentLoaded", ()=>{
   let form = document.querySelector('form')
   form.addEventListener('submit', (e)=>{
        e.preventDefault()
        buildToDo(e.target.new_todo.value)

        //the .reset() method allows the input field to reset after an entry has been made.
        form.reset()
    })
})

function buildToDo(todo){
    let p=document.createElement('p')
    //creating a button that will delete the things in the to do list.
    let btn=document.createElement('button')

    //passing in the function handleDelete as an argument while adding the event listener.
    btn.addEventListener('click', handleDelete)
    btn.textContent= "  Mark done."


    p.textContent=`${todo}`
    p.appendChild(btn)
    console.log (p)
    // appending the paragraph to the todo_container. 
   document.querySelector('#todo_container').appendChild(p)
}

//declaring the handleDelete function.
//the target is set to the parentNode and is removed with the .remove() method.
function handleDelete(e){
    e.target.parentNode.remove ()
}