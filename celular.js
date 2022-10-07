class Celular{
    constructor(color, peso, tamaño, rdp, rdc, ram){
        this.color = color;
        this.peso = peso;
        this.tamaño = tamaño;
        this.resolucionDePantalla = rdp;
        this.resolucionDecamara = rdc;
        this.memoriaRam = ram;
        this.encendido = false;
    }

    presionarBotonEncendido(){
        if(this.encendido == false){
            alert(`calular prendido.`);
            this.encendido = true;
        } else {
            alert(`celular apagado.`);
            this.encendido = false;
        }
    }

    reiniciar(){
        if(this.encendido == true){
            alert("reiniciando celular.");
        } else {
            alert(`El celular esta apagado.`);
        }
    }

    tomarFoto(){
        alert(`Foto tomada en una resolucion de ${this.resolucionDecamara}`);
    }

    grabarVideo(){
        alert(`Video grabado en una resolucion de ${this.resolucionDecamara}`);
    }

    mobileInfo(){
        return `
        color : <b>${this.color}<hr>
        peso: <b>${this.peso}<hr>
        tamaño: <b>${this.tamaño}<hr>
        resolucion de video: <b>${this.resolucionDecamara}<hr>
        memoria ram: <b>${this.memoriaRam}<hr><br><br>
        `
    }
}


celular1 = new Celular("Negro", "190g", "76.6 mm X 169.6 mm X 8.3 mm", "6.71 in, IPS, 720 x 1650 píxeles, 24 bit", "50 MP", 4574);
celular2 = new Celular("rojo", 25, "142", "full hd", "30 MP", 1425);
document.write(celular1.mobileInfo());
document.write(celular2.mobileInfo());
celular1.presionarBotonEncendido();
celular1.reiniciar();
celular1.tomarFoto();
celular1.grabarVideo();
celular1.mobileInfo();
