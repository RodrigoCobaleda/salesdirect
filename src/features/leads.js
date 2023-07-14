import "../App.css";
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Label,
  Legend,
  ResponsiveContainer
} from "recharts";

const data = [
    {id:1, full_name:"Sarah Thompson",date:"2023-05-13",leads:5,meetings:9,win_lose:0.53,deals:4},
    {id:2,full_name:"Daniel Martinez",date:"2022-09-10",leads:1,meetings:7,win_lose:0.81,deals:8},
    {id:3,full_name:"Isabella Hernandez",date:"2023-04-29",leads:11,meetings:11,win_lose:0.16,deals:0},
    {id:4,full_name:"Emily Davis",date:"2023-05-03",leads:15,meetings:5,win_lose:0.77,deals:11},
    {id:5,full_name:"Joseph Lewis",date:"2023-02-06",leads:0,meetings:4,win_lose:0.07,deals:2},
    {id:6,full_name:"Sarah Thompson",date:"2023-05-11",leads:7,meetings:6,win_lose:0.68,deals:4},
    {id:7,full_name:"David Wilson",date:"2023-03-03",leads:1,meetings:2,win_lose:0.43,deals:12},
]

const MyLeads = () => {
    return (
        <ResponsiveContainer width="95%" height="80%">
            <BarChart
                width={400}
                height={400}
                data={data}
                margin={{
                top: 5,
                right: 5,
                left: 5,
                bottom: 5
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="full_name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="leads" fill="#C769BD" />
            </BarChart>
        </ResponsiveContainer>
    );
  }

  export default MyLeads;