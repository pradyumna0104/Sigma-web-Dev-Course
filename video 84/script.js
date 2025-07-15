console.log("i am working");
let currSong = new Audio();
let previous = document.querySelector("#previous");
let play = document.querySelector("#playsong");
let next = document.querySelector("#next");
let songs;
let songul;


function secondsToMinutesSeconds(seconds){
    if(isNaN(seconds)||seconds < 0){
        return "00:00";
    }
    const minutes = Math.floor(seconds/60);
    const remainingSeconds = Math.floor(seconds%60);

    const formatMinutes = String(minutes).padStart(2,'0');
    const formattedSeconds = String(remainingSeconds).padStart(2,'0');

    return `${formatMinutes}:${formattedSeconds}`;

}

playMusic = (track ,pause = false)=>{
    if(track.endsWith(".m4a")){
        currSong.src = "/songs/"+track;
        document.querySelector(".song-info").innerHTML = track.replaceAll("%20"," ").split(".")[0];
    }else{
        currSong.src = "/songs/"+track+".m4a";
        document.querySelector(".song-info").innerHTML = track;
    }
    console.log(currSong);
    currSong.play();
    play.src = "img/pause.svg";
    document.querySelector(".song-time").innerHTML = "00:00/00:00";
}

async function getsongs(){
    let a = await fetch("http://127.0.0.1:5500/songs/");
    let response = await a.text();
    let div = document.createElement("div");
    div.innerHTML= response;
    let as = div.getElementsByTagName("a");
    let songs = [];
    for(let i=0;i<as.length;i++){
        const element = as[i];
        if(element.href.endsWith(".m4a") || element.href.endsWith(".mp3")){
            //it break the url into 2 part before "/songs/" and after "/songs/"
            //so take its after part i.e = [1]
            songs.push(element.href.split("/songs/")[1]);
        }
    }
    return songs;
}


async function main(){
    songs = await getsongs();
    // console.log(songs);

    // Set the first song as the default current song
    if (songs.length > 0) {
        currSong.src = "/songs/" + songs[0];
        document.querySelector(".song-info").innerHTML = songs[0].replaceAll("%20"," ").split(".")[0];
        document.querySelector(".song-time").innerHTML = "00:00/00:00";
        play.src = "img/play.svg"; // show play icon initially
    }


    songul = document.querySelector(".library-songs").getElementsByTagName("ul")[0];
    for(const song of songs){
        songul.innerHTML += `<li>
                            <img class="invert" src="img/music.svg" alt="music">
                            <div class="info">
                                <p>${song.replaceAll("%20"," ").split(".")[0]}</p>
                                <p>Card Artist</p>
                            </div>
                            <div class="play-now">
                                <p>Play Now</p>
                                <img class="invert" src="img/play.svg" alt="">
                            </div>
                        </li>`;
    }

    //attach event listener to each song
    Array.from(document.querySelector(".library-songs").getElementsByTagName("li")).forEach((e)=>{
        // console.log(e);
        e.addEventListener("click",() =>{
            // console.log(e.getElementsByTagName("div")[0].firstElementChild.innerHTML);
            playMusic(e.getElementsByTagName("div")[0].firstElementChild.innerHTML);
        })
    })
    //attach an event listener for play and pause
    play.addEventListener("click",()=>{
        if(currSong.paused){
            currSong.play();
            play.src = "img/pause.svg";
        }else{
            currSong.pause();
            play.src = "img/play.svg";
        }
    })

    //listen for time update event
    currSong.addEventListener("timeupdate",()=>{
        // console.log(currSong.currentTime,currSong.duration);
        document.querySelector(".song-time").innerHTML = `${secondsToMinutesSeconds(currSong.currentTime)}/
                                                        ${secondsToMinutesSeconds(currSong.duration)}`;
        document.querySelector(".circle").style.left = (currSong.currentTime/currSong.duration) * 100 + "%"; 
    })
    
    //add event listener to the seekbar
    document.querySelector(".seekbar").addEventListener("click",e=>{
        // console.log(e.offsetX);//giving where we touch
        // console.log(e.target.getBoundingClientRect().width);//giving full width
        let percent = (e.offsetX/e.target.getBoundingClientRect().width)*100;
        document.querySelector(".circle").style.left = percent + "%";
        currSong.currentTime = (currSong.duration*percent)/100;
    })

    //add event listener to the hamburger
    document.querySelector(".hamburger").addEventListener("click",e=>{
        document.querySelector(".left").style.left = "0%";
    })

    //add event listener to the close icon
    document.querySelector(".close-icon").addEventListener("click",e=>{
        document.querySelector(".left").style.left = "-100%"; 
    })

    //add event listener to the previous
    document.querySelector("#previous").addEventListener("click",()=>{
        // console.log(currSong.src);
        // console.log(currSong.src.split("/songs/")[1]);
        let index = songs.indexOf(currSong.src.split("/songs/")[1]);
        // console.log(songs, index);
        if(index > 0){
            playMusic(songs[--index]);
        }
        // console.log(currSong);
    })
    //add event listener to the next
    document.querySelector("#next").addEventListener("click",()=>{
        let index = songs.indexOf(currSong.src.split("/songs/")[1]);
        if(index+1 < songs.length){
            playMusic(songs[++index]);
        }
    })
}
main()