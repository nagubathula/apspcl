// components/PieChart.js
'use client'
// components/PieChart.js
import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const PieChart = () => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    if (chartContainer && chartContainer.current) {
      const ctx = chartContainer.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: ['SECI', 'APGENCO', 'NREDCAP'],
          datasets: [{
            data: [50, 41, 9],
            backgroundColor: ['#F59E0B', '#10B981', '#3B82F6'],
            hoverBackgroundColor: ['#FBBF24', '#34D399', '#60A5FA'],
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: 'top',
            },
            tooltip: {
              callbacks: {
                label: function(tooltipItem) {
                  return `${tooltipItem.label}: ${tooltipItem.raw}`;
                }
              }
            }
          },
          layout: {
            padding: 20
          }
        },
      });
    }

    // Clean up chart instance on component unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);

  return (
    <div className="w-full">
      <canvas ref={chartContainer} />
    </div>
  );
};

export default PieChart;
