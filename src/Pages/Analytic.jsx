import React, {useState} from 'react';
import {BarChart, PieChart} from "@mui/x-charts";
import {Box, Typography} from "@mui/material";
import BackgroundGraph from "../Components/Graph/BackgroundGraph.jsx";

const Analytic = () => {
    const [kfsTopStats, setKfcTopStats] = useState([
        { id: 0, value: 60, label: '5050' },
        { id: 1, value: 12, label: '7070' },
        { id: 2, value: 10, label: '1234' },
        { id: 3, value: 23, label: '2020' },
        { id: 4, value: 23, label: '5454' },
        { id: 5, value: 1, label: '6565' },
        { id: 6, value: 55, label: '7676' },
    ])

    const [kfsCountStats, setKfcCountStats] = useState([
            { id: 0, value: 60, label: '5050' },
            { id: 1, value: 12, label: '7070' },
            { id: 2, value: 10, label: '1234' },
            { id: 3, value: 23, label: '2020' },
            { id: 3, value: 23, label: '2020' },
            { id: 4, value: 23, label: '5454' },
            { id: 5, value: 1, label: '6565' },
            { id: 6, value: 55, label: '7676' },
        ])
    const [kfcDislikeStats, setKfcDislikeStats] = useState([
        { id: 0, value: 60, label: '5050' },
        { id: 1, value: 12, label: '7070' },
        { id: 2, value: 10, label: '1234' },
        { id: 3, value: 23, label: '2020' },
        { id: 3, value: 23, label: '2020' },
        { id: 4, value: 23, label: '5454' },
        { id: 5, value: 1, label: '6565' },
        { id: 6, value: 55, label: '7676' },
    ])

    let some = (e, data) =>{
        console.log(1);
    }
    return (
        <div className={"flex w-full justify-center mb-[0em] z-10"}>
            <div className={"w-[105em] flex overflow-auto "}>
                <div className={"flex w-[100%] mt-20 bg-zinc-200/30 rounded-xl p-4"}>
                    <div className={"flex flex-row bg-zinc-300/20 rounded-xl p-4 border-3 border-zinc-500/20 shadow-lg"}>
                        <div className={"mr-40"}>
                            <p className={"text-[36px] text-black ml-12 mr-24 mb-10"}>Лучшие купоны КФС</p>
                            <PieChart
                                onItemClick={(event, data) => some(event,data)}
                                series={[
                                    {
                                        data: kfsTopStats,
                                        highlightScope: { fade: 'global', highlight: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                    },
                                ]}
                                height={400}
                                width={400}
                            />
                        </div>
                    </div>
                    <div className={"bg-zinc-300/20 rounded-xl ml-auto border-3 border-zinc-500/20 shadow-lg"}>
                        <div className={"mt-4"}>
                            <p className={"text-[36px] text-black ml-12 mr-24 mb-10"}>По количеству реакций</p>
                            <BarChart
                                xAxis={[{data:[...kfsCountStats.map(e => e.label)]}]}
                                series={[{ data: [...kfsCountStats.map(e => e.value)] }]}
                                height={170}
                                width={950}
                            />
                        </div>
                        <div className={"mt-4"}>
                            <p className={"text-[36px] text-black ml-12 mr-24 mb-10"}>По количеству дизлайков</p>
                            <BarChart
                                xAxis={[{data:[...kfcDislikeStats.map(e => e.label)]}]}
                                series={[{ data: [...kfcDislikeStats.map(e => e.value)] }]}
                                height={170}
                                width={950}
                            />
                        </div>
                    </div>

                </div>
                <div className={"flex w-[80%] mt-20 bg-zinc-200/30 rounded-xl p-2"}>
                    <div className={"flex flex-row bg-zinc-300/20 rounded-xl p-4 border-3 border-zinc-500/20 shadow-lg"}>
                        <div className={"mr-40"}>
                            <p className={"text-[36px] text-black ml-12 mr-24 mb-10"}>Лучшие купоны MacDonalds</p>
                            <PieChart
                                onItemClick={(event, data) => some(event,data)}
                                series={[
                                    {
                                        data: kfsTopStats,
                                        highlightScope: { fade: 'global', highlight: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                    },
                                ]}
                                height={400}
                                width={400}
                            />
                        </div>
                    </div>
                    <div className={"bg-zinc-300/20 rounded-xl ml-auto border-3 border-zinc-500/20 shadow-lg"}>
                        <div className={"mt-4"}>
                            <p className={"text-[36px] text-black ml-12 mr-24 mb-10"}>По количеству реакций</p>
                            <BarChart
                                xAxis={[{data:[...kfsCountStats.map(e => e.label)]}]}
                                series={[{ data: [...kfsCountStats.map(e => e.value)] }]}
                                height={170}
                                width={950}
                            />
                        </div>
                        <div className={"mt-4"}>
                            <p className={"text-[36px] text-black ml-12 mr-24 mb-10"}>По количеству дизлайков</p>
                            <BarChart
                                xAxis={[{data:[...kfcDislikeStats.map(e => e.label)]}]}
                                series={[{ data: [...kfcDislikeStats.map(e => e.value)] }]}
                                height={170}
                                width={950}
                            />
                        </div>
                    </div>

                </div>
                <div className={"flex w-[80%] mt-20 bg-zinc-200/30 rounded-xl p-2"}>
                    <div className={"flex flex-row bg-zinc-300/20 rounded-xl p-4 border-3 border-zinc-500/20 shadow-lg"}>
                        <div className={"mr-40"}>
                            <p className={"text-[36px] text-black ml-12 mr-24 mb-10"}>Лучшие купоны КФС</p>
                            <PieChart
                                onItemClick={(event, data) => some(event,data)}
                                series={[
                                    {
                                        data: kfsTopStats,
                                        highlightScope: { fade: 'global', highlight: 'item' },
                                        faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
                                    },
                                ]}
                                height={400}
                                width={400}
                            />
                        </div>
                    </div>
                    <div className={"bg-zinc-300/20 rounded-xl ml-auto border-3 border-zinc-500/20 shadow-lg"}>
                        <div className={"mt-4"}>
                            <p className={"text-[36px] text-black ml-12 mr-24 mb-10"}>По количеству реакций</p>
                            <BarChart
                                xAxis={[{data:[...kfsCountStats.map(e => e.label)]}]}
                                series={[{ data: [...kfsCountStats.map(e => e.value)] }]}
                                height={170}
                                width={950}
                            />
                        </div>
                        <div className={"mt-4"}>
                            <p className={"text-[36px] text-black ml-12 mr-24 mb-10"}>По количеству дизлайков</p>
                            <BarChart
                                xAxis={[{data:[...kfcDislikeStats.map(e => e.label)]}]}
                                series={[{ data: [...kfcDislikeStats.map(e => e.value)] }]}
                                height={170}
                                width={950}
                            />
                        </div>
                    </div>

                </div>

            </div>
            <BackgroundGraph/>

        </div>
    );
};

export default Analytic;