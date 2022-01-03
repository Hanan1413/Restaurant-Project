//Select element function

const selectElement = function(element){
    return document.querySelector(element)
};

let menuToggle = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggle.addEventListener('click', function(){
    body.classList.toggle('open')
});



// // Scroll reveal

// window.sr = ScrollReveal();
// sr.reveal('.animate-left',{
//     origin:'left',
//     duration:1000,
//     distance:'25rem',
//     delay:400
// });
// sr.reveal('.animate-rigth',{
//     origin:'right',
//     duration:1000,
//     distance:'25rem',
//     delay:400
// });

// sr.reveal('.animate-top',{
//     origin:'top',
//     duration:1000,
//     distance:'25rem',
//     delay:600
// });


// sr.reveal('.animate-bottom',{
//     origin:'bottom',
//     duration:1000,
//     distance:'25rem',
//     delay:600
// });




let  video = document.querySelector('.video');
let juice = document.querySelector('.orange-jusice');
let btn = document.getElementById('play-pause')


 let = togglePlayPause = () =>{
    if(video.paused){
        btn.className = "pause";
        video.play();

    }else{
        btn.className = "play";
        video.pause();
    }

}
 function togglePlayPause(){
    if(video.paused){
         btn.className = "pause";
        video.play();

     }else{
         btn.className = "play";
         video.pause();
     }
 }


// Video 
btn.onclick = function(){
    togglePlayPause()
}
video.addEventListener('timeupdate', function(){
    // juice.display.true;

    var jusicePos = video.currentTime / video.duration;
    juice.style.width = jusicePos * 100 + "%";
    if(video.ended){
        btn.className = "play"
    }
})

function countBs(str) {

    let result = 0
       
    for (let i = 0; i < str.length; i++) {
        if (str[i] === "B") {
            result+=1
            
        }
        
    }

    return result

}

 const countChar =  (str, letter) => {
    let result = 0
       
    for (let i = 0; i < str.length; i++) {
        if (str[i] === letter  )

            result+=1
        
        
    }

    return result

 }
