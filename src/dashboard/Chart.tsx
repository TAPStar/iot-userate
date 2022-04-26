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
        uv: 35,
        pv: 24,
    },
    {
        name: "4/21",
        uv: 30,
        pv: 15,
    },
    {
        name: "4/22",
        uv: 25,
        pv: 10,
    },
    {
        name: "4/23",
        uv: 35,
        pv: 20,
    },
    {
        name: "4/24",
        uv: 38,
        pv: 30,
    },
    {
        name: "4/25",
        uv: 40,
        pv: 40,
    },
    {
        name: "4/26",
        uv: 38,
        pv: 35,
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
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" activeDot={{ r: 8 }} />
                    <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                </LineChart>
            </ResponsiveContainer>
        </React.Fragment>
    );
}
