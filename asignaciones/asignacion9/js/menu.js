function MenuDesplegable() {
	document.getElementsByClassName("navigation")[0].classList.toggle("responsive");
}

function slide(encabezado) {
    var n = 0;
    var vimg = [];
    vimg[0] = '<img src="imagenes/villa-tunari.jpg" width: 100%; height:100%;>'
    vimg[1] = '<img src="imagenes/islaluna.jpg" width: 100%; height:100%;>'
    vimg[2] = '<img src="imagenes/machia.jpg" width: 100%; height:100%;>'
    vimg[3] = '<img src="imagenes/titicachi.jpg" width: 100%; height:100%;>'
    vimg[4] = '<img src="imagenes/copac.jpg" width: 100%; height:100%;>'
    vimg[5] = '<img src="imagenes/parque.jpg" width: 100%; height:100%;>'
    
    var m = document.getElementById('slide')
    window.onload = window.setInterval(function() {
        if (n < vimg.length) {
            m.innerHTML = vimg[n];
            n++;
        } else {
            n = 0;
        }
    }, 1000)
}