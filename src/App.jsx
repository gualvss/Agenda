import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

function App() {

  return (
    <>
      <body class="w-full bg-black">

        <div class="bg-gray-300 p-4 fixed w-full flex items-center justify-between">

          <div class="text-orange-400 text-xl font-bold">24H Shop</div>

          <div class="space-x-4 text-sm flex flex-row">
            <div class="text-black hover:underline">بلاگ</div>
            <div class="text-black hover:underline">تماس با ما</div>
            <div class="text-black hover:underline">صفحه اصلی</div>
          </div>

        </div>

        <br />
        <br />
        <br />
        <br />

        <div class=" w-full h-20 flex justify-center flex-row items-center space-x-12">

          <img src="/epic.png" alt="" width={50} height={100} />
          <img src="/Steam.png" alt="" width={70} height={100} />
          <img src="/Xbox.png" alt="" width={100} height={100} />
          <img src="/playstation.jpg" alt="" width={100} height={100} />
        </div>

        <br />
        <br />

        <div class="flex items-center justify-center">

          <hr class="w-full border-t border-white" />
          <div class="w-[145px] h-[70px] border rounded-full flex justify-center items-center">
            <img class="h-12 mx-2" src="/epic.png" title="Imagem centralizada" width={45} height={100} />
          </div>
          <hr class="w-full border-t border-white" />
        </div>

        <br />
        <br />

        <div class="flex justify-center items-center gap-20">

          <div>
            <img src="/GTAV.png" alt="Capa do Jogo 1" class="w-[160px] h-full" />
            <div class="p-1">
              <h2 class="text-white text-base font-bold ">Grand Theft Auto V</h2>
              <p class="text-white text-base font-bold mb-3">Premium Edition</p>
              <p class="text-white font-medium mb-2">Valor: R$119,90</p>
              <button class="bg-blue-500 text-white font-semibold px-3 py-2 rounded-md hover:underline">Comprar</button>
            </div>
          </div>


          <div class=" -mb-3">
            <img src="/fifa23.jpg" alt="Capa do Jogo 2" class="w-[160px] h-[200px]" />
            <div class="p-1">
              <h2 class="text-white text-base font-bold ">EA SPORTS FIFA 23</h2>
              <p class="text-white text-base font-bold mb-3">Standard Edition</p>
              <p class="text-white font-medium mb-2">Valor: R$199,90</p>
              <button class="bg-blue-500 text-white font-semibold px-3 py-2 rounded-md hover:underline">Comprar</button>
            </div>
          </div>


          <div class=" -mb-2">
            <img src="/Redead.jpg" alt="Capa do Jogo 3" class="w-[160px] h-[200px]" />
            <div class="p-1">
              <h2 class="text-white text-base font-bold ">Red Dead Redemption II</h2>
              <p class="text-white text-base font-bold mb-3">Ultimate Edition</p>
              <p class="text-white font-medium mb-2">Valor: R$249,90</p>
              <button class="bg-blue-500 text-white font-semibold px-3 py-2 rounded-md hover:underline">Comprar</button>
            </div>
          </div>


          <div class=" -mb-2">
            <img src="/Cyberpunk.png" alt="Capa do Jogo 4" class="w-[160px] h-[200px]" />
            <div class="p-1">
              <h2 class="text-white text-base font-bold">CyberPunk 2077</h2>
              <p class="text-white text-base font-bold mb-3">Standard Edition</p>
              <p class="text-white font-medium mb-2">Valor: R$179,90</p>
              <button class="bg-blue-500 text-white font-semibold px-3 py-2 rounded-md hover:underline">Comprar</button>
            </div>
          </div>

        </div>

        <br />
        <br />

        <div class="flex items-center justify-center">

          <hr class="w-full border-t border-white" />
          <div class="w-[145px] h-[70px] border rounded-full flex justify-center items-center">
            <img class="h-8" src="/Steam.png" title="Imagem centralizada" width={55} height={100} />
          </div>
          <hr class="w-full border-t border-white" />
        </div>

        <br />
        <br />

        <section class="w-full flex justify-center">
          <div class="bg-black w-[80%] flex flex-row justify-between">

            <div class="text-white h-full flex items-center ">
              <AiOutlineLeft size={50} />
            </div>

            <div class="flex flex-col">

              <div class="w-full flex flex-row justify-between text-white">
                <div class="text-xl font-medium">SPECIAL EVENTS</div>
                <button class="bg-gray-700 font-base px-2 py-1 rounded-md hover:underline mb-3">View All Events</button>
              </div>

              <div class="flex flex-row justify-center items-center gap-10">

                <div class=" -mb-2">
                  <img src="/img 1.png" alt="Capa do Jogo 1" class="w-[360px] h-[280px]" />
                  <div class="p-1 text-center">
                    <h2 class="text-white text-lg font-bold hover:underline">TinyBuild Everything Must Go Sale</h2>
                    <p class="text-white text-lg font-bold mb-1 hover:underline">Starts Now!</p>
                    <p class="text-white opacity-70 font-medium mb-2">Fri, May 26, 2023</p>
                  </div>
                </div>

                <div class=" -mb-2">
                  <img src="/img 2.jpg" alt="Capa do Jogo 2" class="w-[370px] h-[280px]" />
                  <div class="p-1 text-center">
                    <h2 class="text-white text-lg font-bold hover:underline">The Hello Neighbor Franchise Sale</h2>
                    <p class="text-white text-lg font-bold mb-1 hover:underline">Live Now!</p>
                    <p class="text-white opacity-70 font-medium mb-2">Thu, May 25, 2023</p>
                  </div>
                </div>

                <div class=" mb-6">
                  <img src="/img 3.png" alt="Capa do Jogo 2" class="w-[360px] h-[280px]" />
                  <div class="p-1 text-center">
                    <h2 class="text-white text-lg font-bold hover:underline">Jackbox Games Weekend Sale</h2>
                    <p class="text-white opacity-70 font-medium mb-2">Thu, May 25, 2023</p>
                  </div>
                </div>

              </div>

              <br />

              <div class="flex flex-row justify-center items-center gap-10">

                <div class=" -mb-2">
                  <img src="/img 4.png" alt="Capa do Jogo 2" class="w-[360px] h-[280px]" />
                  <div class="p-1 text-center">
                    <h2 class="text-white text-lg font-bold hover:underline -mb-1">Curve Games Publisher Sale 2023,</h2>
                    <p class="text-white text-lg font-bold mb-1 hover:underline">Grab a free game on us</p>
                    <p class="text-white opacity-70 font-medium mb-2">Thu, May 25, 2023</p>
                  </div>

                </div>

                <div class=" -mb-2">
                  <img src="/img 5.jpg" alt="Capa do Jogo 2" class="w-[360px] h-[280px]" />
                  <div class="p-1 text-center">
                    <h2 class="text-white text-lg font-bold hover:underline">The Quintessential  Yogscast Games</h2>
                    <p class="text-white text-lg font-bold mb-1 hover:underline">Sale - Featuring Landlord's Super 1.0...</p>
                    <p class="text-white opacity-70 font-medium mb-2">Thu, May 25, 2023</p>
                  </div>
                </div>

                <div class=" mb-6">
                  <img src="/img 6.jpg" alt="Capa do Jogo 2" class="w-[360px] h-[280px]" />
                  <div class="p-1 text-center">
                    <h2 class="text-white text-lg font-bold hover:underline">the Indle Houses & Girls Make Games</h2>
                    <p class="text-white opacity-70 font-medium mb-2">Thu, May 25, 2023</p>
                  </div>
                </div>
              </div>

            </div>

            <div class="text-white h-full flex items-center">
              <AiOutlineRight size={50} />
            </div>
          </div>

        </section>

      </body>
    </>
  )
}

export default App
