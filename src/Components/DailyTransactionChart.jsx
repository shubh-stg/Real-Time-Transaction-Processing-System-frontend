import React, { useEffect, useState } from 'react'
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import { getDailyTransactions } from '../Service/AdminService';

const DailyTransactionChart = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await getDailyTransactions();
        

        
        const formatted = res.data.map(d => ({
          date: new Date(d.date).toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "short"
          }),
          count: Number(d.amount), 
          originalDate: d.date 
        }));
        
    
        
        setData(formatted);
      } catch (err) {
        console.error("Failed to fetch daily transaction stats", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, []);

  if (loading) return <p>Loading daily stats...</p>;
  if (error) return <p>Failed to load stats.</p>;

  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h3 style={{ 
        fontSize: "2.25rem", 
        fontWeight: "700", 
        marginBottom: "2rem",
        color: "#2d3748" // Dark color for better contrast on light green bg
      }}>
        Daily Transaction Volume
      </h3>
      <div style={{ width: "100%", height: 300 }}>
        <ResponsiveContainer>
          <BarChart 
            data={data} 
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#cbd5e0" />
            <XAxis 
              dataKey="date" 
              stroke="#4a5568"
              fontSize={18}
              fontWeight={700}
            />
            <YAxis 
              allowDecimals={false}
              stroke="#4a5568"
              fontSize={18}
             
              fontWeight={700}
            />
            <Tooltip 
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '8px',
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
              }}
            />
            <Bar 
              dataKey="count" 
              fill="#4299e1" 
              radius={[4, 4, 0, 0]} 
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
export default DailyTransactionChart