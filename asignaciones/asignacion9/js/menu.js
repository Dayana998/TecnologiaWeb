function MenuDesplegable() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}
/* */
function slide() {
    var n = 0;
    var vimg = [];
    vimg[0] = '<img src="imagenes/villa-tunari.jpg" width: 50%;>'
    vimg[1] = '<img src="imagenes/islaluna.jpg"width: 50%;>'
    vimg[2] = '<img src="imagenes/machia.jpg"width: 50%;>'
    vimg[3] = '<img src="imagenes/bahia.jpg"width: 50%;>'
    vimg[4] = '<img src="imagenes/carrasco.jpg"width: 50%;>'
    vimg[5] = '<img src="imagenes/parque.jpg"width: 50%;>'
    
    var m = document.getElementById('slide')
    window.onload = window.setInterval(function() {
        if (n < vimg.length) {
            m.innerHTML = vimg[n];
            n++;
        } else {
            n = 0;
        }
    },2000)
}