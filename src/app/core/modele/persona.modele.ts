export class persona{
    id?: number;
    nombre: String;
    iapellido: String;
    img: String;

    constructor(nombre: String, iapellido: String, img: String){
        this.nombre = nombre;
        this.iapellido = iapellido;
        this.img = img;
    }

}