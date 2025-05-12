import React, {useState} from 'react';
import Cupon from "../Components/Card/Cupon.jsx";

const Bk = () => {
    const [bestCupones, setBestCupones] = useState([
        {image: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1091612_D368F2DE9E72B7BB263E4CA71A617FA0.webp", text:"Воппер с сыром, Гранд Чиз Фреш, 2 Кинг Фри большой, 2 Луковые кольца 6 шт.,  4 Соуса"},
        {image: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1091612_D368F2DE9E72B7BB263E4CA71A617FA0.webp", text:"Воппер с сыром, Гранд Чиз Фреш, 2 Кинг Фри большой, 2 Луковые кольца 6 шт.,  4 Соуса"},
        {image: "https://burger-king.by/api/v1/files/path/1_CategoryItem_1091612_D368F2DE9E72B7BB263E4CA71A617FA0.webp", text:"Воппер с сыром, Гранд Чиз Фреш, 2 Кинг Фри большой, 2 Луковые кольца 6 шт.,  4 Соуса"},
    ])

    const [allCupones, setAllCupones] = useState([
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
    return (
        <div className={"flex items-center flex-col mt-20"}>
            <div className={"flex flex-col justify-center w-[80%]"}>
                <div className={"flex justify-center"}>
                    <p className={"text-[70px] playwrite-dk-loopet-font"}>Burger King</p>
                </div>
                <div className={"flex flex-col mb-20 mt-20 pb-4 w-fit rounded-3xl p-4 bg-[#ffb03d]"}>
                    <p className={"text-white text-[40px] font-extrabold"}>ЛУЧШИЕ КУПОНЫ</p>
                    <div className={"flex gap-4"}>
                        {
                            bestCupones.map((item,index) =>
                                <div className={"w-[262px]"}>
                                    <Cupon img={item.image} text={item.text}  textColor={"black"} width={262} height={240}/>
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
                                <div className={"w-[295px]"}>
                                    <Cupon img={item.image} text={item.text}  textColor={"black"} width={295} height={245}/>
                                </div>
                            )
                        }
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Bk;