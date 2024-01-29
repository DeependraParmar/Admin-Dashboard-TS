import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ChartData,
    ChartOptions,
    ArcElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend
);


const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

interface BarChartProps {
    horizontal?: boolean,
    data1: number[],
    data2: number[],
    title1: string,
    title2: string,
    bgColor1: string,
    bgColor2: string,
    labels?: string[],
}


export const BarChart = ({ horizontal=false, data1=[], data2=[], title1, title2, bgColor1, bgColor2, labels=months }: BarChartProps) => {

    const options:ChartOptions<"bar"> = {
        responsive: true,
        indexAxis: horizontal ? 'y' : 'x',
        plugins: {
            legend: {
                display: true,
            }
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: {
                    display: false,
                },
            },
            x: {
                beginAtZero: true,
                grid: {
                    display: false,
                }
            }
        }
    };


    const data:ChartData<"bar",number[], string> = {
        labels,
        datasets: [
            {
                label: title1,
                data: data1,
                backgroundColor: bgColor1,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.5,
            },
            {
                label: title2,
                data: data2,
                backgroundColor: bgColor2,
                barThickness: "flex",
                barPercentage: 1,
                categoryPercentage: 0.5
            },
        ],
    };


    return <Bar options={options} data={data} />;
}



interface DoughnutChartProps {
    data: number[],
    labels: string[],
    bgColor: string[],
    cutout?: number | string,
    offset?: number[],
    legends?: boolean,
}
export const DoughnutChart = ({data, labels, bgColor, cutout, offset, legends=true}: DoughnutChartProps) => {
    const chartData:ChartData<"doughnut",number[], string> = {
        labels,
        datasets: [{
            data,
            backgroundColor: bgColor,
            offset,
            borderWidth: 1,
        }]
    }
    const options: ChartOptions<"doughnut"> = {
        responsive: true,
        cutout,
        plugins: {
            legend: {
                display: legends,
                position: 'bottom',
                labels: {
                    padding: 40,
                }
            }
        },
    }

    return <Doughnut data={chartData} options={options} />;
}