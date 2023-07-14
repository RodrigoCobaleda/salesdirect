import "../App.css";
import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const data = [
    {id:1, full_name:"Sarah Thompson",date:"2023-05-13",leads:5,meetings:15,win_lose:0.53,deals:4},
    {id:2,full_name:"Daniel Martinez",date:"2022-09-10",leads:1,meetings:12,win_lose:0.81,deals:8},
    {id:3,full_name:"Isabella Hernandez",date:"2023-04-29",leads:11,meetings:13,win_lose:0.16,deals:0},
    {id:4,full_name:"Emily Davis",date:"2023-05-03",leads:15,meetings:1,win_lose:0.77,deals:11},
    {id:5,full_name:"Joseph Lewis",date:"2023-02-06",leads:1,meetings:1,win_lose:0.07,deals:2},
    {id:6,full_name:"Sarah Thompson",date:"2023-05-11",leads:7,meetings:15,win_lose:0.68,deals:4},
    {id:7,full_name:"David Wilson",date:"2023-03-03",leads:1,meetings:2,win_lose:0.43,deals:12},
]

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const MyPie = () => {
  return (
    <div>
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="leads"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
    </div>
  );
}



export default MyPie;