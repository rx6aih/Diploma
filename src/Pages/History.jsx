import React, {useState} from 'react';
import Cupon from "../Components/Card/Cupon.jsx";

const History = () => {
    const [allKfcCupones, setAllKfcCupones] = useState([
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

    const [allBkCupones, setAllBkCupones] = useState([
        {image: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1091612_D368F2DE9E72B7BB263E4CA71A617FA0.webp", text:"Воппер с сыром, Гранд Чиз Фреш, 2 Кинг Фри большой, 2 Луковые кольца 6 шт.,  4 Соуса"},
        {image: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1091612_D368F2DE9E72B7BB263E4CA71A617FA0.webp", text:"Воппер с сыром, Гранд Чиз Фреш, 2 Кинг Фри большой, 2 Луковые кольца 6 шт.,  4 Соуса"},
        {image: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1091612_D368F2DE9E72B7BB263E4CA71A617FA0.webp", text:"Воппер с сыром, Гранд Чиз Фреш, 2 Кинг Фри большой, 2 Луковые кольца 6 шт.,  4 Соуса"},
        {image: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1091612_D368F2DE9E72B7BB263E4CA71A617FA0.webp", text:"Воппер с сыром, Гранд Чиз Фреш, 2 Кинг Фри большой, 2 Луковые кольца 6 шт.,  4 Соуса"},
        {image: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1091612_D368F2DE9E72B7BB263E4CA71A617FA0.webp", text:"Воппер с сыром, Гранд Чиз Фреш, 2 Кинг Фри большой, 2 Луковые кольца 6 шт.,  4 Соуса"},
        {image: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1091612_D368F2DE9E72B7BB263E4CA71A617FA0.webp", text:"Воппер с сыром, Гранд Чиз Фреш, 2 Кинг Фри большой, 2 Луковые кольца 6 шт.,  4 Соуса"},
        {image: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1091612_D368F2DE9E72B7BB263E4CA71A617FA0.webp", text:"Воппер с сыром, Гранд Чиз Фреш, 2 Кинг Фри большой, 2 Луковые кольца 6 шт.,  4 Соуса"},
        {image: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1091612_D368F2DE9E72B7BB263E4CA71A617FA0.webp", text:"Воппер с сыром, Гранд Чиз Фреш, 2 Кинг Фри большой, 2 Луковые кольца 6 шт.,  4 Соуса"},
        {image: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1091612_D368F2DE9E72B7BB263E4CA71A617FA0.webp", text:"Воппер с сыром, Гранд Чиз Фреш, 2 Кинг Фри большой, 2 Луковые кольца 6 шт.,  4 Соуса"},

    ])

    const [allMacCupons, setAllMacCupons] = useState([
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/fish-stiks-po-akcii-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/tri-produkta-na-vibor-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/tri-produkta-na-vibor-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/fish-stiks-po-akcii-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/fish-stiks-po-akcii-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/tri-produkta-na-vibor-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/tri-produkta-na-vibor-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/fish-stiks-po-akcii-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/fish-stiks-po-akcii-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/tri-produkta-na-vibor-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/tri-produkta-na-vibor-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/fish-stiks-po-akcii-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/fish-stiks-po-akcii-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/tri-produkta-na-vibor-475x260.webp", text:"Три продукта на выбор"},
        {image: "https://vkusnotochkamenu.ru/image/cachewebp/catalog/blog/tri-produkta-na-vibor-475x260.webp", text:"Три продукта на выбор"},
    ])

    return (
        <div className={"flex  justify-center"}>
            <div className={"flex flex-col w-[85%] bg-zinc-400/10 p-12 pt-8 rounded-xl justify-center mt-20"}>
                <p className={"text-[60px] font-bold"}>История</p>
                <div className={"flex flex-col mt-20 p-6 rounded-2xl bg-[#ffb03d]"}>
                <p className={"text-white text-[40px] font-extrabold mb-4"}>KFC</p>
                <div className={"flex flex-row flex-wrap gap-6"}>
                    {
                        allKfcCupones.map((item,index)=>(
                            <div>
                                <Cupon img={item.image} text={item.text} width={184} height={180}/>
                            </div>
                        ))
                    }
                </div>
            </div>
                <div className={"flex flex-col mt-20 p-6 rounded-2xl bg-rose-400/50"}>
                    <p className={"text-white text-[40px] font-extrabold mb-4"}>Burger King</p>
                    <div className={"flex flex-row flex-wrap gap-6"}>
                        {
                            allBkCupones.map((item,index)=>(
                                <div>
                                    <Cupon img={item.image} text={item.text.substring(0,37)+"..."} width={280} height={200}/>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className={"flex flex-col w-full bg-emerald-500/30 rounded-2xl mb-10 mt-32 p-4 pb-6"}>
                    <p className={"text-white text-[40px] font-extrabold mb-4"}>MacDonald's</p>
                    <div className={"flex flex-row flex-wrap gap-6"}>
                        {
                            allMacCupons.map((item,index)=>(
                                <div>
                                    <Cupon img={item.image} textColor={"black"} text={item.text} width={300} height={150} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>

        </div>
    );
};

export default History;