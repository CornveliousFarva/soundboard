// Variable Declaration
const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong']

// Loop through the sounds
sounds.forEach(sound => {
    const btn = document.createElement('button')
    btn.classList.add('btn')

    btn.innerText = sound

    btn.addEventListener('click', () => {
        stopSongs()

        document.getElementById(sound).play()

    })
        
        document.getElementById('buttons').appendChild(btn)
})

// Function to stop songs
function stopSongs() {
    sounds.forEach(sound => {
        const cong = document.getElementById(sound)
        
        song.pause()
        song.currentTime = 0;
    })
}