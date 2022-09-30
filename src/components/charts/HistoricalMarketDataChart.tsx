import { Chart } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
} from "chart.js";

type HistoricalMarketDataChartProps = {
  chartData: {
    labels: string[];
    datasets: {
      type: string;
      label: string;
      data: number[];
      backgroundColor: string;
      borderColor: string;
      borderWidth: number;
      yAxisID?: string;
      xAxisID?: string;
    }[];
  };
};

const HistoricalMarketDataChart = (props: HistoricalMarketDataChartProps) => {
  ChartJS.register(LinearScale, CategoryScale, BarElement, PointElement, LineElement, Legend, Tooltip, LineController, BarController);
  console.log(props.chartData.datasets);
  return (
    <div style={{ width: "60%" }}>
      <Chart
        type="bar"
        data={props.chartData as any}
        options={{
          scales: { priceClose: { type: "linear", position: "left" }, volume: { type: "linear", position: "right", display: false } },
        }}
      />
    </div>
  );
};

export default HistoricalMarketDataChart;
