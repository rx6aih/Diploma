import React, {useEffect, useState} from 'react';
import {LineChart} from "@mui/x-charts";

const BackgroundGraph = () => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }

    let a2 = 10, a3= 11, a4 = 12, a5 = 13, a6 = 16, a7 = 17;
    let b0 = 0, b1= 1, b2 = 2, b3 = 3, b4 = 4, b5 = 5, b6 = 6, b7 = 7, b8 = 8
    let [data1, setData1] = useState([null, null, a2, a3, a4, a5, a6, a7]);
    let [data2, setData2] = useState([b0, b1, b2, b3, b4, b5, b6, b7, b8]);

    function updateGraphs(){


    }

    useEffect(() => {
        const some = setInterval(
            () =>{
                let newArr1 = data1;
                for(let i = 0; i < newArr1.length; i++)
                    newArr1[i] = getRandomInt(20)
                setData1({...newArr1});

                let newArr2 = data2;
                for(let i = 0; i < newArr2.length; i++)
                    newArr2[i] = getRandomInt(20)
                setData2(newArr2);
            },500)
    }, []);



    return (
        <div className={"absolute left-0 bottom-10 -z-20"}>
            <LineChart
                xAxis={[{ data: data2 }]}
                series={[
                    {
                        data: data2,
                        valueFormatter: (value) => (value == null ? 'NaN' : value.toString()),
                    },
                    {
                        data: [null, null, null, null, 5.5, 2, 8.5, 1.5, 5],
                    },
                    {
                        data: [7, 8, 5, 4, null, null, 2, 5.5, 1],
                        valueFormatter: (value) => (value == null ? '?' : value.toString()),
                    },
                ]}
                width={2000}
                height={1000}
                className={"opacity-30 -z-10"}
            />
        </div>
    );
};

export default BackgroundGraph;