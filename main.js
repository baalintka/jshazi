import {OBJEKTUMLISTA} from "./adat.js";
function init(){
    const ELEM=$("article");
    const tablazat=tablazatkeszit(OBJEKTUMLISTA);
    ELEM.append(tablazat);
    
}


function tablazatkeszit(OBJEKTUMLISTA){
    let osszerak="<table>";
    osszerak+="<tr>+<th>Név:</th>+<th>Fajta:</th>+<th>Kor:</th> +</tr>";
    for (let index = 0; index < OBJEKTUMLISTA.length; index++) {
        osszerak+="<tr>";
        osszerak+="<td>"+OBJEKTUMLISTA[index].név+"</td>";
        osszerak+="<td>"+OBJEKTUMLISTA[index].fajta+"</td>";
        osszerak+="<td>"+OBJEKTUMLISTA[index].kor+"</td>";
        osszerak+="</tr>";
        
    }
    osszerak+="</table>";
    return osszerak
}