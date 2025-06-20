import React, { useEffect, useState } from 'react'
import { getTopUsers } from '../Service/AdminService';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid
} from "recharts";

const TopUsers = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

    useEffect(() => {
    const fetchTopSenders = async () => {
      try {
        const res = await getTopUsers();
        setData(res.data);
      } catch (err) {
        console.error("Error fetching top senders", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchTopSenders();
  }, []);

    if (loading) return <p>Loading top senders...</p>;
  if (error) return <p>Failed to load top senders.</p>;

return (
  <div style={{ textAlign: "center", marginTop: "2rem" }}>
    <h3 style={{ 
      fontSize: "2.25rem", 
      fontWeight: "700", 
      marginBottom: "2rem",
      color: "#2d3748"
    }}>
      Top Senders
    </h3>
    
    <div style={{ width: "100%", height: 300 }}>
      <ResponsiveContainer>
        <BarChart
          layout="vertical"
          data={data}
          margin={{ top: 20, right: 30, left: 80, bottom: 20 }}
        >
          <CartesianGrid 
            strokeDasharray="3 3" 
            stroke="#cbd5e0"
            horizontal={true}
            vertical={false}
          />
          <XAxis 
            type="number" 
            stroke="#4a5568"
            fontSize={18}
            tickFormatter={(value) => `₹${value.toLocaleString()}`}
            fontWeight={600}
          />
          <YAxis 
            dataKey="name" 
            type="category" 
            stroke="#4a5568"
            fontSize={18}
            width={70}
            fontWeight={600}
          />
          <Tooltip 
            contentStyle={{
              backgroundColor: '#ffffff',
              border: '1px solid #e2e8f0',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}
            formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
            labelStyle={{ color: '#2d3748', fontWeight: '600' }}
          />
          <Bar 
            dataKey="totalAmount" 
            fill="#00b894"
            radius={[0, 4, 4, 0]}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
);
  
}

export default TopUsers