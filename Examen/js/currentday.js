// fecha actual dinámicamente en el siguiente formato de fecha: lunes 6 de abril de 2020
function fecha(){
    var f = new Date();
                    document.write(f.getDate() + "/" + (f.getMonth() +1) + "/" + f.getFullYear());
    }
    fecha();