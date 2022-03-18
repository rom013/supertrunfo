/*
ANOTAÇÃO

51 Cards;
planta(8), água(8), fogo(8), terra(8), inseto(8), sombrio(8), lendario(3);
8 cards de cada tipo;
Fraquesa adiciona mais 2x de dano para ataque do oponente;
Resistencia diminui na metade o dano do oponente;

Ganha 1 ponto a cada carta derrotada;
O jogador e a maquina terão cartas iguais, porém a escolha é aleatoria;
A carta da maquina só sera virada quando o jogador escolher a opção
Os valores escolhidos serão comparados. O jogador que tiver o maior valor vence a rodada;

Placar*/

const types= {
    fire:"https://cdn.discordapp.com/attachments/691421631700271114/953813501187592192/2048px-PokC3A9mon_Fire_Type_Icon.png",
    water:"https://cdn.discordapp.com/attachments/691421631700271114/953813500612988958/1200px-PokC3A9mon_Water_Type_Icon.png",
    grass:"https://cdn.discordapp.com/attachments/691421631700271114/953813499996405790/1200px-PokC3A9mon_Grass_Type_Icon.png",
    bug:"https://cdn.discordapp.com/attachments/691421631700271114/953500778696421396/1024px-PokC3A9mon_Bug_Type_Icon.png",
    dark:"https://cdn.discordapp.com/attachments/691421631700271114/953813500344561694/1200px-PokC3A9mon_Dark_Type_Icon.png",
    ground: "https://cdn.discordapp.com/attachments/691421631700271114/953501288421789716/1024px-PokC3A9mon_Ground_Type_Icon.png",
    normal: "https://cdn.discordapp.com/attachments/691421631700271114/954155909729366046/1200px-PokC3A9mon_Normal_Type_Icon.png",
    ice: "https://cdn.discordapp.com/attachments/691421631700271114/954172509874434078/640px-PokC3A9mon_Ice_Type_Icon.png",
    electric: "https://cdn.discordapp.com/attachments/691421631700271114/954172510168047636/1200px-PokC3A9mon_Electric_Type_Icon.png"
}

const deck = [
    {nome: "Durant", atributo:{ataque: 17, defesa: 38, especial: 30}, rarity:"default" ,type: "bug", img:"https://cdn.discordapp.com/attachments/691421631700271114/953500350344753252/29359-16151523356366-800.png", imgType: types.bug, imgFraqueza: types.ground, number: "001"},
    {nome: "Charizard", atributo:{ataque: 68, defesa: 30, especial: 80}, rarity:"default" ,type: "fire", img:"https://cdn.discordapp.com/attachments/691421631700271114/953828714041462824/charizard_by_pr_grunge_d83la49-fullview.png", imgType: types.fire, imgFraqueza: types.water, number: "002"},
    {nome: "Oshuwat", atributo:{ataque: 45, defesa: 58, especial: 10}, rarity:"default" ,type: "water", img:"https://cdn.discordapp.com/attachments/691421631700271114/953830044512428063/EtzSWY-XYAE8G1N.png", imgType: types.water, imgFraqueza: types.grass, number: "003"},
    {nome: "Zarude", atributo:{ataque: 80, defesa: 27, especial: 8}, rarity:"default" ,type: "grass", img:"https://cdn.discordapp.com/attachments/691421631700271114/953828136481587230/zarude_took_pokeballs_by_darkmoonray_ddrbe2p-pre.png", imgType: types.grass, imgFraqueza: types.bug, number: "004"},
    {nome: "Krokorok", atributo:{ataque: 50, defesa: 20, especial: 70}, rarity:"default" ,type: "ground", img:"https://cdn.discordapp.com/attachments/691421631700271114/953830044852162650/wp5009313.png", imgType: types.ground, imgFraqueza: types.water, number: "005"},
    {nome: "Hydreigon", atributo:{ataque: 100, defesa: 57, especial: 100}, rarity:"default" ,type: "black", img:"https://cdn.discordapp.com/attachments/691421631700271114/953830045296779314/5747cd5c210c7a6389938645af13eb94.png", imgType: types.dark, imgFraqueza: types.bug, number: "006"},

    {nome: "Jellicent", atributo:{ataque: 62, defesa: 77, especial: 90}, rarity:"default" ,type: "water", img:"https://cdn.discordapp.com/attachments/691421631700271114/954179842482511932/d968eg8-359fe647-b504-467f-b3bc-0f0530f033e3.png", imgType: types.water, imgFraqueza: types.grass, number: "007"},
    {nome: "Chandelure", atributo:{ataque: 28, defesa: 30, especial: 80}, rarity:"default" ,type: "fire", img:"https://cdn.discordapp.com/attachments/691421631700271114/954179842759356436/8c254ff8a1bab1e7abda2e2dcc713b76.png", imgType: types.fire, imgFraqueza: types.water, number: "008"},
    {nome: "Pikachu", atributo:{ataque: 45, defesa: 20, especial: 95}, rarity:"default" ,type: "electric", img:"https://cdn.discordapp.com/attachments/691421631700271114/954179843057139853/f9d2fd5b2cedd98c22cd185d500d0745.png", imgType: types.electric, imgFraqueza: types.ground, number: "009"},
    {nome: "Galvantula", atributo:{ataque: 88, defesa: 27, especial: 88}, rarity:"default" ,type: "electric", img:"https://cdn.discordapp.com/attachments/691421631700271114/954179843317190676/deecfc3426a58b15da53787e5f89e4c5.png", imgType: types.electric, imgFraqueza: types.ground, number: "010"},
    {nome: "Houndoom", atributo:{ataque: 69, defesa: 65, especial: 50}, rarity:"default" ,type: "black", img:"https://cdn.discordapp.com/attachments/691421631700271114/954179843564634123/5b4d7cd267e4745ebc55eb426aeb319a.png", imgType: types.dark, imgFraqueza: types.bug, number: "011"},

    {nome: "Kyurem Preto", atributo:{ataque: parseInt(Math.random()*100), defesa: 80, especial: parseInt(Math.random()*200)}, rarity:"legend" ,type: "electric", img:"https://media2.giphy.com/media/UryPOqYlE3GY8/200.gif", imgType: types.electric, imgFraqueza: types.ground, number: "012"},
    {nome: "Victini", atributo:{ataque: parseInt(Math.random()*100), defesa: 78, especial: parseInt(Math.random()*200)}, rarity:"legend" ,type: "fire", img:"https://pa1.narvii.com/5741/e0683b7b5ea2ae9ab9fc57b35417439f98cb4402_hq.gif", imgType: types.fire, imgFraqueza: types.water, number: "013"},
    {nome: "Kayogre", atributo:{ataque: parseInt(Math.random()*100), defesa: 40, especial: parseInt(Math.random()*200)}, rarity:"legend" ,type: "water", img:"https://i.gifer.com/BwCf.gif", imgType: types.water, imgFraqueza: types.electric, number: "014"},
]

const deckBot = [
    {nome: "Genesect", atributo:{ataque: 37, defesa: 77, especial: 120}, rarity:"default" ,type: "bug", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152147207995402/e72d0acd9b6ba12addc5e527dd2c700cdcf87f91_00.png", imgType: types.bug, imgFraqueza: types.ground, number: "001"},
    {nome: "Cofagrigus", atributo:{ataque: 28, defesa: 60, especial: 80}, rarity:"default" ,type: "black", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152159958687794/df7329c5060c82b845e8411049f7b191970ac085_hq.png", imgType: types.dark, imgFraqueza: types.bug, number: "002"},
    {nome: "Honchkrow", atributo:{ataque: 70, defesa: 10, especial: 70}, rarity:"default" ,type: "black", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152159589576704/fe46b43dc85a9dfdde4f3c65c30f6a82.png", imgType: types.dark, imgFraqueza: types.bug, number: "003"},
    {nome: "Cubchoo", atributo:{ataque: 80, defesa: 50, especial: 15}, rarity:"default" ,type: "water", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152159312773180/1485f076db44d37032583d6aac5f4829.png", imgType: types.ice, imgFraqueza: types.fire, number: "004"},
    {nome: "Starmie", atributo:{ataque: 60, defesa: 40, especial: 70}, rarity:"default" ,type: "water", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152159044308992/53df29237afb4f4bad205fbde7f6967f.png", imgType: types.water, imgFraqueza: types.grass, number: "005"},
    {nome: "Corsola", atributo:{ataque: 40, defesa: 65, especial: 90}, rarity:"default" ,type: "water", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152158557790228/697c1cf8c8e11c59e77c85411e024f77.png", imgType: types.water, imgFraqueza: types.grass, number: "006"},
    {nome: "Tirtouga", atributo:{ataque: 50, defesa: 80, especial: 80}, rarity:"default" ,type: "water", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152158285168730/d8y58y5-e4262cbc-9983-49cb-90c9-322909c64919.png", imgType: types.water, imgFraqueza: types.grass, number: "007"},
    {nome: "Porygon2", atributo:{ataque: 55, defesa: 55, especial: 100}, rarity:"default" ,type: "normal", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152157739892766/wp2615011.png", imgType: types.normal, imgFraqueza: types.ground, number: "008"},
    {nome: "Fletchling", atributo:{ataque: 27, defesa: 36, especial: 5}, rarity:"default" ,type: "normal", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152157463072819/79aea0b0a21e5526090d5b9b0d227587.png", imgType: types.normal, imgFraqueza: types.ground, number: "009"},
    {nome: "Gyarados", atributo:{ataque: 97, defesa: 57, especial: 100}, rarity:"default" ,type: "water", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152157014270043/4e02c2ec-7327-44f2-881d-d4c52ead8b0c.png", imgType: types.water, imgFraqueza: types.grass, number: "010"},
    {nome: "Surskit", atributo:{ataque: 47, defesa: 50, especial: 100}, rarity:"default" ,type: "grass", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152156729081927/2Q.png", imgType: types.grass, imgFraqueza: types.fire, number: "011"},

    {nome: "Zekrom", atributo:{ataque: parseInt(Math.random()*100), defesa: parseInt(Math.random()*100), especial: parseInt(Math.random()*200)}, rarity:"legend" ,type: "electric", img:"https://64.media.tumblr.com/6c9585ae767a37c354f6f6d21c05d001/tumblr_nupv75Pduf1un95hzo1_r3_500.gifv", imgType: types.electric, imgFraqueza: types.ground, number: "012"},
    {nome: "Celebi", atributo:{ataque: parseInt(Math.random()*100), defesa: parseInt(Math.random()*100), especial: parseInt(Math.random()*200)}, rarity:"legend" ,type: "grass", img:"https://thumbs.gfycat.com/PointlessFlatBushbaby-size_restricted.gif", imgType: types.grass, imgFraqueza: types.fire, number: "013"},
    {nome: "Yveltal", atributo:{ataque: parseInt(Math.random()*100), defesa: parseInt(Math.random()*100), especial: parseInt(Math.random()*200)}, rarity:"legend" ,type: "black", img:"https://c.tenor.com/_JsG3AZezU0AAAAC/yveltal-pokemon.gif", imgType: types.dark, imgFraqueza: types.fire, number: "014"}
]

const deckUsed = []


const board = document.getElementById("board")

var cardBot
var cardPlayer

cardRaffle()

function cardRaffle(){
    const raffleIndexPlayer = parseInt(Math.random()*deck.length)
    let cardPlayerRaffe = deck[raffleIndexPlayer]
    cardPlayer = cardPlayerRaffe

    const raffleIndexBot = parseInt(Math.random()*deckBot.length)
    let cardBotRaffle = deckBot[raffleIndexBot]
    cardBot = cardBotRaffle

    deckUsed.push(cardPlayer)
    exibirCardUsed(raffleIndexPlayer, raffleIndexBot)

    exibirCardPlayer()
}

function exibirCardPlayer(){
    board.insertAdjacentHTML("afterbegin", `
        <div class="card">
            <header class="header-card">
                <img src="${cardPlayer.imgType}" class="type">
                <h3 class="${cardPlayer.rarity}">${cardPlayer.nome}</h3>
            </header>
            <main class="main-card ${cardPlayer.type}">
                <img src="${cardPlayer.img}" class="person">
                <ul>
                    <li><input type="radio" name="action" value="ataque" checked>Ataque: <span>${cardPlayer.atributo.ataque}</span></li>
                    <li><input type="radio" name="action" value="defesa">Defesa: <span>${cardPlayer.atributo.defesa}</span></li>
                    <li><input type="radio" name="action" value="especial">Especial: <span>${cardPlayer.atributo.especial}</span></li>
                </ul>
            </main>
            <footer class="footer-card">
                <img src="${cardPlayer.imgFraqueza}" class="type">
                <span>${cardPlayer.number}</span>
            </footer>
        </div>
    `)
}

function exibirCardMaquina(){
    board.insertAdjacentHTML("afterbegin", `
        <div class="card">
            <header class="header-card">
                <img src="${cardBot.imgType}" class="type">
                <h3 class="${cardBot.rarity}">${cardBot.nome}</h3>
            </header>
            <main class="main-card ${cardBot.type}">
                <img src="${cardBot.img}" class="person">
                <ul>
                    <li>Ataque: <span>${cardBot.atributo.ataque}</span></li>
                    <li>Defesa: <span>${cardBot.atributo.defesa}</span></li>
                    <li>Especial: <span>${cardBot.atributo.especial}</span></li>
                </ul>
            </main>
            <footer class="footer-card">
                <img src="${cardBot.imgFraqueza}" class="type">
                <span>${cardBot.number}</span>
            </footer>
        </div>
    `)
}

function exibirCardUsed(valueIndexPlayer, valueIndexBot){
    deck.splice(valueIndexPlayer,1)
    deckBot.splice(valueIndexBot,1)

    console.log(valueIndexBot)

    const cardUsed = document.getElementById("cardUsed")
    cardUsed.innerHTML = ""
    for(var i = 0; i<deckUsed.length; i++){
        //console.log(deckUsed[i].rarity)  
        cardUsed.insertAdjacentHTML("afterbegin", `
            <div class="card">
                <header class="header-card">
                    <img src="${deckUsed[i].imgType}" class="type">
                    <h3 class="${deckUsed[i].rarity}">${deckUsed[i].nome}</h3>
                </header>
                <main class="main-card ${deckUsed[i].type}">
                    <img src="${deckUsed[i].img}" class="person">
                    <ul>
                        <li>Ataque: <span>${deckUsed[i].atributo.ataque}</span></li>
                        <li>Defesa: <span>${deckUsed[i].atributo.defesa}</span></li>
                        <li>Especial: <span>${deckUsed[i].atributo.especial}</span></li>
                    </ul>
                </main>
                <footer class="footer-card">
                    <img src="${deckUsed[i].imgFraqueza}" class="type">
                    <span>000</span>
                </footer>
            </div>
        `)
    }
    document.getElementById("useTotal").textContent = `(${deckUsed.length})`
}

function play(){
    const optionPlayer = opcaoSelecionada() 

    const valueCardPlayer = cardPlayer.atributo[optionPlayer]
    const valueCardMaquina = cardBot.atributo[optionPlayer]
    exibirCardMaquina(optionPlayer)
    const $button = document.getElementById("btn-play")
    const msg = document.querySelector(".msg")

    console.log(cardBot.nome, cardPlayer.nome)

    if(valueCardPlayer < valueCardMaquina){
        msg.innerHTML = ""
        msg.insertAdjacentHTML("afterbegin", `${cardPlayer.nome} está fora de combate <br><br> ${cardBot.nome} é o vencedor da rodada`)
    }
    else if(valueCardPlayer > valueCardMaquina){
        msg.innerHTML = ""
        msg.insertAdjacentHTML("afterbegin", `${cardBot.nome} está fora de combate <br><br> ${cardPlayer.nome} é o vencedor da rodada`)
    }else if(valueCardPlayer == valueCardMaquina){
        msg.innerHTML = ""
        msg.insertAdjacentHTML("afterbegin", `Houve um empate de forças`)
    }

    $button.style.display = "none"
    msg.style.display = "block"

    setTimeout(()=>{
        msg.style.display = "none"
        $button.style.display = "block"
        board.innerHTML = ""
        if(deck[0] != undefined){
            cardRaffle()
            console.log("executou")
        }
        else{
            msg.style.display = "block"
            $button.style.display = "none"
            msg.innerHTML = ""
            msg.insertAdjacentHTML("afterbegin", `FIM DA BATALHA!`)
        }
        
    }, 5000)
    
}

function opcaoSelecionada() {
    var selecionado = document.getElementsByName("action"); 
    for (i = 0; i < selecionado.length; i++) {
      if (selecionado[i].checked) {
        return selecionado[i].value;
      }
    }
}