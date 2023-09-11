function CardsEventos({ name, subname, pathImg, date }) {
    return (

        <div>
            <img src={pathImg} alt="Capa do Jogo 1" class="w-[380px] h-[280px]" />
            <div class="p-1 text-center">
                <h2 class="text-white text-lg font-bold hover:underline">{name}</h2>
                <p class="text-white text-lg font-bold mb-1 hover:underline">{subname}</p>
                <p class="text-white opacity-70 font-medium mb-2">{date}</p>
            </div>
        </div>

    )
}

export default CardsEventos




