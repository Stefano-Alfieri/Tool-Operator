const prodotti = [
    {
        //prodotto 1
        image1: "media/Roma2.jpg",
        nome: "ROMA",
        image2: "media/Roma.jpg",
        image3: "media/Roma3.webp",
        testo1: "ciao",
        testo2: "franco",
        testo3: "ciao ciao ciaao ciaoo",
        testo4: "salve salve"
    }

];


  prodotti.forEach(prodotto => {
    //titolo
    const titolo = document.getElementById("titolo")
    const prodottoTitolo = document.createElement("h1");
    prodottoTitolo.classList.add("text-center");
    prodottoTitolo.classList.add("titolo");
    prodottoTitolo.textContent = prodotto.nome;
    titolo.appendChild(prodottoTitolo);
    //immagine 1
    const img1 = document.getElementById("img1");
    const prodottoImg1 = document.createElement("img");
    prodottoImg1.classList.add("img1");
    prodottoImg1.src = prodotto.image1;
    prodottoImg1.alt = prodotto.nome;
    img1.appendChild(prodottoImg1);
    //testo1
    const testo1 = document.getElementById("testo1");
    const prodottoTesto1 = document.createElement("p");
    prodottoTesto1.classList.add("testo");
    prodottoTesto1.textContent = prodotto.testo1;
    testo1.appendChild(prodottoTesto1)
    //testo 2
    const testo2 = document.getElementById("testo2");
    const prodottoTesto2 = document.createElement("p");
    prodottoTesto2.classList.add("testo");
    prodottoTesto2.textContent = prodotto.testo2;
    testo2.appendChild(prodottoTesto2)
    //immagine 2
    const img2 = document.getElementById("img2");
    const prodottoImg2 = document.createElement("img");
    prodottoImg2.classList.add("img2");
    prodottoImg2.src = prodotto.image2;
    prodottoImg2.alt = prodotto.nome;
    img2.appendChild(prodottoImg2);
    //immagine 3
    const img3 = document.getElementById("img3");
    const prodottoImg3 = document.createElement("img");
    prodottoImg3.classList.add("img2");
    prodottoImg3.src = prodotto.image3;
    prodottoImg3.alt = prodotto.nome;
    img3.appendChild(prodottoImg3);
    //testo 3
    const testo3 = document.getElementById("testo3");
    const prodottoTesto3 = document.createElement("p");
    prodottoTesto3.classList.add("testo");
    prodottoTesto3.textContent = prodotto.testo3;
    testo3.appendChild(prodottoTesto3)
    //testo 4
    const testo4 = document.getElementById("testo4");
    const prodottoTesto4 = document.createElement("p");
    prodottoTesto4.classList.add("testo");
    prodottoTesto4.textContent = prodotto.testo4;
    testo4.appendChild(prodottoTesto4)


});
