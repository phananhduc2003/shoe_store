import { Box, Typography } from "@mui/material";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useEffect, useState } from "react";
import { ApiTopSellingChart } from "../../../apiServiceAdmin/ApiTopSellingChart";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

function TopSellingProducts() {
  const [Data, setData] = useState([]);

  const dataDate = {
    startDate: "2025-02-01",
    endDate: "2025-02-28",
  };

  useEffect(() => {
    handle();
  }, []);

  const handle = () => {
    ApiTopSellingChart(dataDate.startDate, dataDate.endDate)
      .then((res) => {
        setData(res.data);
        console.log(Data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const chartData = {
    labels: Object.keys(Data), // Các sản phẩm
    datasets: [
      {
        label: "Số lượng bán ra",
        data: Object.values(Data), // Số lượng bán ra của mỗi sản phẩm
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 1,
      },
    ],
  };

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
          text: "Sản phẩm",
        },
      },
      y: {
        title: {
          display: true,
          text: "Số lượng bán",
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
          width: "100%", // Kích thước chiều rộng của Box
          height: "400px", // Kích thước chiều cao của Box
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="h6" fontWeight="bold" sx={{ marginBottom: 2 }}>
          Biểu đồ số lượng bán sản phẩm
        </Typography>
        <Box sx={{ width: "100%", height: "400px" }}>
          <Bar data={chartData} options={options} />
        </Box>
      </Box>
    </>
  );
}

export default TopSellingProducts;
