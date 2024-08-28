let accordion = document.querySelectorAll("#body");

accordion.forEach((item, index) => {
    let header = item.querySelector(".head");
    header.addEventListener("click", function(){
        item.classList.toggle("open");

        let content = item.querySelector("#content");
        if (item.classList.contains("open")){
            content.style.height = `${content.scrollHeight}px`;
            item.querySelector("#icon").classList.replace("fa-plus", "fa-minus");
        }else{
            content.style.height = "0px";
            item.querySelector("#icon").classList.replace("fa-minus", "fa-plus");
        }
        removeOpen(index);
    })
})

function removeOpen(index1){
    accordion.forEach((item2, index2) => {
        if(index1 != index2){
            item2.classList.remove("open");

            let cont = item.querySelector("#content");
            cont.style.height = "0px";
            item.querySelector("#icon").classList.replace("fa-minus", "fa-plus");
        }
    }) 
}