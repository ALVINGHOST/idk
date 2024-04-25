"use strict"

window.addEventListener("load",()=>{
    // let round = document.querySelectorAll(".round-table");
    // let square = document.querySelectorAll(".square-table");
    // let rectangle = document.querySelectorAll(".rectangle-table");
    // let bigRound = document.querySelectorAll(".round-table-big");

    let tables = document.querySelectorAll(".free");
    for (let i = 0; i < tables.length; i++) {
        tables[i].addEventListener("click",function(){
            if(this.classList.contains("free")){
            this.classList.replace("free","booked");
            } else{
            this.classList.replace("booked","free");
            }
           
        });
    }
    document.querySelector("#help").addEventListener("click",()=>{
        let helpdiv = document.querySelector("#helpdiv");
        helpdiv.classList.toggle("d-none");
    });
 queSystem();
})

function queSystem() {

    let button = document.querySelector("#ställ_i_kö");
    let outputbox = document.querySelector("#outputbox");

    button.addEventListener("click", function(){
        let name = document.querySelector("#namn").value;
        let quantity = document.querySelector("#antal").value;


        if(outputbox.classList.contains("d-none")){
            outputbox.classList.remove("d-none");
        };
        let p = document.createElement("p");
        outputbox.appendChild(p);
        p.textContent = name + " " + quantity;

        document.querySelector("#namn").value = "";
        document.querySelector("#antal").value = "";

        p.addEventListener("contextmenu",function giveTable(event){
            event.preventDefault();
            if(confirm("Vill du ge "+name+" ett bord?")){
                console.log("sätta på boprd");
                this.remove();
                if (outputbox.lastChild.tagName == undefined){
                    outputbox.classList.add("d-none"); 
                }

                // console.log(outputbox.lastChild.tagName);

            }
        })
    })
}