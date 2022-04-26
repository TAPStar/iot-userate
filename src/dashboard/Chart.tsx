import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import Title from "./Title";

// Generate Sales Data
function createData(time: string, amount?: number) {
    return { time, amount };
}

const sensorData = [
    {
        name: "4/20",
        DOP: 35,
        POD1: 24,
    },
    {
        name: "4/21",
        DOP: 30,
        POD1: 15,
    },
    {
        name: "4/22",
        DOP: 25,
        POD1: 10,
    },
    {
        name: "4/23",
        DOP: 35,
        POD1: 20,
    },
    {
        name: "4/24",
        DOP: 38,
        POD1: 30,
    },
    {
        name: "4/25",
        DOP: 40,
        POD1: 40,
    },
    {
        name: "4/26",
        DOP: 38,
        POD1: 35,
    },
];

export default function Chart() {
    const theme = useTheme();

    return (
        <React.Fragment>
            <Title>利用率グラフ</Title>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={300}
                    data={sensorData}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis type="number" domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="DOP" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="POD1" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
