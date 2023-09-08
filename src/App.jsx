import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

import Cabeçalho from "./Components/Cabeçalho";
import CardsGames from "./Components/CardsGames";
import CardsEventos from "./Components/CardsEventos";

function App() {

  return (
    <>

      <body class="w-full bg-black">

        <Cabeçalho />

        <div class=" tablet-large:flex-row flex-col w-full flex justify-center items-center space-x-[14px] pt-[120px]">
          <div class="flex flex-row gap-8 p-1">
            <img src="/epic.svg" alt="" width={60} height={100} />
            <img src="/Steam.png" alt="" width={60} height={100} />
          </div>
          <div class="flex flex-row pe-2">
            <img src="/Xbox.png" alt="" width={100} height={100} />
            <img src="/playstation.jpg" alt="" width={100} height={100} />
          </div>
        </div>

        <div class="flex items-center justify-center mb-[40px] pt-5 pe-1">
          <hr class="w-full border-t border-white " />
          <div class="w-[145px] h-[70px] border rounded-full flex justify-center items-center">
            <img class="h-12 mx-2" src="/epic.svg" title="Imagem centralizada" width={55} height={100} />
          </div>
          <hr class="w-full border-t border-white" />
        </div>

        <div class="tablet-large:flex-row flex-col flex justify-center items-center gap-20">
          <CardsGames
            pathImg="/GTAV.png"
            name="Grand Theft Auto V"
            subname="Premium Edition"
            price="R$ 119,90"
          />

          <CardsGames
            pathImg="/fifa23.jpg"
            name="EA SPORTS FIFA 23"
            subname="Standard Edition"
            price="R$ 199,90"
          />

          <CardsGames
            pathImg="/Redead.jpg"
            name="Red Dead Redemption II"
            subname="Ultimate Edition"
            price="R$ 249,90"
          />

          <CardsGames
            pathImg="/Cyberpunk.png"
            name="CyberPunk 2077"
            subname="Stardard Edition"
            price="R$ 149,90"
          />
        </div>

        <div class="flex items-center justify-center mb-[35px] space-y-[50px]">
          <hr class="w-full border-t border-white -mb-12" />
          <div class="w-[145px] h-[70px] border rounded-full flex justify-center items-center">
            <img class="h-8" src="/Steam.png" title="Imagem centralizada" width={55} height={100} />
          </div>
          <hr class="w-full border-t border-white" />
        </div>

        <section class="w-full flex justify-center">
          <div class="bg-black w-[80%] flex flex-row justify-between">

            <div class="invisible tablet-large:visible text-white h-full flex items-center p-2">
              <AiOutlineLeft size={50} />
            </div>
            <div class="flex flex-col">
              <div class="w-full flex flex-row justify-between text-white">
                <div class="text-xl font-medium">SPECIAL EVENTS</div>
                <button class="bg-gray-700 font-base px-2 py-1 rounded-md hover:underline mb-4">View All Events</button>
              </div>

              <div class=" tablet-large:flex flex-row justify-center items-center gap-10 mb-7">

                <CardsEventos
                  pathImg="/img 1.png"
                  name="TinyBuild Everything Must Go Sale"
                  subname="Starts Now!"
                  date="Fri, May 26, 2023"
                />

                <CardsEventos
                  pathImg="/img 2.jpg"
                  name="The Hello Neighbor Franchise Sale -"
                  subname="LIVE NOW!"
                  date="Thu, May 25, 2023"
                />

                <CardsEventos
                  pathImg="/img 3.png"
                  name="Jackbox Games Weekend Sale"
                  date="Thu, May 25, 2023"
                />
              </div>


              <div class="tablet-large:flex flex-row justify-center items-center gap-11 mb-7">

                <CardsEventos
                  pathImg="/img 4.png"
                  name="Curve Games Publisher Sale 2023."
                  subname="Grab a free game on us"
                  date="Thu, May 25, 2023"
                />

                <CardsEventos
                  pathImg="/img 5.jpg"
                  name="The Quintessential Yogscast Games"
                  subname="Sale - Featuring Landlord's Super 1.0"
                  date="Thu, May 25, 2023"
                />

                <CardsEventos
                  pathImg="/img 6.jpg"
                  name="The Indie Houses & Girls Make Games"
                  date="Thu, May 25, 2023"
                />
              </div>
            </div>

            <div class=" invisible tablet-large:visible text-white h-full flex items-center p-2">
              <AiOutlineRight size={50} />
            </div>
          </div>
        </section>

      </body>
    </>
  )
}

export default App
