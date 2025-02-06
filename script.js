let songIndex = 0;
let audioElement = new Audio('song/g.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterPause = document.getElementById('masterPause');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "G-Shit", filePath:"song/g.mp3", coverPath:"i10.jpg"},
    {songName: "Ishq", filePath:"song/I.mp3", coverPath:"i1.jpg"},
    {songName: "Thaa", filePath:"song/T.mp3", coverPath:"i2.jpg"},
    {songName: "Tu Judaa", filePath:"song/tu.mp3", coverPath:"i3.jpg"},
    {songName: "Zindagi", filePath:"song/zind.mp3", coverPath:"i4.jpg"},
    {songName: "6 6 Futte jatt", filePath:"song/6.mp3", coverPath:"i5.jpg"},
    {songName: "TOY", filePath:"song/Toy.mp3", coverPath:"i6.jpg"},
    {songName: "Hustle", filePath:"song/hus.mp3", coverPath:"i7.jpg"},
    {songName: "52 bars", filePath:"song/52.mp3", coverPath:"i8.jpg"},
    {songName: "FUCK EM ALL", filePath:"song/uck.mp3", coverPath:"i9.jpg"}
]
 audioElement.play();

masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        gif.style.opacity=1;
    }
})
masterPause.addEventListener('click', ()=>{
    if(audioElement.play || audioElement.currentTime>0){
        audioElement.pause();
        gif.style.opacity=0;
    }
   
})

audioElement.addEventListener('timeupdate', ()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100); 
    progressbar.value = progress;
})

progressbar.addEventListener('change', ()=>{
    audioElement.currentTime = progressbar.value * audioElement.duration/100;
})

Array.from(document.getElementsByClassName('ii')).forEach((element)=>{
    element.addEventListener('click', (e)=>{        
        songIndex = parseInt(e.target.id);        
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;

        if (songIndex==1) {
            audioElement.src = 'song/g.mp3';   
        } 
        else if(songIndex==2){
            audioElement.src = 'song/I.mp3';    
        }
        else if(songIndex==3){
            audioElement.src = 'song/T.mp3';    
        }
        else if(songIndex==4){
            audioElement.src = 'song/tu.mp3';    
        }
        else if(songIndex==5){
            audioElement.src = 'song/zind.mp3';    
        }
        else if(songIndex==6){
            audioElement.src = 'song/6.mp3';    
        }
        else if(songIndex==7){
            audioElement.src = 'song/Toy.mp3';    
        }
        else if(songIndex==8){
            audioElement.src = 'song/hus.mp3';    
        }
        else if(songIndex==9){
            audioElement.src = 'song/52.mp3';    
        }
        else {
            audioElement.src = 'song/uck.mp3';    
        }       
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
       
  })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    if (songIndex==1) {
        audioElement.src = 'song/g.mp3';   
    } 
    else if(songIndex==2){
        audioElement.src = 'song/I.mp3';    
    }
    else if(songIndex==3){
        audioElement.src = 'song/T.mp3';    
    }
    else if(songIndex==4){
        audioElement.src = 'song/tu.mp3';    
    }
    else if(songIndex==5){
        audioElement.src = 'song/zind.mp3';    
    }
    else if(songIndex==6){
        audioElement.src = 'song/6.mp3';    
    }
    else if(songIndex==7){
        audioElement.src = 'song/Toy.mp3';    
    }
    else if(songIndex==8){
        audioElement.src = 'song/hus.mp3';    
    }
    else if(songIndex==9){
        audioElement.src = 'song/52.mp3';    
    }
    else {
        audioElement.src = 'song/uck.mp3';    
    }   
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=1){
        songIndex = 1;
    }
    else{
        songIndex -= 1;
    }
    
    if (songIndex==1) {
        audioElement.src = 'song/g.mp3';   
    } 
    else if(songIndex==2){
        audioElement.src = 'song/I.mp3';    
    }
    else if(songIndex==3){
        audioElement.src = 'song/T.mp3';    
    }
    else if(songIndex==4){
        audioElement.src = 'song/tu.mp3';    
    }
    else if(songIndex==5){
        audioElement.src = 'song/zind.mp3';    
    }
    else if(songIndex==6){
        audioElement.src = 'song/6.mp3';    
    }
    else if(songIndex==7){
        audioElement.src = 'song/Toy.mp3';    
    }
    else if(songIndex==8){
        audioElement.src = 'song/hus.mp3';    
    }
    else if(songIndex==9){
        audioElement.src = 'song/52.mp3';    
    }
    else {
        audioElement.src = 'song/uck.mp3';    
    }
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
   
})