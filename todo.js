let col = document.querySelector(".leftie") ;

let button = document.querySelector("button") ;

let nameinput = document.querySelector("#name")
let content = document.querySelector("#content")

let i = 0 ;

function func(){
    col.innerHTML += `
    <div id="${"card"+i}" class="card w-75" style="background-color: darkkhaki;">
        <div class="card-body">
            <h5 class="card-title">${nameinput.value}</h5>
            <p class="card-text">${content.value}</p>
            
                <i onclick="removeCard(${i++})" class="fa fa-trash" aria-hidden="true"></i>
            
        </div>
    </div>
  `
  nameinput.value = "" ;
  content.value = "" ;

}
function removeCard(i){
    console.log(i) ;
    let elem = document.querySelector("#card"+i) ;
    elem.remove() ;
}