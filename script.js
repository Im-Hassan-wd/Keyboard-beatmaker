const tones = document.querySelectorAll('audio');
const visual = document.querySelector(".visual");

window.addEventListener("keydown",(e) => {
    const key = e.key;

    tones.forEach((tone, i) => {
       switch (key) {

        case 'a': 
            tones[0].currentTime = 0;
            tones[0].play();
            break;
        case 'b':
            tones[1].currentTime = 0;
            tones[1].play();
            break;
        case 'c':
            tones[2].currentTime = 0;
            tones[2].play();
            break;
        case 'd':
            tones[3].currentTime = 0;
            tones[3].play();
            break;
        case 'e':
            tones[4].currentTime = 0;
            tones[4].play();
            break;
        case 'f':
            tones[5].currentTime = 0;
            tones[5].play();
            break;
        case 'g':
            tones[6].currentTime = 0;
            tones[6].play();
            break;
        case 'h':
            tones[7].currentTime = 0;
            tones[7].play();
            break;
        case 'i':
            tones[8].currentTime = 0;  
            tones[8].play();
            break;
        case 'j':
            tones[9].currentTime = 0;
            tones[9].play();
            break;
        case 'k':
            tones[10].currentTime = 0; 
            tones[10].play();
            break;
        case 'l':
            tones[11].currentTime = 0;  
            tones[11].play();
            break;
        case 'm':
            tones[12].currentTime = 0; 
            tones[12].play();
            break;
        case 'n':
            tones[13].currentTime = 0;  
            tones[13].play();
            break;
        case 'o':
            tones[14].currentTime = 0;  
            tones[14].play();
            break;
        case 'p':
            tones[15].currentTime = 0;  
            tones[15].play();
            break;
        case 'q':
            tones[16].currentTime = 0;             
            tones[16].play();
            break;
        case 'r':
            tones[17].currentTime = 0;              
            tones[17].play();
            break;
        case 's':
            tones[18].currentTime = 0;              
            tones[18].play();
            break;
        case 't':
            tones[3].currentTime = 0;              
            tones[3].play();
            break;
        case 'u':
            tones[4].currentTime = 0;              
            tones[4].play();
            break;
        case 'v':
            tones[5].currentTime = 0;              
            tones[5].play();
            break;
        case 'w':
            tones[6].currentTime = 0;              
            tones[6].play();
            break;
        case 'x':
            tones[7].currentTime = 0;              
            tones[7].play();
            break;
        case 'y':
            tones[8].currentTime = 0;              
            tones[8].play();
            break;
        case 'z':
            tones[9].currentTime = 0;              
            tones[9].play();
            createNote()
            break;
        case ' ':
            tones[0].currentTime = 0;              
            tones[0].play();
            break;
       }
    });
});
