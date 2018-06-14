const appSate = {
    rock:{
        rock: 0,
        scissors: 1,
        paper:-1,
    },
    scissors:{
        rock: -1,
        scissors: 0,
        paper:1,
    },
    paper:{
        rock: 1,
        scissors: -1,
        paper:0,
    },
    img:{
        rock: '',
        paper: '',
        paper:''
    }
}

function handleScore(hand,comp){
    let score = appSate.hand.comp;
    return (score === 1)? `Win`:
        (score === 0)? `Tie` : `Lose`
}

function battleButton(hand){
    //random selection
    //handle score
    //computer hand img
}

function handSelect(){
    //rock, img 
    //paper, img
    //scissors, img
}

function runThis(){

}

$(runThis)