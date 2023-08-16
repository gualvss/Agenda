function App() {
  
  return (
    <>
  <body class= "w-screen h-screen bg-black">
        
    <div class= "bg-gray-300 p-4 space-y-1 fixed w-full flex items-center justify-between">
     
     <div class= "text-orange-400  text-xl font-bold">24H Shop</div>
     
     <div class= "space-x-4 text-sm relative flex flex-row">
      <div class= "text-black hover:underline">بلاگ</div>
      <div class= "text-black hover:underline">تماس با ما</div>
      <div class= "text-black hover:underline">صفحه اصلی</div>
     </div>
    
    </div>
     
<br/>
<br/>  
<br />   
<br /> 
    <div class=" w-full h-20 flex justify-center flex-row items-center space-x-12">
    
    <img src="/epic.png" alt="" width={50} height={100}/>
    <img src="/Steam.png" alt="" width={70} height={100}/>
    <img src="/Xbox.png" alt="" width={100} height={100}/>
    <img src="/playstation.jpg" alt="" width={100} height={100}/>
    </div>

<br />
<br />
    
    <div class="flex items-center justify-center">
      
      <hr class="w-full border-t border-white"/>
      <div class="w-[106px] h-[56px] border rounded-full flex justify-center items-center">
      <img class="h-10 mx-2" src="/epic.png" title="Imagem centralizada" width={50} height={100}/>
      </div>
      <hr class="w-full border-t border-white"/>
    </div>

<br />
<br />
 
  <div class="flex justify-center items-center gap-20">
   
   <div>
      <img src="/GTAV.png" alt="Capa do Jogo 1" class="w-[160px] h-full"/>
      <div class="p-1">
        <h2 class="text-white text-base font-bold ">Grand Theft Auto V:</h2>
        <p class="text-white text-base font-bold mb-3">Premium Edition</p>
        <p class="text-white font-medium mb-2">Valor: R$119,90</p>
        <button class="bg-blue-500 text-white font-semibold px-3 py-2 rounded-md">Comprar</button>
     </div>
  </div>

  <div class=" -mb-3">
      <img src="/fifa23.jpg" alt="Capa do Jogo 2" class="w-[160px] h-[200px]"/>
      <div class="p-1">
        <h2 class="text-white text-base font-bold ">EA SPORTS FIFA 23</h2>
        <p class="text-white text-base font-bold mb-3">Standard Edition</p>
        <p class="text-white font-medium mb-2">Valor: R$199,90</p>
        <button class="bg-blue-500 text-white font-semibold px-3 py-2 rounded-md">Comprar</button>
     </div>
  </div>

  <div class=" -mb-2">
      <img src="/Redead.jpg" alt="Capa do Jogo 3" class="w-[160px] h-[200px]"/>
      <div class="p-1">
        <h2 class="text-white text-base font-bold ">Red Dead Redemption II</h2>
        <p class="text-white text-base font-bold mb-3">Ultimate Edition</p>
        <p class="text-white font-medium mb-2">Valor: R$249,90</p>
        <button class="bg-blue-500 text-white font-semibold px-3 py-2 rounded-md">Comprar</button>
     </div>
  </div>

  <div class=" -mb-2">
      <img src="/Cyberpunk.png" alt="Capa do Jogo 4" class="w-[160px] h-[200px]"/>
      <div class="p-1">
        <h2 class="text-white text-base font-bold ">CyberPunk 2077</h2>
        <p class="text-white text-base font-bold mb-3">Standard Edition</p>
        <p class="text-white font-medium mb-2">Valor: R$179,90</p>
        <button class="bg-blue-500 text-white font-semibold px-3 py-2 rounded-md">Comprar</button>
     </div>
  </div>

</div>


   




 
 </body>
</>
  )
}

export default App
