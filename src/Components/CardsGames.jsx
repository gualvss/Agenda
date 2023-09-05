import BotaoCompra from "./BotaoCompra"

function CardsGames({name, price, pathImg, subname}) {
    
    
    return (
        
            <div>
                <img src={pathImg} alt="Capa de Jogo" class="w-[160px] h-[200px]" />
                <div class="p-1">
                    <h2 class="text-white text-base font-bold ">{name}</h2>
                    <p class="text-white text-base font-bold mb-3">{subname}</p>
                    <p class="text-white font-medium mb-2">{price}</p>
                    <BotaoCompra/>
                </div>
            </div>
        
        

    )
}

export default CardsGames