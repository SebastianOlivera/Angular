/*
    ===== Código de TypeScript =====
*/

interface SuperHero {
    name: string;
    age: number;
    address: Address,
    showAddress:() => string //IMPORTANTE LA FUNCION DEVUELVE ALGO Y SE PONE ASI :() => STRING
    //Cuando hay un objeto adentro de una interfaz crear una interfaz para ese objeto
}

interface Address {
    street: string; //f2 sobre la palabra para cambiar todos los nombres
    country: string;
    city: string;
}

const superHeroe: SuperHero = {
    name: 'Spiderman',
    age: 30,
    address: {
        street: 'Main St',
        country: 'USA',
        city: 'NY'
    },
    showAddress() {
        return this.name + ', ' + this.address.city + ', ' + this.address.country;
    }
}


const address = superHeroe.showAddress();
console.log( address );




export {};