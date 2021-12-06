const coche = (function(){
    let _marca, _velocidad = 0, _puertas;

    function setMarca(marca) {
        _marca = marca;

        return _marca;
    }
    function getMarca() {
        return _marca;
    }

    function acelerar(){
        _velocidad++;
    }
    function frenar(){
        _velocidad--;
    }
    function getVelociad() {
        return _velocidad
    }

    return {
        setMarca,
        getMarca,
        acelerar,
        frenar,
        getVelociad
    };
}
)();


coche.setMarca("Renault");

coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();
coche.acelerar();

console.log("Marca:", coche.getMarca(), "Veloidad:", coche.getVelociad());