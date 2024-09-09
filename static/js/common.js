var barks = [
    new Audio('/res/sounds/single-bark-of-a-dog-38780.mp3'),
    new Audio('/res/sounds/barking-3-47779.mp3'),
    new Audio('/res/sounds/dog-bark-179915.mp3'),
    new Audio('/res/sounds/barking-123909.mp3')
];

var bark = () => {
    barks[Math.floor(Math.random() * barks.length)].play();
};
