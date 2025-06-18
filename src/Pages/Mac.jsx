import React, {useEffect, useState} from 'react';
import BlurCard from "../Components/Card/BlurCard.jsx";
import Cupon from "../Components/Card/Cupon.jsx";

const Mac = () => {
    const [bestCupons, setBestCupons] = useState([
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/tri-produkta-na-vibor-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/tri-produkta-na-vibor-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/tri-produkta-na-vibor-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/tri-produkta-na-vibor-475x260.webp", text:"Три продукта на выбор"},
    ])
    const [allCupons, setAllCupons] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5022/Cupons/MacCupons')
            .then(response => response.json())
            .then(data => setAllCupons(data))
            .catch(error => console.error(error))
    }, []);

    return (
        <div className={"flex justify-center"}>
            <div className={"flex flex-col w-[77%] items-center"}>
                <div className={"flex justify-center mt-20"}>
                    <p className={"text-[70px] playwrite-dk-loopet-font"}>MacDonald's</p>
                </div>
                <div className={"flex flex-col mt-20 p-6 rounded-2xl bg-[#ffb03d]"}>
                    <p className={"text-white text-[40px] font-extrabold mb-4"}>ЛУЧШИЕ КУПОНЫ</p>
                    <div className={"flex flex-row flex-wrap gap-6"}>
                        {
                            bestCupons.map((item,index)=>(
                                <div>
                                    <Cupon img={item.image} text={item.text} width={300} height={150}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={"flex flex-col w-full bg-[#ededed] rounded-2xl mb-10 mt-32 p-4 pb-6"}>
                    <p className={"text-[#303030] text-[40px] font-extrabold mb-4"}>ВСЕ КУПОНЫ</p>
                    <div className={"flex flex-row flex-wrap gap-6"}>
                        {
                            allCupons.map((item,index)=>(
                                <div>
                                    <Cupon img={item.imageUrl} textColor={"black"} text={item.title} width={300} height={150} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mac;