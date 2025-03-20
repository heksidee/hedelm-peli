var aloitusRaha = 50;
var aloitusPanos = 1;
var pelirivi = [];
var kierrokset = 1;
var ekaRullaEhto = true;
var tokaRullaEhto = true;
var kolmasRullaEhto = true;
var neljäsRullaEhto = true;
                                                    /*LUODAAN PALJONKO RAHAA KENTTÄ*/
var rahat = document.getElementById("varat");
var rahaElementti = document.createElement("div");
rahaElementti.id = "rahaa"
rahaElementti.innerText = "RAHAA: " + aloitusRaha + "€";
rahat.appendChild(rahaElementti);

                                                    /*LUODAAN MIKÄ ON PANOS KENTTÄ*/
var panos = document.getElementById("varat");
var panosElementti = document.createElement("div");
panosElementti.id = "panokset";
panosElementti.innerText = "PANOS: " + aloitusPanos + "€";
panos.appendChild(panosElementti);

                                                    /*LUODAAN PANOKSEN ASETTAMISPAINIKE*/
var panosPainike = document.getElementById("varat");
var panosKuva = document.createElement("img");
panosKuva.id = "kolikko";
panosKuva.src = "./kuvat/panos.png";
panosPainike.appendChild(panosKuva);
panosKuva.addEventListener("click", function(event) {
    event.preventDefault();
    asetaPanos();
});

function asetaPanos() {                             /*PANOKSEN MUUTTAMINEN*/
    if (kierrokset === 2) {
        voittoElementti.innerText = "ET VOI MUUTTA PANOSTA KESKEN PELIN.\nLUKITSE JA PELAA.";
        return;
    }
    if (aloitusPanos === 1) {
        aloitusPanos += 1;
        panosElementti.innerText = "PANOS: " + aloitusPanos + "€";
    } else if (aloitusPanos === 2) {
        aloitusPanos += 3;
        panosElementti.innerText = "PANOS: " + aloitusPanos + "€";
    } else if (aloitusPanos === 5) {
        aloitusPanos += 5;
        panosElementti.innerText = "PANOS: " + aloitusPanos + "€";
    } else if (aloitusPanos === 10) {
        aloitusPanos -= 9;
        panosElementti.innerText = "PANOS: " + aloitusPanos + "€";
    }
}
var rulla = document.getElementById("rulla");
var ekaRandomNum = Math.floor(Math.random() * 5) + 1;
var ekaRandomKuva = "./kuvat/rulla" + ekaRandomNum + ".png";
var rulla1Elementti = document.createElement("img");
rulla1Elementti.src = ekaRandomKuva;
rulla1Elementti.id = "rullaobjekti";
rulla.appendChild(rulla1Elementti);

var rulla = document.getElementById("rulla");
var tokaRandomNum = Math.floor(Math.random() * 5) + 1;
var tokaRandomKuva = "./kuvat/rulla" + tokaRandomNum + ".png";
var rulla2Elementti = document.createElement("img");
rulla2Elementti.src = tokaRandomKuva;
rulla2Elementti.id = "rullaobjekti";
rulla.appendChild(rulla2Elementti);

var rulla = document.getElementById("rulla");
var kolmasRandomNum = Math.floor(Math.random() * 5) + 1;
var kolmasRandomKuva = "./kuvat/rulla" + kolmasRandomNum + ".png";
var rulla3Elementti = document.createElement("img");
rulla3Elementti.src = kolmasRandomKuva;
rulla3Elementti.id = "rullaobjekti";
rulla.appendChild(rulla3Elementti);

var rulla = document.getElementById("rulla");
var neljäsRandomNum = Math.floor(Math.random() * 5) + 1;
var neljäsRandomKuva = "./kuvat/rulla" + neljäsRandomNum + ".png";
var rulla4Elementti = document.createElement("img");
rulla4Elementti.src = neljäsRandomKuva;
rulla4Elementti.id = "rullaobjekti";
rulla.appendChild(rulla4Elementti);

function pelataan() {                          /*PELAA PAINIKE*/
    var rulla = document.getElementById("rulla");
    rulla.innerHTML = "";
    peliRiviNollaus();
}
function peliRiviNollaus() {                   /*PITÄÄ KIRJAA KIERROKSISTA*/
    if(kierrokset === 1) {
        ekaRullaEhto = true;
        tokaRullaEhto = true;
        kolmasRullaEhto = true;
        neljäsRullaEhto = true;
        if (aloitusRaha === 0) {
            voittoElementti.innerText = "RAHAT LOPPU, ET VOI PELATA.";
            return;
        }
        if (aloitusRaha < aloitusPanos) {
            voittoElementti.innerText = "ASETA PIENEMPI PANOS.";
            return;
        }
        pelirivi = [];
        aloitusRaha -= aloitusPanos;
        rahaElementti.innerText = "RAHAA: " + aloitusRaha + "€";
        ekaRulla();
        tokaRulla();
        kolmasRulla();
        neljäsRulla();
        voitontarkistus();
        kierrokset += 1;
    } else {
        if (ekaRullaEhto) {     /*JOS 2. KIERROS EIKÄ RULLAA LUKITTU - ARPOO UUDEN*/
            var rulla = document.getElementById("rulla");
            var ekaRandomNum = Math.floor(Math.random() * 5) + 1;
            var ekaRandomKuva = "./kuvat/rulla" + ekaRandomNum + ".png";
            var rulla1Elementti = document.createElement("img");
            rulla1Elementti.src = ekaRandomKuva;
            rulla1Elementti.id = "rullaobjekti1";
            rulla.appendChild(rulla1Elementti);
            pelirivi[0] = ekaRandomNum;
        }
        if (ekaRullaEhto === false) {   /*JOS 2. KIERROS JA RULLA LUKITTU - SÄILYTTÄÄ*/
            var rulla = document.getElementById("rulla");
            var ekaRandomNum = pelirivi[0];
            var ekaRandomKuva = "./kuvat/rulla" + ekaRandomNum + ".png";
            var rulla1Elementti = document.createElement("img");
            rulla1Elementti.src = ekaRandomKuva;
            rulla1Elementti.id = "rullaobjekti1";
            rulla.appendChild(rulla1Elementti);
        }
        if (tokaRullaEhto) {    /*JOS 2. KIERROS EIKÄ RULLAA LUKITTU - ARPOO UUDEN*/
            var rulla = document.getElementById("rulla");
            var tokaRandomNum = Math.floor(Math.random() * 5) + 1;
            var tokaRandomKuva = "./kuvat/rulla" + tokaRandomNum + ".png";
            var rulla2Elementti = document.createElement("img");
            rulla2Elementti.src = tokaRandomKuva;
            rulla2Elementti.id = "rullaobjekti2";
            rulla.appendChild(rulla2Elementti);
            pelirivi[1] = tokaRandomNum; 
        }
        if (tokaRullaEhto === false) {    /*JOS 2. KIERROS JA RULLA LUKITTU - SÄILYTTÄÄ*/
            var rulla = document.getElementById("rulla");
            var tokaRandomNum = pelirivi[1];
            var tokaRandomKuva = "./kuvat/rulla" + tokaRandomNum + ".png";
            var rulla2Elementti = document.createElement("img");
            rulla2Elementti.src = tokaRandomKuva;
            rulla2Elementti.id = "rullaobjekti2";
            rulla.appendChild(rulla2Elementti);
        }
        if (kolmasRullaEhto) {      /*JOS 2. KIERROS EIKÄ RULLAA LUKITTU - ARPOO UUDEN*/
            var rulla = document.getElementById("rulla");
            var kolmasRandomNum = Math.floor(Math.random() * 5) + 1;
            var kolmasRandomKuva = "./kuvat/rulla" + kolmasRandomNum + ".png";
            var rulla3Elementti = document.createElement("img");
            rulla3Elementti.src = kolmasRandomKuva;
            rulla3Elementti.id = "rullaobjekti3";
            rulla.appendChild(rulla3Elementti);
            pelirivi[2] = kolmasRandomNum; 
        }
        if (kolmasRullaEhto === false) {  /*JOS 2. KIERROS JA RULLA LUKITTU - SÄILYTTÄÄ*/
            var rulla = document.getElementById("rulla");
            var kolmasRandomNum = pelirivi[2];
            var kolmasRandomKuva = "./kuvat/rulla" + kolmasRandomNum + ".png";
            var rulla3Elementti = document.createElement("img");
            rulla3Elementti.src = kolmasRandomKuva;
            rulla3Elementti.id = "rullaobjekti3";
            rulla.appendChild(rulla3Elementti);
        }
        if (neljäsRullaEhto) {      /*JOS 2. KIERROS EIKÄ RULLAA LUKITTU - ARPOO UUDEN*/
            var rulla = document.getElementById("rulla");
            var neljäsRandomNum = Math.floor(Math.random() * 5) + 1;
            var neljäsRandomKuva = "./kuvat/rulla" + neljäsRandomNum + ".png";
            var rulla4Elementti = document.createElement("img");
            rulla4Elementti.src = neljäsRandomKuva;          
            rulla4Elementti.id = "rullaobjekti4";
            rulla.appendChild(rulla4Elementti);
            pelirivi[3] = neljäsRandomNum;
        }
        if (neljäsRullaEhto === false) {  /*JOS 2. KIERROS JA RULLA LUKITTU - SÄILYTTÄÄ*/
            var rulla = document.getElementById("rulla");
            var neljäsRandomNum = pelirivi[3];
            var neljäsRandomKuva = "./kuvat/rulla" + neljäsRandomNum + ".png";
            var rulla4Elementti = document.createElement("img");
            rulla4Elementti.src = neljäsRandomKuva;           
            rulla4Elementti.id = "rullaobjekti4";
            rulla.appendChild(rulla4Elementti);
        }
        voitontarkistus();
        kierrokset = 1;
        if (aloitusRaha === 0) {
            voittoElementti.innerText = "RAHAT LOPPU, ET VOI PELATA.";
            return;
        }
    }
}


function voitontarkistus() {                /*TARKISTAA ONKO VOITTO*/
    var kruunut = 0;
    var melonit = 0;
    var kirsikat = 0;
    var sitruunat = 0;
    var seiskat = 0;
    for (var i = 0; i < pelirivi.length; i++) {
        if (pelirivi[i] === 1) {
            seiskat += 1;
        }
        if (pelirivi[i] === 2) {
            sitruunat += 1;
        }
        if (pelirivi[i] === 3) {
            kirsikat += 1;
        }
        if (pelirivi[i] === 4) {
            melonit += 1;
        }
        if (pelirivi[i] === 5) {
            kruunut += 1;
        }
    }
    if (kierrokset === 2) {
        voittoElementti.innerText = "EI VOITTOA.\nASETA PANOS JA PELAA.";
        if (kruunut === 3) {
            var voitto = aloitusPanos * 2;
            aloitusRaha += voitto;
            voittoElementti.innerText = "VOITIT " + voitto + "€!!!";
            rahaElementti.innerText = "RAHAA: " + aloitusRaha + "€";
        }
        if (seiskat === 4) {
            var voitto = aloitusPanos * 3;
            aloitusRaha += voitto;
            voittoElementti.innerText = "VOITIT " + voitto + "€!!!";
            rahaElementti.innerText = "RAHAA: " + aloitusRaha + "€";
        }
        if (sitruunat === 4) {
            var voitto = aloitusPanos * 4;
            aloitusRaha += voitto;
            voittoElementti.innerText = "VOITIT " + voitto + "€!!!";
            rahaElementti.innerText = "RAHAA: " + aloitusRaha + "€";
        }
        if (kirsikat === 4) {
            var voitto = aloitusPanos * 5;
            aloitusRaha += voitto;
            voittoElementti.innerText = "VOITIT " + voitto + "€!!!";
            rahaElementti.innerText = "RAHAA: " + aloitusRaha + "€";
        }
        if (melonit === 4) {
            var voitto = aloitusPanos * 6;
            aloitusRaha += voitto;
            voittoElementti.innerText = "VOITIT " + voitto + "€!!!";
            rahaElementti.innerText = "RAHAA: " + aloitusRaha + "€";
        }
        if (kruunut === 4) {
            var voitto = aloitusPanos * 10;
            aloitusRaha += voitto;
            voittoElementti.innerText = "VOITIT " + voitto + "€!!!";
            rahaElementti.innerText = "RAHAA: " + aloitusRaha + "€";
        }
    }
    if (kierrokset === 1) {
        voittoElementti.innerText = "LUKITSE JA PELAA.";
        if (kruunut === 3) {
            var voitto = aloitusPanos * 2;
            voittoElementti.innerText = "VOITTAA " + voitto + "€\nLUKITSE JA PELAA.";
        }
        if (seiskat === 4) {
            var voitto = aloitusPanos * 3;
            voittoElementti.innerText = "VOITTAA " + voitto + "€!!!\nLUKITSE JA PELAA.";

        }
        if (sitruunat === 4) {
            var voitto = aloitusPanos * 4;
            voittoElementti.innerText = "VOITTAA " + voitto + "€\nLUKITSE JA PELAA.";
        }
        if (kirsikat === 4) {
            var voitto = aloitusPanos * 5;
            voittoElementti.innerText = "VOITTAA " + voitto + "€\nLUKITSE JA PELAA.";
        }
        if (melonit === 4) {
            var voitto = aloitusPanos * 6;
            voittoElementti.innerText = "VOITTAA " + voitto + "€\nLUKITSE JA PELAA.";
        }
        if (kruunut === 4) {
            var voitto = aloitusPanos * 10;
            voittoElementti.innerText = "VOITTAA " + voitto + "€\nLUKITSE JA PELAA.";
        }
    }
    
}

function ekaRulla() {
    var rulla = document.getElementById("rulla");
    var ekaRandomNum = Math.floor(Math.random() * 5) + 1;
    var ekaRandomKuva = "./kuvat/rulla" + ekaRandomNum + ".png";
    var rulla1Elementti = document.createElement("img");
    rulla1Elementti.src = ekaRandomKuva;
    rulla1Elementti.id = "rullaobjekti1";
    rulla.appendChild(rulla1Elementti);
    pelirivi.push(ekaRandomNum);
}

function tokaRulla() {
    var rulla = document.getElementById("rulla");
    var tokaRandomNum = Math.floor(Math.random() * 5) + 1;
    var tokaRandomKuva = "./kuvat/rulla" + tokaRandomNum + ".png";
    var rulla2Elementti = document.createElement("img");
    rulla2Elementti.src = tokaRandomKuva;
    rulla2Elementti.id = "rullaobjekti2";
    rulla.appendChild(rulla2Elementti);
    pelirivi.push(tokaRandomNum);
}

function kolmasRulla() {
    var rulla = document.getElementById("rulla");
    var kolmasRandomNum = Math.floor(Math.random() * 5) + 1;
    var kolmasRandomKuva = "./kuvat/rulla" + kolmasRandomNum + ".png";
    var rulla3Elementti = document.createElement("img");
    rulla3Elementti.src = kolmasRandomKuva;
    rulla3Elementti.id = "rullaobjekti3";
    rulla.appendChild(rulla3Elementti);
    pelirivi.push(kolmasRandomNum);

}

function neljäsRulla() {
    var rulla = document.getElementById("rulla");
    var neljäsRandomNum = Math.floor(Math.random() * 5) + 1;
    var neljäsRandomKuva = "./kuvat/rulla" + neljäsRandomNum + ".png";
    var rulla4Elementti = document.createElement("img");
    rulla4Elementti.src = neljäsRandomKuva;  
    rulla4Elementti.id = "rullaobjekti4";
    rulla.appendChild(rulla4Elementti);
    pelirivi.push(neljäsRandomNum);
}


                                                    /*LUODAAN LUKITSEPAINIKKEET*/
var lukitse = document.getElementById("lukitseRivi");

var lukitseKuva = "./kuvat/lukko.png";
lukitse1Elementti = document.createElement("img");
lukitse1Elementti.src = lukitseKuva;
lukitse1Elementti.classList = "lukitsePainikkeet";
lukitse1Elementti.id = "rullaLukko1";
lukitse1Elementti.addEventListener("click", function(event) {
    event.preventDefault();
    lukitaan1();
});   
lukitse.appendChild(lukitse1Elementti);

function lukitaan1() {                              /*LUKITAAN 1 RULLA*/
    if (kierrokset === 1) {
        voittoElementti.innerText = "ET VOI LUKITA.\nASETA PANOS JA PELAA.";
        return;
    }
    if (ekaRullaEhto === true) {
        ekaRullaEhto = false;
        var vaihdettavaReunus = document.getElementById("rullaobjekti1");
        vaihdettavaReunus.style.border = "solid red 7px"

    } else {
        ekaRullaEhto = true;
        var vaihdettavaReunus = document.getElementById("rullaobjekti1");
        vaihdettavaReunus.style.border = "solid"
    }                      
}

var lukitseKuva = "./kuvat/lukko.png";
lukitse2Elementti = document.createElement("img");
lukitse2Elementti.src = lukitseKuva;
lukitse2Elementti.classList = "lukitsePainikkeet";
lukitse2Elementti.id = "rullaLukko2";
lukitse2Elementti.addEventListener("click", function(event) {
    event.preventDefault();
    lukitaan2();
});
lukitse.appendChild(lukitse2Elementti);

function lukitaan2() {                        /*LUKITAAN 2 RULLA*/
    if (kierrokset === 1) {
        voittoElementti.innerText = "ET VOI LUKITA.\nASETA PANOS JA PELAA.";
        return;
    }
    if (tokaRullaEhto === true) {
        tokaRullaEhto = false;
        var vaihdettavaReunus = document.getElementById("rullaobjekti2");
        vaihdettavaReunus.style.border = "solid red 7px"
    } else {
        tokaRullaEhto = true;
        var vaihdettavaReunus = document.getElementById("rullaobjekti2");
        vaihdettavaReunus.style.border = "solid"
    }
}

var lukitseKuva = "./kuvat/lukko.png";
lukitse3Elementti = document.createElement("img");
lukitse3Elementti.src = lukitseKuva;
lukitse3Elementti.classList = "lukitsePainikkeet";
lukitse3Elementti.id = "rullaLukko3";
lukitse3Elementti.addEventListener("click", function(event) {
    event.preventDefault();
    lukitaan3();
});
lukitse.appendChild(lukitse3Elementti);

function lukitaan3() {                      /*LUKITAAN 3 RULLA*/
    if (kierrokset === 1) {
        voittoElementti.innerText = "ET VOI LUKITA.\nASETA PANOS JA PELAA.";
        return;
    }
    if (kolmasRullaEhto === true) {
        kolmasRullaEhto = false;
        var vaihdettavaReunus = document.getElementById("rullaobjekti3");
        vaihdettavaReunus.style.border = "solid red 7px"
    } else {
        kolmasRullaEhto = true;
        var vaihdettavaReunus = document.getElementById("rullaobjekti3");
        vaihdettavaReunus.style.border = "solid"
    }   
}

var lukitseKuva = "./kuvat/lukko.png";
lukitse4Elementti = document.createElement("img");
lukitse4Elementti.src = lukitseKuva;
lukitse4Elementti.classList = "lukitsePainikkeet";
lukitse4Elementti.id = "rullaLukko4";
lukitse4Elementti.addEventListener("click", function(event) {
    event.preventDefault();
    lukitaan4();
});
lukitse.appendChild(lukitse4Elementti);

function lukitaan4() {                      /*LUKITAAN 4 RULLA*/
    if (kierrokset === 1) {
        voittoElementti.innerText = "ET VOI LUKITA.\nASETA PANOS JA PELAA.";
        return;
    }
    if (neljäsRullaEhto === true) {
        neljäsRullaEhto = false;
        var vaihdettavaReunus = document.getElementById("rullaobjekti4");
        vaihdettavaReunus.style.border = "solid red 7px"
    } else {
        neljäsRullaEhto = true;
        var vaihdettavaReunus = document.getElementById("rullaobjekti4");
        vaihdettavaReunus.style.border = "solid"
    } 
}

                                                    /*ILMOITUS VOITOSTA*/
var voittoIlmoitus = document.getElementById("voitot");
var voittoElementti = document.createElement("p");
voittoElementti.id = "voitto";
voittoElementti.innerText = "ASETA PANOS JA PELAA.";
voittoIlmoitus.appendChild(voittoElementti);

                                                    /*PELAA PAINIKE*/
var pelaaP = document.getElementById("pelaa");
var pelaaElementti = document.createElement("p");
pelaaElementti.id = "play";
pelaaElementti.innerText = "PELAA";
pelaaP.addEventListener("click", function(event) { 
    event.preventDefault();
    pelataan();
});
pelaaP.appendChild(pelaaElementti);

                                                    /*VOITTORIVIT*/
var voittoriviKruunuIso = document.getElementById("kruunuIso");
for (i = 0; i < 4; i++) {
    var kruunu = "./kuvat/rulla5.png";
    var kruunuElementti = document.createElement("img");
    kruunuElementti.src = kruunu;
    kruunuElementti.id = "crown";
    voittoriviKruunuIso.appendChild(kruunuElementti);
}
var kruunuTekstiElementti = document.createElement("p");
kruunuTekstiElementti.id = "kruunuIsovoitto";
kruunuTekstiElementti.innerText = "10 x panos";
voittoriviKruunuIso.appendChild(kruunuTekstiElementti);

var voittoriviMeloni = document.getElementById("meloni");
for (i = 0; i < 4; i++) {
    var meloni = "./kuvat/rulla4.png";
    var meloniElementti = document.createElement("img");
    meloniElementti.src = meloni;
    meloniElementti.id = "crown";
    voittoriviMeloni.appendChild(meloniElementti);
}
var meloniTekstiElementti = document.createElement("p");
meloniTekstiElementti.id = "kruunuIsovoitto";
meloniTekstiElementti.innerText = "6 x panos";
voittoriviMeloni.appendChild(meloniTekstiElementti);

var voittoriviKirsikka = document.getElementById("kirsikka");
for (i = 0; i < 4; i++) {
    var kirsikka = "./kuvat/rulla3.png";
    var kirsikkaElementti = document.createElement("img");
    kirsikkaElementti.src = kirsikka;
    kirsikkaElementti.id = "crown";
    voittoriviKirsikka.appendChild(kirsikkaElementti);
}
var kirsikkaTekstiElementti = document.createElement("p");
kirsikkaTekstiElementti.id = "kruunuIsovoitto";
kirsikkaTekstiElementti.innerText = "5 x panos";
voittoriviKirsikka.appendChild(kirsikkaTekstiElementti);

var voittoriviSitruuna = document.getElementById("sitruuna");
for (i = 0; i < 4; i++) {
    var sitruuna = "./kuvat/rulla2.png";
    var sitruunaElementti = document.createElement("img");
    sitruunaElementti.src = sitruuna;
    sitruunaElementti.id = "crown";
    voittoriviSitruuna.appendChild(sitruunaElementti);
}
var sitruunaTekstiElementti = document.createElement("p");
sitruunaTekstiElementti.id = "kruunuIsovoitto";
sitruunaTekstiElementti.innerText = "4 x panos";
voittoriviSitruuna.appendChild(sitruunaTekstiElementti);

var voittoriviSeiska = document.getElementById("seiska");
for (i = 0; i < 4; i++) {
    var seiska = "./kuvat/rulla1.png";
    var seiskaElementti = document.createElement("img");
    seiskaElementti.src = seiska;
    seiskaElementti.id = "crown";
    voittoriviSeiska.appendChild(seiskaElementti);
}
var seiskaTekstiElementti = document.createElement("p");
seiskaTekstiElementti.id = "kruunuIsovoitto";
seiskaTekstiElementti.innerText = "3 x panos";
voittoriviSeiska.appendChild(seiskaTekstiElementti);

var voittoriviKruunuPieni = document.getElementById("kruunuPieni");
for (i = 0; i < 3; i++) {
    var kruunu = "./kuvat/rulla5.png";
    var kruunuElementti = document.createElement("img");
    kruunuElementti.src = kruunu;
    kruunuElementti.id = "crown";
    voittoriviKruunuPieni.appendChild(kruunuElementti);
}
var kruunuTekstiElementti = document.createElement("p");
kruunuTekstiElementti.id = "kruunuIsovoitto";
kruunuTekstiElementti.innerText = "2 x panos";
voittoriviKruunuPieni.appendChild(kruunuTekstiElementti);

