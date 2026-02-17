import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'Mois 1', performance: 20 },
  { name: 'Mois 2', performance: 35 },
  { name: 'Mois 3', performance: 45 },
  { name: 'Mois 4', performance: 60 },
  { name: 'Mois 5', performance: 85 },
  { name: 'Mois 6', performance: 100 },
];

export const PerformanceChart: React.FC = () => {
  return (
    <div className="w-full h-[300px] font-sans text-xs">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#9CA3AF" 
            tickLine={false}
            axisLine={false}
            dy={10}
          />
          <YAxis 
            stroke="#9CA3AF" 
            tickLine={false}
            axisLine={false}
            dx={-10}
          />
          <Tooltip 
            contentStyle={{ 
                backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                backdropFilter: 'blur(8px)',
                borderRadius: '12px',
                border: '1px solid #E5E7EB',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
            }}
            itemStyle={{ color: '#0F172A', fontWeight: 600 }}
          />
          <Line
            type="monotone"
            dataKey="performance"
            stroke="#C5A059"
            strokeWidth={3}
            dot={{ r: 4, fill: '#0F172A', strokeWidth: 2, stroke: '#fff' }}
            activeDot={{ r: 6, fill: '#C5A059' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};