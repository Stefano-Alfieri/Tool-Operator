$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Indietro',
            next : 'Prossimo',
            finish : 'Conferma',
            current : ''
        },
        onStepChanging: function () { 
            var nome = $('#first_name').val() + ' ' + $('#last_name').val();
            var aereoPartenza = $('#partenza').val();
            var aereoArrivo = $('#arrivo').val();
            var numeroGiorni = $('#nGiorni').val();
            var numeroViaggiatori = $('#nViaggiatori').val();

            $('#nome-val').text(nome);
            $('#partenza-val').text(aereoPartenza);
            $('#arrivo-val').text(aereoArrivo);
            $('#giorni-val').text(numeroGiorni);
            $('#nViagg-val').text(numeroViaggiatori);

            return true;
        }
    }); 
});
let partenza = "";
let arrivo = "";
let sistemazione = "";
let minore = "";
let viaggiatori = 1;
let giorni = 1;
let totale = 0;

function saveData(){
     totale=0
     partenza=document.getElementById("partenza").value;
     arrivo=document.getElementById("arrivo").value;
     sistemazione=document.getElementById("sistemazione").value;
     minore=document.getElementById("minore").value;
     viaggiatori=document.getElementById("nViaggiatori").value;
     giorni=document.getElementById("nGiorni").value;
    return totale;
}


function preventivo (){
    saveData();
    if(partenza==="Milano"){
        totale=totale+60
    }else if(partenza==="Roma"){
        totale=totale+80
    }else if(partenza==="Napoli"){
        totale=totale+100
    }else if(partenza==="Bari"){
        totale=totale+120
    }else if(partenza==="Palermo"){
        totale=totale+150
    }
    if(arrivo==="Francia"){
        totale=totale+300
    }else if(arrivo==="Inghilterra"){
        totale=totale+350
    }else if(arrivo==="Spagna"){
        totale=totale+400
    }else if(arrivo==="Grecia"){
        totale=totale+450
    }else if(arrivo==="Germania"){
        totale=totale+500
    }else if(arrivo==="Oceania"){
        totale=totale+600
    }else if(arrivo==="Stati Uniti"){
        totale=totale+700
    }else if(arrivo==="Asia"){
        totale=totale+800
    }else if(arrivo==="Nord America"){
        totale=totale+900
    }else if(arrivo==="Sud America"){
        totale=totale+1000
    }else if(arrivo==="Africa"){
        totale=totale+1100
    }
    if(sistemazione==="Ostello"){
        totale=totale+50
    }else if(sistemazione==="B&B"){
        totale=totale+100
    }else if(sistemazione==="Hotel"){
        totale=totale+200
    }else if(sistemazione==="Resort"){
        totale=totale+300
    }
    if(viaggiatori==0){
        viaggiatori=1
    }
    totale=totale*viaggiatori;
    if(giorni==0){
        giorni=1
    }
    totale=totale*giorni;
    if(minore==="Si"){
        totale=totale-((totale*10)/100);
    }
    document.getElementById('prezzo-val').textContent= totale + " €"
    return  totale;
    
}; 

