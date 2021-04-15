function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
$("#my-button").hover(function () {
    $(this).css({
        top: getRandomInt(0, 150) + "px",
        left: getRandomInt(0, 150) + "px"
    });
}, function () {});