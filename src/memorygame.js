document.addEventListener('DOMContentLoaded',()=>{
    // card option
    const cardArray=[
        {
            name:'pineapple',
            img:'../assets/images/picture-match/001-pineapple.png'
        },
        {
            name:'sun',
            img:'../assets/images/picture-match/002-sun.png'
        },
        {
            name:'maracas',
            img:'../assets/images/picture-match/003-maracas.png'
        },
        {
            name:'sunflower',
            img:'../assets/images/picture-match/004-sunflower.png'
        },
        {
            name:'drum',
            img:'../assets/images/picture-match/005-drum.png'
        },
        {
            name:'tambourine',
            img:'../assets/images/picture-match/006-tambourine.png'
        },
        {
            name:'garlands',
            img:'../assets/images/picture-match/007-garlands.png'
        },
        {
            name:'subwoofer',
            img:'../assets/images/picture-match/008-subwoofer.png'
        },
        {
            name:'soccerball',
            img:'../assets/images/picture-match/009-soccerball.png'
        },
        {
            name:'beachumbrella',
            img:'../assets/images/picture-match/010-beachumbrella.png'
        },
        {
            name:'guitar',
            img:'../assets/images/picture-match/011-guitar.png'
        },
        {
            name:'brazilflag',
            img:'../assets/images/picture-match/012-brazilflag.png'
        },
        {
            name:'fireworks',
            img:'../assets/images/picture-match/013-fireworks.png'
        },
        {
            name:'placeholder',
            img:'../assets/images/picture-match/014-placeholder.png'
        },
        {
            name:'hotairballoon',
            img:'../assets/images/picture-match/015-hotairballoon.png'
        },
        {
            name:'vuvuzela',
            img:'../assets/images/picture-match/016-vuvuzela.png'
        },
        {
            name:'bikini',
            img:'../assets/images/picture-match/017-bikini.png'
        },
        {
            name:'coffeecup',
            img:'../assets/images/picture-match/018-coffeecup.png'
        },
        {
            name:'palmtree',
            img:'../assets/images/picture-match/019-palmtree.png'
        },
        {
            name:'icecreamcone',
            img:'../assets/images/picture-match/020-icecreamcone.png'
        },
        {
            name:'photocamera',
            img:'../assets/images/picture-match/021-photocamera.png'
        },
        {
            name:'flower',
            img:'../assets/images/picture-match/022-flower.png'
        },
        {
            name:'costume',
            img:'../assets/images/picture-match/023-costume.png'
        },
        {
            name:'eyemask',
            img:'../assets/images/picture-match/024-eyemask.png'
        },
        {
            name:'trumpet',
            img:'../assets/images/picture-match/025-trumpet.png'
        },
        {
            name:'coconutdrink',
            img:'../assets/images/picture-match/026-coconutdrink.png'
        },
        {
            name:'cocktail',
            img:'../assets/images/picture-match/027-cocktail.png'
        },
        {
            name:'theatermasks',
            img:'../assets/images/picture-match/028-theatermasks.png'
        },
        {
            name:'darbuka',
            img:'../assets/images/picture-match/029-darbuka.png'
        },
        {
            name:'flipflops',
            img:'../assets/images/picture-match/030-flipflops.png'
        },
        {
            name:'Surfboard',
            img:'../assets/images/picture-match/031-Surfboard.png'
        },
        {
            name:'balloons',
            img:'../assets/images/picture-match/032-balloons.png'
        },
        {
            name:'cachaca',
            img:'../assets/images/picture-match/033-cachaca.png'
        },
        {
            name:'hat',
            img:'../assets/images/picture-match/034-hat.png'
        },
        {
            name:'flag',
            img:'../assets/images/picture-match/035-flag.png'
        },
        {
            name:'musicnotes',
            img:'../assets/images/picture-match/036-musicnotes.png'
        },
        {
            name:'crown',
            img:'../assets/images/picture-match/037-crown.png'
        },
        {
            name:'xylophone',
            img:'../assets/images/picture-match/038-xylophone.png'
        },
        {
            name:'tent',
            img:'../assets/images/picture-match/039-tent.png'
        },
        {
            name:'whistle',
            img:'../assets/images/picture-match/040-whistle.png'
        },
        {
            name:'headdress',
            img:'../assets/images/picture-match/041-headdress.png'
        },
        {
            name:'confetti',
            img:'../assets/images/picture-match/042-confetti.png'
        },
        {
            name:'funhat',
            img:'../assets/images/picture-match/043-funhat.png'
        },
        {
            name:'parrot',
            img:'../assets/images/picture-match/044-parrot.png'
        },
        {
            name:'invitation',
            img:'../assets/images/picture-match/045-invitation.png'
        },
        {
            name:'calendar',
            img:'../assets/images/picture-match/046-calendar.png'
        },
        {
            name:'pinwheel',
            img:'../assets/images/picture-match/047-pinwheel.png'
        },
        {
            name:'microphone',
            img:'../assets/images/picture-match/048-microphone.png'
        },
        {
            name:'lipstick',
            img:'../assets/images/picture-match/049-lipstick.png'
        },
        {
            name:'caramelizedapple',
            img:'../assets/images/picture-match/050-caramelizedapple.png'
        },
    ]
    let cardArrays=[]
    let random=[]
    while(random.length<4){
        let ran=Math.floor((Math.random()*50)+1)
        if(random.find(element=>element===ran)){
        }
        else{
            random.push(ran)
        }
}
    for(let i=0;i<random.length;i++){
        cardArrays.push(cardArray[random[i]])
    }
    console.log(random)
    cardArrays=[...cardArrays,...cardArrays]
    console.log(cardArrays)
    cardArrays.sort(()=>0.5-Math.random())

    const grid=document.querySelector('.grid')
    const resultDisplay=document.querySelector('#result')
    let cardChosen=[]
    let cardChosenId=[]
    let cardWon=[]
    // create board
    const createboard=()=>{
        for(let i=0;i<cardArrays.length;i++){
            let card=document.createElement('img')
            card.setAttribute('src','../assets/images/picture-blank/draws.png')
            card.setAttribute('data-id',i)
            card.addEventListener('click',flipcard)
            grid.append(card)
        }
    }
    createboard()


    // check for match
function checkForMatch(){
    let cards=document.querySelectorAll('img')
    const optionOneId=cardChosenId[0]
    const optionTwoIdId=cardChosenId[1]
    if(cardChosen[0]===cardChosen[1]){
        alert('You found match')
        cards[optionOneId].setAttribute('src','../assets/images/picture-blank/mardi-gras.png')
        cards[optionTwoIdId].setAttribute('src','../assets/images/picture-blank/mardi-gras.png')
        cards[optionOneId].removeEventListener('click',flipcard)
        cards[optionTwoIdId].removeEventListener('click',flipcard)
        cardWon.push(cardChosen)
    }
    else{
        cards[optionOneId].setAttribute('src','../assets/images/picture-blank/draws.png')
        cards[optionTwoIdId].setAttribute('src','../assets/images/picture-blank/draws.png')
        alert('Sorry try again !!!')
    }
    cardChosen=[]
    cardChosenId=[]
    resultDisplay.textContent=cardWon.length
    if(cardWon.length===cardArrays.length/2){
        resultDisplay.textContent='Afarin Pesaram'
        resultDisplay.style.color="green"
    }
}






    // flip card

    function flipcard(){
        let cardId=this.getAttribute('data-id') 
        cardChosen.push(cardArrays[cardId].name)
        cardChosenId.push(cardId)
        this.setAttribute('src',cardArrays[cardId].img)
        if(cardChosen.length===2){
            setTimeout(checkForMatch,500)
        }
    }
})