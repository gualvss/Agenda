import { AiOutlineBars } from "react-icons/ai";

function Cabeçalho() {

    return (

        <div class="bg-gray-300 fixed w-full p-4 flex items-center justify-between">

            <div class="text-orange-400 text-xl font-bold"> 24H Shop </div>
            <div class="invisible tablet-large:visible space-x-4 text-sm flex flex-row">
                <div class="text-black hover:underline">بلاگ</div>
                <div class="text-black hover:underline">تماس با ما</div>
                <div class="text-black hover:underline">صفحه اصلی</div>
                
                <div class="visible tablet-large:hidden flex items-center">
                <AiOutlineBars size={30}/>
                </div>
            </div>
        </div >

    )
}

export default Cabeçalho