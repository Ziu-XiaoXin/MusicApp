function remSize() {
    var deviceWith = document.documentElement.clientWidth || window.innerWidth;
    if (deviceWith >= 750) {
        deviceWith = 750
    }
    if (deviceWith <= 320) {
        deviceWith = 320
    }
    document.documentElement.style.fontSize = (deviceWith / 7.5) + 'px'
    document.querySelector('body').style.fontSize = 0.3 + 'rem'

}

remSize()

window.onresize = function () {
    renSize()
}