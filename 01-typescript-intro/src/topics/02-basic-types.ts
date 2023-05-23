
const skills: string[] = ['bash', 'throw', 'heal']; //usar const si la variable no va a cambiar

interface Character {
    name: string;
    hp: number;
    skills: string[];
    hometown?: string; // poner ? para que sea opcional
}

const strider:Character = {
    name: 'strider',
    hp: 100,
    skills: ['bash', 'heal'],
}

strider.hometown = 'Whiterun'

//console.table(strider)

export {}