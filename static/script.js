var left = document.getElementById('l_arr')
var right = document.getElementById('r_arr')
/** @type {HTMLImageElement} */
var image = document.getElementById('image')

var requestID
var currNum = -1
function fade_right() {
    console.log('clicked')
    var num = Number(image.src.substr(image.src.indexOf('(') + 1, image.src.indexOf(')') - image.src.indexOf('(') - 1))
    var format = 'jpg'
    if (num >= 19) {
        image.src = `/static/Node.js (19).jpg`
        right.style.opacity = 0.5
        return
    }
    num += 1
    if (num == 7 || num == 8 || num == 11) {
        format = 'gif'
    }else{
        format = 'jpg'
    }
    left.style.opacity = 1
    image.src = `/static/Node.js (${num}).${format}`
    change()
}

function fade_left() {
    var num = Number(image.src.substr(image.src.indexOf('(') + 1, image.src.indexOf(')') - image.src.indexOf('(') - 1))
    var format = 'jpg'
    if (num <= 0) {
        image.src = `/static/Node.js (0).jpg`
        left.style.opacity = 0.5
        return
    }
    num -= 1
    if (num == 7 || num == 8 || num == 11) {
        format = 'gif'
    }else{
        format = 'jpg'
    }
    right.style.opacity = 1
    image.src = `/static/Node.js (${num}).${format}`
    change()
}

function change() {
    var sizes = {
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
    }
    image.width = sizes.x + 300
    image.height = sizes.y + 360
}

function jump_to(jump) {
    var starter = `/static/Node.js (`
    left.style.opacity = 1
    right.style.opacity = 1
    if (jump == 0) {
        image.src = `${starter}0).jpg`
        left.style.opacity = 0.5
    }
    if (jump == 1) {
        image.src = `${starter}3).jpg`
    }
    if (jump == 2) {
        image.src = `${starter}4).jpg`
    }
    if (jump == 3) {
        image.src = `${starter}6).jpg`
    }
    if (jump == 4) {
        image.src = `${starter}10).jpg`
    }
    if (jump == 5) {
        image.src = `${starter}13).jpg`
    }
    if (jump == 6) {
        image.src = `${starter}16).jpg`
    }
    if (jump == 7) {
        image.src = `${starter}18).jpg`
    }
    if (jump == 8) {
        image.src = `${starter}19).jpg`
        right.style.opacity = 0.5
    }
}

/**
 * Changes image based on mousewheel scroll
 * @param {MouseEvent} e a mouse wheel scroll
 */
function wheel_change(e) {
    e.preventDefault()
    if (e.deltaY > 0) {
        fade_left()
    }else{
        fade_right()
    }
    return
}

change()

right.addEventListener('click', fade_right )
left.addEventListener('click', fade_left )

window.onresize = change()

window.onwheel = wheel_change