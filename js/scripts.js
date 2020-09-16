var wordsList = [
    "F*ck",
    "F*ck you",
    "Shit",
    "Piss off",
    "Dick head",
    "Asshole",
    "Son of a b*tch",
    "Bastard",
    "Bitch",
    "Damn",
    "C*nt",
    "Bollocks",
    "Bugger",
    "Bloody Hell",
    "Choad",
    "Crikey",
    "Rubbish",
    "Shag",
    "Wanker",
    "Taking the piss",
    "Twat",
    "Bloody Oath",
    "Root",
    "Get Stuffed",
    "Bugger me",
    "Fair suck of the sav"
];

var whatText;
var wordPause = false;
var mainText = $('.mainBrand');
var html = $('html');

mainText.click(function (){


    if (wordPause == true) {
        unPauseText();
    } else {
        pauseText();
    }

});

html.click(function (){

    wordChanger();

});

function wordChanger() {

    if (wordPause == true) {

        return;
        
    }
    else if (wordPause == false){
        whatText = Math.floor(Math.random() * 26);

        mainText.text(wordsList[whatText]);
    }
    else{
        mainText.text("Error 2b67ab");
    }
    
}

function pauseText(){
    wordPause = true;
    mainText.removeClass('animated')
}

function unPauseText(){
    wordPause = false;
    mainText.toggleClass('animated')
}

