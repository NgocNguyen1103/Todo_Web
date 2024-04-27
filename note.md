HTML
<span>unicode</span>






CSS
background-color: transparent;
user-select: none;
cursor: pointer;
ul li:before{
    content: '';
    background-image: url(images/unchecked.png);
    background-size: cover;
    background-position: center;
    text-decoration: line-through;
}

ul li span:hover{
    background: #edeef0;
    
}


JS
document.createElement("")
.value
.appendChild()

function save_data(){
    localStorage.setItem("data", list_container.innerHTML);
}

function get_data(){
    list_container.innerHTML = localStorage.getItem("data")
}
