var barks = [
    new Audio('res/sounds/single-bark-of-a-dog-38780.mp3'),
    new Audio('res/sounds/barking-3-47779.mp3'),
    new Audio('res/sounds/dog-bark-179915.mp3'),
    new Audio('res/sounds/barking-123909.mp3')
];

var bark = () => {
    barks[Math.floor(Math.random() * barks.length)].play();
};

var randomTheme = () => {
    var r = Math.random();
    console.log('Setting random theme: ' + r);
    if (r < 0.3)
        document.getElementById('theme').className = 'theme-1';
    else if (r >= 0.3 && r < 0.6)
        document.getElementById('theme').className = 'theme-2';
    else
        document.getElementById('theme').className = 'theme-3';

    document.getElementById('theme').className = 'theme-3';
};
randomTheme();