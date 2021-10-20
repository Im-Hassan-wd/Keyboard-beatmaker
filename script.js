const tones = document.querySelectorAll('audio');
const visual = document.querySelector(".visual");
const pads = document.querySelectorAll(".pad");

window.addEventListener("keydown", function(e){
    drumKit(e);
});
window.addEventListener("keyup", removePad)

function removePad() {
    pads.forEach(pad => {
        pad.classList.remove("active");
    })
}

function drumKit(e) {
    const key = e.key;

    tones.forEach((tone, i) => {
       switch (key) {

        case 'a': 
            tones[0].currentTime = 0;
            tones[0].play();
            pads[0].classList.add("active");
            break;
        case 'b':
            tones[1].currentTime = 0;
            tones[1].play();
            pads[0].classList.add("active");
            break;
        case 'c':
            tones[2].currentTime = 0;
            tones[2].play();
            pads[0].classList.add("active");
            break;
        case 'd':
            tones[3].currentTime = 0;
            tones[3].play();
            pads[0].classList.add("active");
            break;
        case 'e':
            tones[4].currentTime = 0;
            tones[4].play();
            pads[0].classList.add("active");
            break;
        case 'f':
            tones[5].currentTime = 0;
            tones[5].play();
            pads[1].classList.add("active");
            break;
        case 'g':
            tones[6].currentTime = 0;
            tones[6].play();
            pads[1].classList.add("active");
            break;
        case 'h':
            tones[7].currentTime = 0;
            tones[7].play();
            pads[1].classList.add("active");
            break;
        case 'i':
            tones[8].currentTime = 0;  
            tones[8].play();
            pads[1].classList.add("active");
            break;
        case 'j':
            tones[9].currentTime = 0;
            tones[9].play();
            pads[1].classList.add("active");
            break;
        case 'k':
            tones[10].currentTime = 0; 
            tones[10].play();
            pads[3].classList.add("active");
            break;
        case 'l':
            tones[11].currentTime = 0;  
            tones[11].play();
            pads[3].classList.add("active");
            break;
        case 'm':
            tones[12].currentTime = 0; 
            tones[12].play();
            pads[3].classList.add("active");
            break;
        case 'n':
            tones[13].currentTime = 0;  
            tones[13].play();
            pads[3].classList.add("active");
            break;
        case 'o':
            tones[14].currentTime = 0;  
            tones[14].play();
            pads[3].classList.add("active");
            break;
        case 'p':
            tones[15].currentTime = 0;  
            tones[15].play();
            pads[4].classList.add("active");
            break;
        case 'q':
            tones[16].currentTime = 0;             
            tones[16].play();
            pads[4].classList.add("active");
            break;
        case 'r':
            tones[17].currentTime = 0;              
            tones[17].play();
            pads[4].classList.add("active");
            break;
        case 's':
            tones[18].currentTime = 0;              
            tones[18].play();
            pads[4].classList.add("active");
            break;
        case 't':
            tones[19].currentTime = 0;              
            tones[19].play();
            pads[4].classList.add("active");
            break;
        case 'u':
            tones[20].currentTime = 0;              
            tones[20].play();
            pads[5].classList.add("active");
            break;
        case 'v':
            tones[21].currentTime = 0;              
            tones[21].play();
            pads[0].classList.add("active");
            break;
        case 'w':
            tones[22].currentTime = 0;              
            tones[22].play();
            pads[0].classList.add("active");
            break;
        case 'x':
            tones[23].currentTime = 0;              
            tones[23].play();
            pads[0].classList.add("active");
            break;
        case 'y':
            tones[24].currentTime = 0;              
            tones[24].play();
            pads[0].classList.add("active");
            break;
        case 'z':
            tones[25].currentTime = 0;              
            tones[25].play();
            pads[3].classList.add("active");
            break;
        case ' ':
            tones[4].currentTime = 0;              
            tones[4].play();
            pads[1].classList.add("active");
            break;
       }
    });
}
