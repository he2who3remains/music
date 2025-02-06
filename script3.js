let songIndex = 0;
let audioElement = new Audio('page3/so1.mp3');
let masterPlay = document.getElementById('masterPlay');
let masterPause = document.getElementById('masterPause');
let progressbar = document.getElementById('progressbar');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songitem'));
let masterSongName = document.getElementById('masterSongName');

let songs = [
    {songName: "Hurt", filePath:"page3/so1.mp3", coverPath:"page3/im1.jpg"},
    {songName: "Ave Maria", filePath:"page3/so2.mp3", coverPath:"page3/im2.jpg"},
    {songName: "Aaja Sanam Madhur Chandani", filePath:"page3/so3.mp3", coverPath:"page3/im3.jpg"},
    {songName: "Dil To Bachcha Hai", filePath:"page3/so4.mp3", coverPath:"page3/im4.jpg"},
    {songName: "Dil Diyan Gallan", filePath:"page3/so5.mp3", coverPath:"page3/im5.jpg"},
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
            audioElement.src = 'page3/so1.mp3';   
        } 
        else if(songIndex==2){
            audioElement.src = 'page3/so2.mp3';    
        }
        else if(songIndex==3){
            audioElement.src = 'page3/so3.mp3';    
        }
        else if(songIndex==4){
            audioElement.src = 'page3/so4.mp3';    
        }
        else {
            audioElement.src = 'page3/so5.mp3';    
        }
        masterSongName.innerText = songs[songIndex-1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
       
  })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>4){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    if (songIndex==1) {
        audioElement.src = 'page3/so1.mp3';   
    } 
    else if(songIndex==2){
        audioElement.src = 'page3/so2.mp3';    
    }
    else if(songIndex==3){
        audioElement.src = 'page3/so3.mp3';    
    }
    else if(songIndex==4){
        audioElement.src = 'page3/so4.mp3';    
    }
    else {
        audioElement.src = 'page3/so5.mp3';    
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
        audioElement.src = 'page3/so1.mp3';   
    } 
    else if(songIndex==2){
        audioElement.src = 'page3/so2.mp3';    
    }
    else if(songIndex==3){
        audioElement.src = 'page3/so3.mp3';    
    }
    else if(songIndex==4){
        audioElement.src = 'page3/so4.mp3';    
    }
    else {
        audioElement.src = 'page3/so5.mp3';    
    }
  
  
    gif.style.opacity = 1;
    masterSongName.innerText = songs[songIndex-1].songName;
    audioElement.currentTime = 0;
    audioElement.play();  
})