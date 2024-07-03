const destinazioni = [
    {
        //prodotto 1
        image1: "media/Roma2.jpg",
        nome: "ROMA",
        image2: "media/Roma.jpg",
        image3: "media/Roma3.webp",
        testo1: "Narra la leggenda che la nascita di Roma si debba a Romolo e Remo, i due gemelli figli di Rea Silvia e del dio Marte, abbandonati e allattati da una lupa e infine adottati dal pastore Faustolo e dalla moglie Acca Larentia. Una volta cresciuti, i gemelli decisero di fondare una città: per stabilire chi dovesse governare, si affidarono alla volontà degli dei, attraverso il volo degli uccelli augurali. Dall’Aventino, Remo vide sei avvoltoi, mentre Romolo, dal Palatino, ne avvistò dodici, diventando il primo Re di Roma nel 753 a.C. Dal Palatino, la città si sarebbe estesa sui sette colli che tutti conosciamo: Palatino, Aventino, Campidoglio, Quirinale, Viminale, Esquilino e Celio. Il biondo Tevere Così veniva chiamato il dio fiume nei componimenti poetici dell’antica Roma, un dio al quale si doveva rispetto e amore. Ma il Tevere era soprattutto una vera e propria “strada sull’acqua”, lungo la quale si svilupparono sin dall’epoca romana grandi porti, definitivamente demoliti nella seconda metà dell’Ottocento con la costruzione dei muraglioni per liberare la città dalle continue inondazioni. Ai nostri giorni, quel contatto diretto con il fiume si è ormai perso: rimangono però l’amore e il rispetto, la consapevolezza del suo ruolo fondamentale nella nascita e nello sviluppo della città. Per non parlare degli scorci di incredibile bellezza che ci regala dai tanti storici ponti, come Ponte Sisto, Ponte Sant’Angelo o Ponte Fabricio.",
        testo2: "I grandiosi monumenti, le centinaia di chiese e le spettacolari fontane di Roma ne delineano il meraviglioso profilo e la rendono la città con la più alta concentrazione di beni storici, archeologici e architettonici al mondo, con oltre il 16% dei beni culturali mondiali e il 70% di quelli italiani. Il suo centro storico, delimitato dal perimetro delle mura aureliane, è una sovrapposizione di testimonianze di quasi tre millenni: nel 1980, insieme alle proprietà extraterritoriali della Santa Sede nella città e alla Basilica di San Paolo fuori le mura, è stato inserito nella lista dei Patrimoni dell’umanità dell’UNESCO.Cuore della cristianità cattolica, Roma è l’unica città al mondo a ospitare al proprio interno uno stato straniero, l’enclave della Città del Vaticano: per tale motivo è spesso definita “Capitale di due Stati”. I 5 monumenti più visitati di Roma Sono imperdibili e non possono certo mancare durante la prima visita nella Città Eterna: Il Colosseo, Il Pantheon, Il Foro Romano e il Palatino, La Fontana di Trevi, Piazza Navona. Ma non dimenticare tutti gli altri! Naviga attraverso le pagine di Turismoroma e crea il tuo viaggio su misura.",
        testo3: "Si dice che una città si possa descrivere anche attraverso un solo panorama, un colore, un profumo, un oggetto o persino un’idea: e sono proprio quelle sfumature, impercettibili ed evanescenti, a trasformarsi talvolta in ricordi indelebili. Nel corso dei secoli, la magia di Roma è stata raccontata su carta dalle parole di poeti e scrittori, meravigliosamente raffigurata nelle opere di grandi artisti. Eterna e misteriosa, la Capitale avvolge del resto chi arriva in un piacevole “mal di Roma” che non abbandona, e non è un caso se milioni di turisti si affrettano a lanciare una monetina nella Fontana di Trevi con l’auspicio di tornare a visitarla: perché a Roma, ricordando le parole di Goethe, tutto è come lo si immaginava e tutto è nuovo. Se ancora non la conoscete, o se volete tornare a immergervi nella sua magia, proviamo a raccontarvi in breve il suo profilo, la sua anima, i suoi colori.",
        testo4: "Esiste un buon numero di proverbi e modi di dire che riguardano o nominano Roma. Ecco i più famosi: Quando a Roma vai, fai come vedrai: l’espressione è comunemente usata in situazioni in cui seguire lo status quo sembra l’idea migliore. Roma non è stata costruita in un giorno: questo proverbio si usa per dire che qualcosa necessita di tempo e pazienza per essere portata a termine, o che comunque, con l’impegno e la meticolosità si ottengono grandi risultati. Tutte le strade portano a Roma: il proverbio nasce dall’efficiente sistema di stradale dell’antica Roma, su cui si basa buona parte dell’attuale sistema viario italiano. Molte strade partivano da Roma e, se prese in senso contrario, “portavano a Roma”. A Roma Dio non è trino, ma quattrino: secondo un gioco di parole, a Roma, più che adorare la Santissima Trinità, si adora il dio denaro. Lo stemma comunale, adottato ufficialmente nel 1884, è uno scudo con fondo porpora, attraversato da una croce greca e dall’acronimo S.P.Q.R. - Senatus PopulusQue Romanus (il Senato e il Popolo di Roma) in caratteri dorati, dominato da una corona d’oro con otto fioroni, di cui cinque visibili. Nell’immaginario collettivo, Roma è però universalmente riconosciuta e ricordata anche grazie ai numerosi simboli che la identificano. Tra questi, i più famosi sono: la lupa capitolina, una statua bronzea raffigurante la leggendaria lupa che allattò i due gemelli Romolo e Remo, conservata nei Musei Capitolini; l’aquila imperiale, effigie militare e simbolo della città durante l’antichità, e il leone, animale immagine di supremazia, emblema in epoca medievale; il Colosseo, il più grande anfiteatro del mondo romano, riconosciuto, nel 2007, come una delle sette meraviglie del mondo moderno, l’unica presente in Europa; la Fontana di Trevi, la più monumentale e celebre fontana al mondo; il ”Cupolone”, la cupola della Basilica di San Pietro in Vaticano, emblema del mondo cristiano che domina tutta la città."
    }

];

destinazioni.forEach(prodotto => {
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
    prodottoImg1.classList.add("img-fluid");
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
    prodottoImg2.classList.add("img-fluid");
    prodottoImg2.src = prodotto.image2;
    prodottoImg2.alt = prodotto.nome;
    img2.appendChild(prodottoImg2);
    //immagine 3
    const img3 = document.getElementById("img3");
    const prodottoImg3 = document.createElement("img");
    prodottoImg3.classList.add("img-fluid");
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

