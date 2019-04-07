//create blue print div class
class Div {
    constructor(height, width, bgc, x, y) {
        //properties
        this.height = height;
        this.width = width;
        this.bgc = bgc;
        this.x = x;
        this.y = y;

    }

    //prototype method hardcoded - create and draw div element
    draw() {
        let el = document.createElement('div');
        el.style.height = this.height + "px";
        el.style.width = this.width + "px";
        el.style.display = 'inline-block'
        el.style.backgroundColor = this.bgc;
        document.body.appendChild(el);
        return el;
    }

}

//add brake line in html
function adBr() {
    let br = document.createElement('br')
    document.body.appendChild(br)
}

//bitmap image string
const bitMap = '111111111111111111111111112111111001111111111001111112111100011111001111100011112110000011110000111100000112100000001110000111000000012100000000000000000000000012000000000000000000000000002000000000000000000000000002100000000000000000000000012100001100010000100011000012110011111111001111111100112111001111111001111111001112111111111111111111111111112'

//push string to array - need comass
const readyBitMap = []; // ready array with bitmap image (string values not numbers)
for (let i = 0; i < bitMap.length; i++) {
    readyBitMap.push(bitMap[i]);

}


// create green and black divs
const green = new Div(20, 20, 'green');
const black = new Div(20, 20, 'black');


//check array and draw image (type conversions ==)
for (let i = 0; i < readyBitMap.length; i++) {
    if (readyBitMap[i] == 0) {
        green.draw()
    } else if (readyBitMap[i] == 1) {
        black.draw();
    } else {
        adBr();
    }
}