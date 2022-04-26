import * as React from "react";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import Title from "./Title";

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

// 現在の年月日を返す
const getCurrentDate = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();
    const dayOfWeek = now.getDay();
    const dayOfWeekStr = ["日", "月", "火", "水", "木", "金", "土"][dayOfWeek];

    return year + "年" + month + "月" + date + "日 (" + dayOfWeekStr + ")";
};

// 現在の時間を返す
const getCurrentTime = (): string => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const hour = now.getHours();
    const min = now.getMinutes();

    return hour + ":" + min;
};

function LoadProc() {
    var target = document.getElementById("DateTimeDisp");
}

export default function Deposits() {
    return (
        <React.Fragment>
            <Title>現在時刻</Title>
            <Typography component="p" variant="h4">
                {getCurrentTime()}
            </Typography>
            <Typography color="text.secondary" sx={{ flex: 1 }}>
                {getCurrentDate()}
            </Typography>
        </React.Fragment>
    );
}
