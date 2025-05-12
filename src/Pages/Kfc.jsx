import React, {useState} from 'react';
import BlurCard from "../Components/Card/BlurCard.jsx";
import Cupon from "../Components/Card/Cupon.jsx";

const Kfc = () => {
    const [bestCupones, setBestCupones] = useState([
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
    ])

    const [allCupones, setAllCupones] = useState([
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},
        {image: "https://s82079.cdn.ngenix.net/230x230/ikcsm0oiyelxtrng2lu2k7jxfkst.png", text:"5050"},

    ])
    return (
        <div className={"flex items-center flex-col mt-20"}>
            <div className={"flex flex-col justify-center w-[80%]"}>
                <div className={"flex justify-center"}>
                    <p className={"text-[70px] playwrite-dk-loopet-font"}>KFC</p>
                </div>
                <div className={"flex flex-col mb-20 mt-20 pb-4 w-fit rounded-3xl p-4 bg-[#ffb03d]"}>
                    <p className={"text-white text-[40px] font-extrabold"}>ЛУЧШИЕ КУПОНЫ</p>
                    <div className={"flex gap-4"}>
                        {
                            bestCupones.map((item,index) =>
                                <div className={"w-[220px]"}>
                                    <Cupon img={item.image} text={item.text}  textColor={"black"} width={220} height={220}/>
                                </div>
                            )
                        }
                    </div>

                </div>
                <div className={"flex flex-col bg-[#ededed] rounded-2xl mb-10 p-4 pb-6"}>
                    <p className={"text-[#303030] text-[40px] font-extrabold"}>ВСЕ КУПОНЫ</p>
                    <div className={"flex flex-row gap-4 flex-wrap"}>
                        {
                            allCupones.map((item,index) =>
                                <div className={"w-[223px]"}>
                                    <Cupon img={item.image} text={item.text}  textColor={"black"} width={223} height={220}/>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Kfc;