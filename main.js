import {OBJEKTUMLISTA} from "./adat.js";
import { rendezesSzamszerint } from "./rendezes.js";
const ELEM=$("article");
$(document).ready(function() {
    init();
});
function init(){
    
    const tablazat=tablazatkeszit(OBJEKTUMLISTA);
    ELEM.append(tablazat);
    
}


function tablazatkeszit(OBJEKTUMLISTA){
    let osszerak="<table class='table table-dark table-striped'style='border: 2px solid black'>";
    osszerak+="<tr><th style='border: 1px solid black'>Név:</th><th style='border: 1px solid black'>Fajta:</th><th >Kor:</th></tr>";
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
        osszerak+="<tr>";
        osszerak+="<td style='border: 1px solid black'>"+OBJEKTUMLISTA[index].név+"</td>";
        osszerak+="<td style='border: 1px solid black'>"+OBJEKTUMLISTA[index].fajta+"</td>";
        osszerak+="<td style='border: 1px solid black'>"+OBJEKTUMLISTA[index].kor+"</td>";
        osszerak+="</tr>";
        
    }
    osszerak+="</table>";
    return osszerak;
}
ELEM.on("click", function(){
    console.log("ram nyomtal bro!");
    rendezesSzamszerint(OBJEKTUMLISTA,kulcs);
})