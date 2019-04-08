const containerForImage = document.querySelector('.container-for-image');
const textArea = document.querySelector('textarea ');
const btnAddImage = document.querySelector('.btnAdd');

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
        containerForImage.appendChild(el);
        return el;
    }

}

//add brake line in html
function adBr() {
    let br = document.createElement('br')
    containerForImage.appendChild(br)
}


//check string and draw image
function makeImage(string) {
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 0) {
            const green = new Div(20, 20, 'green');
            green.draw()
        } else if (string[i] == 1) {
            const black = new Div(20, 20, 'black');
            black.draw();
        } else {
            adBr();
        }
    }
}

btnAddImage.addEventListener('click', function () {
    let imageWithNumbers = textArea.value;
    makeImage(imageWithNumbers);
})



// 111111111111111111111111112111111001111111111001111112111100011111001111100011112110000011110000111100000112100000001110000111000000012100000000000000000000000012000000000000000000000000002000000000000000000000000002100000000000000000000000012100001100010000100011000012110011111111001111111100112111001111111001111111001112111111111111111111111111112