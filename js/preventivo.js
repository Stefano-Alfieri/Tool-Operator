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
        onStepChanging: function (event, currentIndex, newIndex) { 
            var nome = $('#first_name').val() + ' ' + $('#last_name').val();
            var partenza = $('#partenza').val();
            var arrivo = $('#arrivo').val();
            var giorni = $('#nGiorni').val();
            var viaggiatori = $('#nViaggiatori').val();
            //totale = preventivo();

            $('#nome-val').text(nome);
            $('#partenza-val').text(partenza);
            $('#arrivo-val').text(arrivo);
            $('#giorni-val').text(giorni);
            $('#nViagg-val').text(viaggiatori);

            return true;
        }
    });
});




/*function preventivo (){
    let minore=document.getElementById("min");
    let totale=0;
    let partenza=document.getElementById("partenza")
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
    let destinazione=document.getElementById("arrivo")
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
    let sistemazione=document.getElementById("sistemazione")
    if(sistemazione==="Ostello"){
        totale=totale+50
    }else if(sistemazione==="B&B"){
        totale=totale+100
    }else if(sistemazione==="Hotel"){
        totale=totale+200
    }else if(sistemazione==="Resort"){
        totale=totale+300
    }
    let viaggiatore=document.getElementById("nViaggiatori")
    totale=totale*viaggiatore
    let giorni=document.getElementById("nGiorni")
    totale=totale*giorni
    if(minore===si){
        totale=totale-((totale*10)/100);
    }
    return  totale;
    
}; 
*/
