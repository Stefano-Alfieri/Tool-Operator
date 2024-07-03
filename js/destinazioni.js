function filtra(tipo){
let destinazioni= document.getElementsByClassName("dest");
let destinazioni_cont;
for(let i=0; i<destinazioni.length;i++){
    destinazioni_cont=destinazioni[i].getAttribute("data-tipo");
    if(!destinazioni[i].classList.contains("hide")&&destinazioni_cont !=tipo){
        destinazioni[i].classList.toggle("hide");
    }else if(destinazioni[i].classList.contains("hide")&&destinazioni_cont ==tipo){
        destinazioni[i].classList.toggle("hide");
    }
    if(tipo== "tutti") destinazioni[i].classList.remove("hide");
}
}
