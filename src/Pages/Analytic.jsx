import React, {useState} from 'react';
import {BarChart, PieChart} from "@mui/x-charts";
import {Box, Typography} from "@mui/material";
import BackgroundGraph from "../Components/Graph/BackgroundGraph.jsx";

const Analytic = () => {
    const [kfsTopStats, setKfcTopStats] = useState([
        { id: 0, value: 60, label: '5050' },
        { id: 1, value: 12, label: '7070' },
        { id: 2, value: 10, label: '1234' },
        { id: 2, value: 23, label: '2020' },
    ])

    const [kfsCountStats, setKfcCountStats] = useState([
            { id: 0, value: 60, label: '5050' },
            { id: 1, value: 12, label: '7070' },
            { id: 2, value: 10, label: '1234' },
            { id: 2, value: 23, label: '2020' },
        ])

    let some = (e, data) =>{
        console.log(1);
    }
    return (
        <div className={"flex w-full justify-center mb-[13.5em] z-10"}>
                <div className={"flex w-[80%] mt-20"}>
                    <div className={"flex flex-row bg-zinc-500/20 rounded-xl p-4 border-3 border-black/20"}>
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
                    <div>
                        <p className={"text-[36px] text-black ml-12 mr-24 mb-10"}>По количеству реакций</p>
                        <BarChart
                            xAxis={[{data:[...kfsCountStats.map(e => e.label)]}]}
                            series={[{ data: [...kfsCountStats.map(e => e.value)] }]}
                            height={450}
                        />
                    </div>
                    <BackgroundGraph/>
                </div>
        </div>
    );
};

export default Analytic;