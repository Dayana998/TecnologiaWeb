function fecha() {
    var momento = new Date();
    dia = momento.getDate();
    mes = momento.getMonth();
    year = momento.getFullYear();

    mostrar = dia + "/" + mes + "/" + year;
    document.getElementById('fecha').innerHTML = mostrar;

}