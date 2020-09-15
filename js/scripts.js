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

$('.mainBrand').click(function (){

    var whatText = Math.floor(Math.random() * 26);

    $('.mainBrand').text(wordsList[whatText]);
});