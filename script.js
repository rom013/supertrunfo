const types= {
    fire:"https://cdn.discordapp.com/attachments/691421631700271114/953813501187592192/2048px-PokC3A9mon_Fire_Type_Icon.png",
    water:"https://cdn.discordapp.com/attachments/691421631700271114/953813500612988958/1200px-PokC3A9mon_Water_Type_Icon.png",
    grass:"https://cdn.discordapp.com/attachments/691421631700271114/953813499996405790/1200px-PokC3A9mon_Grass_Type_Icon.png",
    bug:"https://cdn.discordapp.com/attachments/691421631700271114/953500778696421396/1024px-PokC3A9mon_Bug_Type_Icon.png",
    dark:"https://cdn.discordapp.com/attachments/691421631700271114/953813500344561694/1200px-PokC3A9mon_Dark_Type_Icon.png",
    ground: "https://cdn.discordapp.com/attachments/691421631700271114/953501288421789716/1024px-PokC3A9mon_Ground_Type_Icon.png",
    normal: "https://cdn.discordapp.com/attachments/691421631700271114/954155909729366046/1200px-PokC3A9mon_Normal_Type_Icon.png",
    ice: "https://cdn.discordapp.com/attachments/691421631700271114/954172509874434078/640px-PokC3A9mon_Ice_Type_Icon.png",
    electric: "https://cdn.discordapp.com/attachments/691421631700271114/954172510168047636/1200px-PokC3A9mon_Electric_Type_Icon.png",
    flying: "https://cdn.discordapp.com/attachments/691421631700271114/954565410395668540/1024px-PokC3A9mon_Flying_Type_Icon.png",
    ghost: "https://cdn.discordapp.com/attachments/691421631700271114/955172273021653073/2048px-PokC3A9mon_Ghost_Type_Icon.png",
    psyc: "https://cdn.discordapp.com/attachments/691421631700271114/955179668288462918/2048px-PokC3A9mon_Psychic_Type_Icon.png"
}

const deck = [
    {nome: "Durant", atributo:{ataque: 17, defesa: 50, especial: 30}, rarity:"default" ,type: "bug", fraqueza: "ground",  img:"https://cdn.discordapp.com/attachments/691421631700271114/953500350344753252/29359-16151523356366-800.png", imgType: types.bug, imgFraqueza: types.ground, number: "001"},
    
    {nome: "Charizard", atributo:{ataque: 48, defesa: 30, especial: 100}, rarity:"default" ,type: "fire", fraqueza: "water",  img:"https://cdn.discordapp.com/attachments/691421631700271114/953828714041462824/charizard_by_pr_grunge_d83la49-fullview.png", imgType: types.fire, imgFraqueza: types.water, number: "002"},
    {nome: "Chandelure", atributo:{ataque: 28, defesa: 30, especial: 80}, rarity:"default" ,type: "fire", fraqueza: "water",  img:"https://cdn.discordapp.com/attachments/691421631700271114/954179842759356436/8c254ff8a1bab1e7abda2e2dcc713b76.png", imgType: types.fire, imgFraqueza: types.water, number: "003"},


    {nome: "Oshuwat", atributo:{ataque: 45, defesa: 58, especial: 10}, rarity:"default" ,type: "water", fraqueza: "grass",  img:"https://cdn.discordapp.com/attachments/691421631700271114/953830044512428063/EtzSWY-XYAE8G1N.png", imgType: types.water, imgFraqueza: types.grass, number: "004"},
    {nome: "Jellicent", atributo:{ataque: 22, defesa: 77, especial: 90}, rarity:"default" ,type: "water", fraqueza: "grass",  img:"https://cdn.discordapp.com/attachments/691421631700271114/954179842482511932/d968eg8-359fe647-b504-467f-b3bc-0f0530f033e3.png", imgType: types.water, imgFraqueza: types.grass, number: "005"},

    
    {nome: "Zarude", atributo:{ataque: 50, defesa: 27, especial: 8}, rarity:"default" ,type: "grass", fraqueza: "bug",  img:"https://cdn.discordapp.com/attachments/691421631700271114/953828136481587230/zarude_took_pokeballs_by_darkmoonray_ddrbe2p-pre.png", imgType: types.grass, imgFraqueza: types.bug, number: "006"},
    {nome: "Carnivine", atributo:{ataque: 49, defesa: 65, especial: 50}, rarity:"default" ,type: "grass", fraqueza: "bug",  img:"https://cdn.discordapp.com/attachments/691421631700271114/954544089599201341/e0df8d246f9e3dc946dcf9c677b956f5.png", imgType: types.grass, imgFraqueza: types.bug, number: "007"},


    {nome: "Krokorok", atributo:{ataque: 50, defesa: 20, especial: 70}, rarity:"default" ,type: "ground", fraqueza: "water",  img:"https://cdn.discordapp.com/attachments/691421631700271114/953830044852162650/wp5009313.png", imgType: types.ground, imgFraqueza: types.water, number: "008"},
    {nome: "Larvitar", atributo:{ataque: 39, defesa: 65, especial: 50}, rarity:"default" ,type: "ground", fraqueza: "water",  img:"https://cdn.discordapp.com/attachments/691421631700271114/954544089909592104/Larvitar-larvitar-19750290-600-600.png", imgType: types.ground, imgFraqueza: types.water, number: "009"},
    

    {nome: "Hydreigon", atributo:{ataque: 50, defesa: 80, especial: 100}, rarity:"default" ,type: "black", fraqueza: "bug",  img:"https://cdn.discordapp.com/attachments/691421631700271114/953830045296779314/5747cd5c210c7a6389938645af13eb94.png", imgType: types.dark, imgFraqueza: types.bug, number: "010"},
    {nome: "Houndoom", atributo:{ataque: 50, defesa: 75, especial: 50}, rarity:"default" ,type: "black", fraqueza: "bug",  img:"https://cdn.discordapp.com/attachments/691421631700271114/954179843564634123/5b4d7cd267e4745ebc55eb426aeb319a.png", imgType: types.dark, imgFraqueza: types.bug, number: "011"},


    {nome: "Pikachu", atributo:{ataque: 45, defesa: 20, especial: 95}, rarity:"default" ,type: "electric", fraqueza: "ground",  img:"https://cdn.discordapp.com/attachments/691421631700271114/954179843057139853/f9d2fd5b2cedd98c22cd185d500d0745.png", imgType: types.electric, imgFraqueza: types.ground, number: "012"},
    {nome: "Galvantula", atributo:{ataque: 38, defesa: 38, especial: 88}, rarity:"default" ,type: "electric", fraqueza: "ground",  img:"https://cdn.discordapp.com/attachments/691421631700271114/954179843317190676/deecfc3426a58b15da53787e5f89e4c5.png", imgType: types.electric, imgFraqueza: types.ground, number: "013"},
    
    {nome: "Mimikyu", atributo:{ataque: 58, defesa: 70, especial: 60}, rarity:"default" ,type: "ghost", fraqueza: "black",  img:"https://cdn.discordapp.com/attachments/691421631700271114/955172271968907274/646dd39b0d939172743fc6239c003df8.png", imgType: types.ghost, imgFraqueza: types.dark, number: "014"},
    {nome: "Gengar", atributo:{ataque: 55, defesa: 55, especial: 80}, rarity:"default" ,type: "ghost", fraqueza: "black",  img:"https://cdn.discordapp.com/attachments/691421631700271114/955172272384131113/matheus-carrera-gengar4.png", imgType: types.ghost, imgFraqueza: types.dark, number: "015"},

    {nome: "Cryogonal", atributo:{ataque: 30, defesa: 30, especial: 60}, rarity:"default" ,type: "ice", fraqueza: "fire",  img:"https://cdn.discordapp.com/attachments/691421631700271114/955178356201103360/2ecc2fdfc87553ab9b4f871b72251937706be516_hq.png", imgType: types.ice, imgFraqueza: types.fire, number: "016"},
    {nome: "Eiscue", atributo:{ataque: 20, defesa: 35, especial: 70}, rarity:"default" ,type: "ice", fraqueza: "fire",  img:"https://cdn.discordapp.com/attachments/691421631700271114/955178356469534730/luis-villar-pensk2.png", imgType: types.ice, imgFraqueza: types.fire, number: "017"},

    // {nome: "riolu", atributo:{ataque: 88, defesa: 27, especial: 88}, rarity:"default" ,type: "fight", fraqueza: "flying",  img:"", imgType: types.fight, imgFraqueza: types.flying, number: "013"},
    // {nome: "Scraggy", atributo:{ataque: 88, defesa: 27, especial: 88}, rarity:"default" ,type: "fight", fraqueza: "flying",  img:"", imgType: types.fight, imgFraqueza: types.flying, number: "013"},

    {nome: "Kyurem Preto", atributo:{ataque: parseInt(Math.random()*(100 - 50) + 50), defesa: 80, especial: parseInt(Math.random()*(200 - 80) + 80)}, rarity:"legend" ,type: "electric", fraqueza: "ground",  img:"https://media2.giphy.com/media/UryPOqYlE3GY8/200.gif", imgType: types.electric, imgFraqueza: types.ground, number: "018"},
    {nome: "Victini", atributo:{ataque: parseInt(Math.random()*(100 - 50) + 50), defesa: 78, especial: parseInt(Math.random()*(200 - 80) + 80)}, rarity:"legend" ,type: "fire", fraqueza: "water",  img:"https://pa1.narvii.com/5741/e0683b7b5ea2ae9ab9fc57b35417439f98cb4402_hq.gif", imgType: types.fire, imgFraqueza: types.water, number: "019"},
    {nome: "Kayogre", atributo:{ataque: parseInt(Math.random()*(100 - 50) + 50), defesa: 40, especial: parseInt(Math.random()*(200 - 80) + 80)}, rarity:"legend" ,type: "water", fraqueza: "electric",  img:"https://i.gifer.com/BwCf.gif", imgType: types.water, imgFraqueza: types.electric, number: "020"},
    
    {nome: "Solgaleo",  atributo:{ataque: parseInt(Math.random()*(100 - 50) + 50), defesa: 80, especial: parseInt(Math.random()*(200 - 80) + 80)}, rarity:"legend" ,type: "psyc", fraqueza: "black",  img:"https://c.tenor.com/_lZgkIFthmAAAAAC/solgaleo-necrozma.gif", imgType: types.psyc, imgFraqueza: types.dark, number: "021"},
    {nome: "Virizion",  atributo:{ataque: parseInt(Math.random()*(100 - 50) + 50), defesa: 80, especial: parseInt(Math.random()*(200 - 80) + 80)}, rarity:"legend" ,type: "grass", fraqueza: "fire",  img:"https://3.bp.blogspot.com/-er8AHoTe3fA/VTQa7TXstNI/AAAAAAAAUdk/4DC4R7_Ie_w/s1600/Virizion_Sacred_Sword.gif", imgType: types.grass, imgFraqueza: types.fire, number: "022"},
]

const deckBot = [
    {nome: "Toucannon", atributo:{ataque: 37, defesa: 77, especial: 120}, rarity:"default" ,type: "flying", fraqueza: "ice", img:"https://cdn.discordapp.com/attachments/691421631700271114/954564167178801162/cdfed38d105fd1aa1c65644c6ec5fe981f29d6abv2_hq.png", imgType: types.flying, imgFraqueza: types.ice, number: "001"},
    {nome: "Farfetch'd", atributo:{ataque: 50, defesa: 50, especial: 100}, rarity:"default" ,type: "flying", fraqueza: "ice", img:"https://cdn.discordapp.com/attachments/691421631700271114/954564167526907914/da7gxa2-8dccfcf3-5ea0-4730-bf95-697a9a05ef02.png", imgType: types.flying, imgFraqueza: types.ice, number: "002"},
    

    {nome: "Surskit", atributo:{ataque: 37, defesa: 50, especial: 100}, rarity:"default" ,type: "grass", fraqueza: "fire", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152156729081927/2Q.png", imgType: types.grass, imgFraqueza: types.fire, number: "003"},
    {nome: "Steenee", atributo:{ataque: 50, defesa: 50, especial: 80}, rarity:"default" ,type: "grass", fraqueza: "fire", img:"https://cdn.discordapp.com/attachments/691421631700271114/954567176076030002/b688f92df6adbac140a38c7de8b82fb2.png", imgType: types.grass, imgFraqueza: types.fire, number: "004"},
    

    {nome: "Cofagrigus", atributo:{ataque: 28, defesa: 60, especial: 80}, rarity:"default" ,type: "black", fraqueza: "bug", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152159958687794/df7329c5060c82b845e8411049f7b191970ac085_hq.png", imgType: types.dark, imgFraqueza: types.bug, number: "005"},  
    {nome: "Honchkrow", atributo:{ataque: 45, defesa: 45, especial: 70}, rarity:"default" ,type: "black", fraqueza: "bug", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152159589576704/fe46b43dc85a9dfdde4f3c65c30f6a82.png", imgType: types.dark, imgFraqueza: types.bug, number: "006"},
    

    {nome: "Palossand", atributo:{ataque: 50, defesa: 50, especial: 15}, rarity:"default" ,type: "ground", fraqueza: "water", img:"https://cdn.discordapp.com/attachments/691421631700271114/954538002829422622/e50fc440506484e0f55dff484d4b5b44.png", imgType: types.ground, imgFraqueza: types.water, number: "007"},
    {nome: "Golurk", atributo:{ataque: 45, defesa: 65, especial: 90}, rarity:"default" ,type: "ground", fraqueza: "water", img:"https://cdn.discordapp.com/attachments/691421631700271114/954538002238042183/f118c688553dfd46e685cc0d1aafc477.png", imgType: types.ground, imgFraqueza: types.water, number: "008"},
    

    {nome: "Starmie", atributo:{ataque: 30, defesa: 40, especial: 70}, rarity:"default" ,type: "water", fraqueza: "grass", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152159044308992/53df29237afb4f4bad205fbde7f6967f.png", imgType: types.water, imgFraqueza: types.grass, number: "009"},
    {nome: "Tirtouga", atributo:{ataque: 50, defesa: 80, especial: 80}, rarity:"default" ,type: "water", fraqueza: "grass", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152158285168730/d8y58y5-e4262cbc-9983-49cb-90c9-322909c64919.png", imgType: types.water, imgFraqueza: types.grass, number: "010"},
    {nome: "Gyarados", atributo:{ataque: 55, defesa: 57, especial: 100}, rarity:"default" ,type: "water", fraqueza: "grass", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152157014270043/4e02c2ec-7327-44f2-881d-d4c52ead8b0c.png", imgType: types.water, imgFraqueza: types.grass, number: "011"},


    {nome: "Porygon2", atributo:{ataque: 25, defesa: 55, especial: 100}, rarity:"default" ,type: "normal", fraqueza: "ground", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152157739892766/wp2615011.png", imgType: types.normal, imgFraqueza: types.ground, number: "012"},
    {nome: "Fletchling", atributo:{ataque: 27, defesa: 36, especial: 5}, rarity:"default" ,type: "normal", fraqueza: "ground", img:"https://cdn.discordapp.com/attachments/691421631700271114/954152157463072819/79aea0b0a21e5526090d5b9b0d227587.png", imgType: types.normal, imgFraqueza: types.ground, number: "013"},
    
    {nome: "Sizzlipede", atributo:{ataque: 49, defesa: 35, especial: 65}, rarity:"default" ,type: "fire", fraqueza: "water",  img:"https://cdn.discordapp.com/attachments/691421631700271114/955180732794425394/PokC3A9mon.png", imgType: types.fire, imgFraqueza: types.water, number: "014"},
    {nome: "Litten", atributo:{ataque: 40, defesa: 80, especial: 30}, rarity:"default" ,type: "fire", fraqueza: "water",  img:"https://cdn.discordapp.com/attachments/691421631700271114/955180733180284978/thumb-1920-89138.png", imgType: types.fire, imgFraqueza: types.water, number: "015"},

    {nome: "Genesect", atributo:{ataque: 55, defesa: 50, especial: 90}, rarity:"default" ,type: "bug", fraqueza: "fire",  img:"https://cdn.discordapp.com/attachments/691421631700271114/954152147207995402/e72d0acd9b6ba12addc5e527dd2c700cdcf87f91_00.png", imgType: types.bug, imgFraqueza: types.fire, number: "016"},
    {nome: "Scolipede", atributo:{ataque: 30, defesa: 75, especial: 85}, rarity:"default" ,type: "bug", fraqueza: "fire",  img:"https://cdn.discordapp.com/attachments/691421631700271114/955180733557776424/017d30e434408f94162d7082cf39cee9.png", imgType: types.bug, imgFraqueza: types.fire, number: "017"},

    {nome: "Kyurem Branco", atributo:{ataque: parseInt(Math.random() * (100 - 50) + 50), defesa: parseInt(Math.random() * (100 - 50) + 50), especial: parseInt(Math.random() * (200 - 80) + 80)}, rarity:"legend" ,type: "ice", fraqueza: "fire",  img:"https://thumbs.gfycat.com/KnobbyDistinctAbyssiniancat-size_restricted.gif", imgType: types.ice, imgFraqueza: types.fire, number: "018"},
    {nome: "Lunala", atributo:{ataque: parseInt(Math.random() * (100 - 50) + 50), defesa: parseInt(Math.random() * (100 - 50) + 50), especial: parseInt(Math.random() * (200 - 80) + 80)}, rarity:"legend" ,type: "psyc", fraqueza: "black",  img:"https://data.whicdn.com/images/259554863/original.gif", imgType: types.psyc, imgFraqueza: types.dark, number: "019"},
    {nome: "Zekrom", atributo:{ataque: parseInt(Math.random() * (100 - 50) + 50), defesa: parseInt(Math.random() * (100 - 50) + 50), especial: parseInt(Math.random() * (200 - 80) + 80)}, rarity:"legend" ,type: "electric", fraqueza: "ground", img:"https://64.media.tumblr.com/6c9585ae767a37c354f6f6d21c05d001/tumblr_nupv75Pduf1un95hzo1_r3_500.gifv", imgType: types.electric, imgFraqueza: types.ground, number: "020"},
    {nome: "Celebi", atributo:{ataque: parseInt(Math.random() * (100 - 50) + 50), defesa: parseInt(Math.random() * (100 - 50) + 50), especial: parseInt(Math.random() * (200 - 80) + 80)}, rarity:"legend" ,type: "grass", fraqueza: "fire", img:"https://thumbs.gfycat.com/PointlessFlatBushbaby-size_restricted.gif", imgType: types.grass, imgFraqueza: types.fire, number: "021"},
    {nome: "Yveltal", atributo:{ataque: parseInt(Math.random() * (100 - 50) + 50), defesa: parseInt(Math.random() * (100 - 50) + 50), especial: parseInt(Math.random() * (200 - 80) + 80)}, rarity:"legend" ,type: "black", fraqueza: "fire", img:"https://c.tenor.com/_JsG3AZezU0AAAAC/yveltal-pokemon.gif", imgType: types.dark, imgFraqueza: types.fire, number: "022"}
]

const deckUsed = []


const trainers = ["Bruno","Bea","Korrina","Morty","Elesa","Clemont","Misty","Brock"]
const trainerRandom = trainers[parseInt(Math.random()*7)]
document.getElementById("trainer").insertAdjacentHTML("afterbegin", `${trainerRandom}`)

const board = document.getElementById("board")

var cardBot
var cardPlayer


let ptsBot = 0; let ptsPlayer = 0;
function scoreboard(){
    const scoreboardPlayer = document.getElementById("ptsPlayer")
    const scoreboardBot = document.getElementById("ptsBot")

    scoreboardBot.textContent = ptsBot
    scoreboardPlayer.textContent = ptsPlayer
} 

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
                <img src="${cardPlayer.imgFraqueza}" class="type" id="fraquezaPlayer">
                <legend>2x</legend>
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
                <img src="${cardBot.imgFraqueza}" class="type" id="fraquezaBot">
                <legend>2x</legend>
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
                    <legend>2x</legend>
                    <span>000</span>
                </footer>
            </div>
        `)
    }
    document.getElementById("useTotal").textContent = `(${deckUsed.length})`
}

function play(){
    const optionPlayer = opcaoSelecionada() 

    let valueCardPlayer = cardPlayer.atributo[optionPlayer] 
    let valueCardMaquina = cardBot.atributo[optionPlayer]

    const $button = document.getElementById("btn-play")
    const msg = document.querySelector(".msg")
    const msgText = document.querySelector(".msgText")
    const msgFraqueza = document.querySelector("small")
    msgFraqueza.textContent = ""
    exibirCardMaquina(optionPlayer)

    const alertFraquezaPlayer = document.getElementById("fraquezaPlayer")
    const alertFraquezaBot = document.getElementById("fraquezaBot")
    
    if(optionPlayer == "ataque"){
        if(cardPlayer.fraqueza == cardBot.type){
            msgFraqueza.style.cssText = `
                display: block;
                color: red;
            `
            msgFraqueza.textContent = "Seu Pokémon recebeu o dobro de dano por fraqueza"
            valueCardMaquina = valueCardMaquina * 2

            alertFraquezaPlayer.style.cssText = `animation: piscar 1s linear infinite;`
            console.log("Efeito: ", valueCardMaquina)
        }
        if(cardBot.fraqueza == cardPlayer.type){
            msgFraqueza.style.cssText = `
                display: block;
                color: green;
            `

            msgFraqueza.textContent = "O Pokémon do oponente recebeu o dobro de dano por fraqueza"
            alertFraquezaBot.style.cssText = `animation: piscar 1s linear infinite;`

            valueCardPlayer = valueCardPlayer * 2
            console.log("Efeito: ", valueCardPlayer)
        }
    }

    if(valueCardPlayer < valueCardMaquina){
        msgText.innerHTML = ""
        msgText.insertAdjacentHTML("afterbegin", `${cardPlayer.nome} está fora de combate <br><br> ${cardBot.nome} é o vencedor da rodada <br><br>`)
        ptsBot = ptsBot + valueCardMaquina
        console.log(
            "maquina: ", valueCardMaquina,
            "player: ", valueCardPlayer
            )
    }
    else if(valueCardPlayer > valueCardMaquina){
        msgText.innerHTML = ""
        msgText.insertAdjacentHTML("afterbegin", `${cardBot.nome} está fora de combate <br><br> ${cardPlayer.nome} é o vencedor da rodada <br><br>`)
        ptsPlayer = ptsPlayer + valueCardPlayer

        console.log(
            "maquina: ", valueCardMaquina,
            "player: ", valueCardPlayer
            )

    }else if(valueCardPlayer == valueCardMaquina){
        msgText.innerHTML = ""
        msgText.insertAdjacentHTML("afterbegin", `Houve um empate de forças <br><br>`)
    }
    
    $button.style.display = "none"
    msg.style.display = "block"

    scoreboard()
    timer()

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
            if(ptsPlayer > ptsBot){
                msg.innerHTML = ""
                msg.insertAdjacentHTML("afterbegin", `FIM DA BATALHA! <br><br> Você venceu esse duelo`)
            }
            else if(ptsPlayer < ptsBot){
                msg.innerHTML = ""
                msg.insertAdjacentHTML("afterbegin", `FIM DA BATALHA! <br><br> ${trainerRandom} venceu esse duelo`)
            }
            else{
                msg.innerHTML = ""
                msg.insertAdjacentHTML("afterbegin", `FIM DA BATALHA! <br><br> Não houve vencedores`)
            }
        }
    }, 7000)
    
}

function timer(){
    let time = 7
    const temporizador = setInterval(()=>{
        time --
        document.querySelector(".time").textContent = time
        if(time <= 0){
            clearInterval(temporizador)
        }
    }, 1000)   
}

function opcaoSelecionada() {
    var selecionado = document.getElementsByName("action"); 
    for (i = 0; i < selecionado.length; i++) {
      if (selecionado[i].checked) {
        return selecionado[i].value;
      }
    }
}