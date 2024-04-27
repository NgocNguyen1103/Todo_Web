const inputTask = document.getElementById("input-task");
const list_container = document.getElementById("list-container");

function addTask(){
    if (inputTask.value === ''){
        alert("Please write something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        list_container.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "&#x2298";
        li.appendChild(span);
    }
    save_data();
    inputTask.value = "";
    
}

list_container.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        save_data();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        save_data();
    }
}, false);

function save_data(){
    localStorage.setItem("data", list_container.innerHTML);
}

function get_data(){
    list_container.innerHTML = localStorage.getItem("data")
}
get_data();