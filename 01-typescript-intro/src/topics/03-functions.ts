function addNumbers(a: number, b:number) {

    return a + b;
}

const result: number = addNumbers(1, 2)

const addNumberArrow = (a: number, b: number ):string => {
    return `${a + b}`;
}

const result2: string = addNumberArrow(3, 2)

function multiply (firstNumer:number, secondNumber?:number, base:number = 2){
    return firstNumer*base;

}

const multiplyResult:number = multiply(5) 

//console.log ({result: result, result2, multiplyResult})

//parte 2

interface Character {
    name:string
    hp: number
    showHp: () => void;

}

const seba = {
    name: 'Seba',
    hp: 100,
    showHp() {

        console.log(`Life Points ${this.hp}`)

    }
}

const healCharacter = ( character: Character , amount:number ) => {
    character.hp += amount;
}

healCharacter(seba,10)

seba.showHp();



export{};