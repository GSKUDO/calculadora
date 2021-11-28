function somar() {
    let numeroum = parseFloat(document.getElementById("primeiro").value);
    let numerodois = parseFloat(document.getElementById("segundo").value); 
    let oqueda = numeroum + numerodois;
    document.getElementById("resultado").value = oqueda;
    console.log (oqueda);
    return true;
}

function subtrair() {
    let numeroum = parseFloat(document.getElementById("primeiro").value);
    let numerodois = parseFloat(document.getElementById("segundo").value); 
    let oqueda = numeroum - numerodois;
    document.getElementById("resultado").value = oqueda;
    console.log (oqueda);
    return true;
}

function multiplicar() {
    let numeroum = parseFloat(document.getElementById("primeiro").value);
    let numerodois = parseFloat(document.getElementById("segundo").value); 
    let oqueda = numeroum * numerodois;
    document.getElementById("resultado").value = oqueda;
    console.log (oqueda);
    return true;
}

function dividir() {
    let numeroum = parseFloat(document.getElementById("primeiro").value);
    let numerodois = parseFloat(document.getElementById("segundo").value); 
    let oqueda = numeroum / numerodois;
    document.getElementById("resultado").value = oqueda;
    console.log (oqueda);
    return true;
}