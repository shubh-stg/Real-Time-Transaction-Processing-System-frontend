import React, { useEffect, useState } from 'react'
import { getStatusRatio } from '../Service/AdminService';
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";

const StatusRatioChart = () => {
  const [data, setdata] = useState([]);
  const COLORS = ["#28a745", "#dc3545"]; // green, red

  useEffect(() => {
    const fetchStatusData = async () => {
      try {
        const res = await getStatusRatio();
        const ratioData = res.data.map(item => ({
          name: item.status,
          value: item.count,
        }));
        setdata(ratioData);
      } catch (err) {
        console.error("Error fetching status ratio", err);
      }
    };
    
    fetchStatusData();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
     <h3 style={{ fontSize: "2.25rem", fontWeight: "700", marginBottom: "2rem" }}>
  Transaction Status Ratio
</h3>
      <PieChart width={400} height={300}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          outerRadius={120}
          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
}

export default StatusRatioChart