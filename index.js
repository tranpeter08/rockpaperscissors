const appState = {
    rock:{
        rock: 0,
        scissors: 1,
        paper:-1,
        img: {src: 'https://i.imgur.com/HsNPXG0.png', alt: 'A rock'}
    },
    paper:{
        rock: 1,
        scissors: -1,
        paper:0,
        img: {src: 'https://i.imgur.com/VHjYkiP.png', alt: 'A roll of toiler paper'}
    },
    scissors:{ 
        rock: -1,
        scissors: 0,
        paper:1,
        img: {src: 'https://i.imgur.com/1pIL6A4.png', alt: 'A roll of toiler paper'}
    }
}

function renderBoard(text){
    //render result to board
    $('.js-board').html(text);
}

function handleScore(user, comp){
    let score = user[comp];
    return (score === 1)? `Win`:
        (score === 0)? `Tie` : `Lose`;
}

function handleCompIMG(comp){
    const {src, alt} = appState[comp].img
    $('.js-comp-img').html(`<img src="${src}" alt="${alt}">`);
}



function battleButton(hand){
    const comp = ['rock','paper','scissors'];

    $('.js-battle').on('click',()=>{
        let random = Math.floor(Math.random()*3);
        let compHand = comp[random];
        handleCompIMG(compHand);
        renderBoard(handleScore(hand, compHand));
    });
}

function handImg(imgSRC){
    const{src, alt} = imgSRC;
    $('.js-hand-img').html(`<img src="${src}" alt="${alt}">`)
}

function handSelect(){
    //rock, img 
    const {rock, paper, scissors} = appState;
    $('.js-hand-rock').on('click',()=>{
        handImg(rock.img);
        battleButton(rock);
    });
    //paper, img
    $('.js-hand-paper').on('click',()=>{
        handImg(paper.img);
        battleButton(paper);
    });
    //scissors, img
    $('.js-hand-scissors').on('click',()=>{
        handImg(scissors.img);
        battleButton(scissors);
    });
}

function runThis(){
    handSelect();
}

$(runThis);