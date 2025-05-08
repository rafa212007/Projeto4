//DECLARANDO O ARRAY DE IMAGEM

let imagens = [
    'src/assets/mar.jpg',
    'src/assets/floresta.jpg',
    'src/assets/caverna.jpg',
];

//DECLARANDO AS VARIAVEIS

let index = 0;
let tempo = 3000;

//CRIANDO A FUNÇÃO SLIDESHOW

function slideShow(){
    document.getElementById("image").src = imagens[index]
    index++;
    if (index == imagens.length){
        index=0;
    }
    setTimeout("slideShow()", tempo)
}
slideShow();