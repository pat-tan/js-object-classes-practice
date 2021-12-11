const radio = {
    stations: [ 
    {
        name: 'Rock 95.5',
        songs: [
            {
                artist: 'Gil Scott Heron', 
                title: 'Pieces of a Man'
            },
            {
                artist: 'ACDC',
                title: 'Back in Black'
            }, 
            {
                artist: 'Bjork',
                title: 'Army of Me'
            }, 
            {
                artist: 'Mobb Deep',
                title: 'Drink Away the Pain' 
            }
        ] 
    },
    {
        name: 'Z100',
        songs: [
            {
                artist: 'Silk Sonic', 
                title: 'Smoking By the Window'
            },
            {
                artist: 'Stevie Ray Vaughn',
                title: 'Heavens Door'
            }, 
            {
                artist: 'Beyonce',
                title: 'Single Ladies'
            }, 
            {
                artist: 'Black Keys',
                title: 'Gold On the Ceiling'
            }
        ] 
    },
    {
        name: '106.7 Lite FM',
        songs: [
            {
                artist: 'Percy Faith', 
                title: 'Deck the Halls With Boughs of Holly'
            },
            {
                artist: 'Jose Feliciano',
                title: 'Feliz Navidad'
            }, 
            {
                artist: 'John Lennon',
                title: 'Happy Xmas War Is Over '
            },
            {
                artist: 'Michael Buble',
                title: 'Jingle Bells'
            },

        ] 
    } 
       
    ],
    changeStation() {
        // function randInt(max) {
        //     return Math.floor(Math.random() * max);
        // }
        // find random number, use that number to access a station, and then access a song in that station
        let numStations = radio.stations.length;
        // console.log("numStations= "+numStations)

        let i = Math.floor(Math.random() * (numStations));
        // console.log("i= "+i)

        let numSongs = radio.stations[i].songs.length;
        // console.log("numSongs= "+numSongs)

        let j = Math.floor(Math.random() * (numSongs));
        // console.log("j= "+j)

        let artistName = this.stations[i].songs[j].artist;
        let songTitle = this.stations[i].songs[j].title;
        // console.log(`${this.stations[i].name}`)
        console.log(`Now Playing: "${songTitle}" by "${artistName}"`)
    }
}

radio.changeStation();



