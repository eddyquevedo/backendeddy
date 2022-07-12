//Declaracion de la clase Usuario
class Usuario {
    constructor(nombre,apellido,libros,mascotas){ //definimos los atributos
    this.nombre = nombre;
    this.apellido =apellido;
    this.libros = libros;
    this.mascotas = mascotas;
    }

//definimos los Metodos
    getFullName() {
        return `Bienvenido ${this.nombre} ${this.apellido}`;
    }

    addMascotas(){
        this.mascotas.push('oveja')
        return this.mascotas;
    }

    countMascotas(){
        return this.mascotas.length;
    }

    addBook(){
        this.libros.push({nombre: 'El viejo y el mar',autor: 'Ernest Hemingway'})
        return this.libros;
    }
    getBookNames(){
        return this.libros.map(LibrosName =>{
            return LibrosName.nombre
        })
    }
}

const usuario1 = new Usuario('Juan','Perez',[{nombre: 'El Silmarillion',autor: 'JR R Tolkien'},{nombre: 'Un hombre sin igual',autor: 'Bill Bright'}],['Leon','cerdo']); //la instancia de la clase hay que asignarle a la variable usuario1

//const usuario2 = new Usuario('Alberto','Parra',[{nombre: 'Decamerón',autor: 'Giovanni Boccaccio'},{nombre: 'Edipo rey',autor: 'Sófocles'}],['Perro','Loro']);

console.log(usuario1.getFullName());
console.log(usuario1.addMascotas());
console.log(usuario1.countMascotas());
console.log(usuario1.addBook());
console.log(usuario1.getBookNames());

