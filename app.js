//console.log(obrisiDugmad);

function menjanjeBoje(boja){
    let obrisiDugmad=document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;

    }
}

//menjanjeBoje("#c8a2c8");

let menjanje_Boje=(boja)=>{
    let obrisiDugmad=document.getElementsByClassName("obrisi");
    for (const dugme of obrisiDugmad) {
        dugme.style.backgroundColor=boja;
    }
}

// menjanje_Boje("blue");

let menjanjeBojeB=(boja)=>Array.from(document.getElementsByClassName("obrisi")).forEach(dugme=> dugme.style.backgroundColor=boja);
menjanjeBojeB("pink");



let obrisiDugmad=document.getElementsByClassName("obrisi");
for (const dugme of obrisiDugmad) {
    dugme.addEventListener("click", function(e){
        console.log(this);
        console.log(this.parentNode);
        let elementZaBrisanje=this.parentNode;
        elementZaBrisanje.remove();
        
    })
}

function obrisiRed(){
    this.parentNode.remove();
    for (const dugme of obrisiDugmad) {
        dugme.addEventListener("click", obrisiRed);
    }
}

function dodajDestinaciju(event){
    event.preventDefaults();
    let inputPolje=document.querySelector("#dodaj-destinaciju input");
    let nazivNoveDestinacije=inputPolje.value.trim();

    if (nazivNoveDestinacije){
        let ul=document.getElementById("lista");
        let noviLi=document.createElement("li");

        noviLi.innerHTML=`<span class="naziv">${nazivNoveDestinacije}</span>
        <span class="obrisi">obriši</span>`;
        ul.appendChild(noviLi);

        inputPolje.value="";
    }

    function pozivCallback(){
        let forma=document.forms["dodaj destinaciju"];
        forma.addEventListener("submit", dodajDestinaciju);
}
}

document.addEventListener("DOMContentLoaded", pozivCallback);

