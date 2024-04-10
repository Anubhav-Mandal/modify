console.log("Welcome to modify")
let songIndex=0;
let audioElement = new Audio('song/L.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let songItems = document.Array.from(getElementsByClassName('songitem'))

let songs = [
    {songName: "let me love you",filePath:"song/L.mp3",coverPath:"covers/letme.jpg"},
    {songName: "Tere naina",filePath:"song/T.mp3",coverPath:"covers/tere_naina.jpeg"},
    {songName: "Jab se tere naina",filePath:"song/j.mp3",coverPath:"covers/Saawariya.jpg"},
    {songName: "Labon ko",filePath:"song/La.mp3",coverPath:"covers/labon_ko.jpg"},
    {songName: "Warriors",filePath:"song/w.mp3",coverPath:"covers/warriors.jpeg"}
]

songItems.forEach((element)=>{
  console.log(element)
  element.getElementByTagName("img")[0].src = songs[i].filePath;

})


masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-solid fa-pause');
     gif.style.opacity=1; 
      
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-pause');
        masterPlay.classList.add('fa-play-circle')
        gif.style.opacity=0;
    }
    

})



audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = myProgressBar * audioElement.duration/100;
})