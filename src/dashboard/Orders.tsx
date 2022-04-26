import * as React from "react";
import Link from "@mui/material/Link";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";

// Generate Order Data
function createData(id: number, name: string, sensorId: string, status: string, useRate: number) {
    return { id, name, sensorId, useRate, status };
}

const rows = [
    createData(0, "2階 休憩スペース DOP", "0000001", "used", 33),
    createData(1, "2階 休憩スペース POD1", "0000002", "not used", 42),
    createData(2, "2階 休憩スペース POD2", "0000003", "used", 59),
];

function preventDefault(event: React.MouseEvent) {
    event.preventDefault();
}

export default function Orders() {
    return (
        <React.Fragment>
            <Title>使用状況一覧</Title>

            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "left",
                    "& > *": {
                        m: 1,
                    },
                }}
            >
                <ButtonGroup variant="outlined" aria-label="outlined button group">
                    <Button>Yesterday</Button>
                    <Button variant="contained">Week</Button>
                    <Button>Month</Button>
                </ButtonGroup>
            </Box>

            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Sensor ID</TableCell>
                        <TableCell>Current status</TableCell>
                        <TableCell>利用率 [%]</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.sensorId}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.useRate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {/* <Link color="primary" href="#" onClick={preventDefault} sx={{ mt: 3 }}>
                See more orders
            </Link> */}
        </React.Fragment>
    );
}
