interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "Mess",
    details: {
        author: 'Arianna',
        year: 1997,
    }
}

const {} = audioPlayer;
const song = 'New Song'
const { 
    song:anotherSong,
    songDuration:duration,
    details:details,
} = audioPlayer

//desestructurar DETAILS

const { author: author } = details

//console.log('Song:', anotherSong)
//console.log('Author:', author)
//console.log('Duration:', duration)


const dbz: string[] = ['Goku', 'Gohan', 'Vegeta']

console.log('Personaje 2:', dbz[3] || 'No hay personaje')