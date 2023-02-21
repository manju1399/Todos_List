const inputs=document.getElementById("input_text")
const addlists=document.getElementById("main")
const lists=document.getElementById("lcont")
var index=1


function addTodo(){
    
    let todo= document.createElement("input")
    todo.value=inputs.value;
    todo.disabled=true
    todo.id="list"
    
    addlists.append(todo)


console.log(index);
    
    todo.name=index
    index++

    let dlt= document.createElement("button")
    dlt.id="list_btn"
    dlt.type="submit"
    dlt.name=index
    dlt.textContent="done"
    addlists.append(dlt)
    inputs.value=""
    let bindex=document.getElementsByClassName(dlt.name)

    dlt.addEventListener("click",()=>{
       
        // addlists.remove(ele)
    let ele=document.getElementsByName(bindex)
        addlists.removeChild(todo)
        addlists.removeChild(dlt)
    })
    
}


   
