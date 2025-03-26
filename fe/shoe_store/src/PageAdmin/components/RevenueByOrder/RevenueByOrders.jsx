import { Box, Typography } from "@mui/material";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { ApiRevenueChart } from "../../../apiServiceAdmin/ApiRevenueChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function RevenueByOrders() {
  const data = {
    "2025-02-22": 7600000.0,
    "2025-02-20": 1800000.0,
  };

  const [Data, setData] = useState([]);

  const dataDate = {
    startDate: "2025-02-01",
    endDate: "2025-02-28",
  };

  useEffect(() => {
    handle();
  }, []);
  const handle = () => {
    ApiRevenueChart(dataDate.startDate, dataDate.endDate)
      .then((res) => {
        setData(res.data);
        console.log(Data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const chartData = {
    labels: Object.keys(Data), // Các ngày
    datasets: [
      {
        label: "Doanh thu",
        data: Object.values(Data), // Các giá trị doanh thu
        fill: false,
        borderColor: "rgba(75,192,192,1)",
        tension: 0.1,
      },
    ],
  };

  // Cấu hình cho biểu đồ
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "top",
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Ngày",
        },
      },
      y: {
        title: {
          display: true,
          text: "Doanh thu",
        },
        ticks: {
          beginAtZero: true,
        },
      },
    },
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          borderRadius: "8px",
          boxShadow: 3,
          padding: 2,
          width: "100%",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2 }}>
          Top Selling Products
        </Typography>
        <Typography variant="body1" color="orange" sx={{ marginBottom: 1 }}>
          Nike Trail Running Shoes
        </Typography>
        <Box sx={{ width: "100%", height: "400px" }}>
          <Line data={chartData} options={options} />
        </Box>
      </Box>
    </>
  );
}

export default RevenueByOrders;
