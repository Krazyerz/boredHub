const HEADER_TEXT = document.getElementById('header');
const FONT_STYLE = ["normal","italic","oblique"];

function HeaderAnimate() {
    let index = 0;

    setInterval(() => {
        HEADER_TEXT.style.fontStyle = FONT_STYLE[index];
        index++;

        if(index >= FONT_STYLE.length){
            index = 0;
        }

    },500)
}

HeaderAnimate();