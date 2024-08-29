window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const btn = document.getElementById('btn-change');

    btn.addEventListener('click', function(){
        const bgColor = generateRGBcolor();
        root.style.backgroundColor = bgColor;
    });

}

function generateRGBcolor() {
    const red = Math.floor(Math.random()*255);
    const green = Math.floor(Math.random()*255);
    const blue = Math.floor(Math.random()*255);

    return `rgb(${red}, ${green}, ${blue})`
}