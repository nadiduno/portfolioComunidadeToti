import React from 'react';
import ReactApexChart from 'react-apexcharts';
// import styles from './GraphicMath.module.css'

interface GraphicMathProps {}

export const GraphicMath: React.FC<GraphicMathProps> = () => {
  const series = [{
    name: 'Bubble1',
    data: generateRandomData(20) // Gerar dados aleatórios para 20 pontos
  }];

  const options: ApexCharts.ApexOptions = {
    chart: {
      height: 370,
      type: 'bubble',
      toolbar: {
          show: false
        }
    },
    dataLabels: {
      enabled: false
    },
    fill: {
      opacity: 0.5
    },
    xaxis: {
      type: 'category'
    },
    yaxis: {
      max: 70
    },
    grid: {
      show: false 
    },
    stroke: {
      width: 1 
    },
    colors: ['#DD4765'],
    tooltip: {
      shared: false,
      intersect: true,
      y: {
        formatter: (val: number) => {
          return val + " pontos";
        }
      }
    }
  };

  // Função para gerar dados aleatórios para o Bubble Chart
  function generateRandomData(count: number): { x: string, y: number, z: number }[] {
    const data: { x: string, y: number, z: number }[] = [];
    for (let i = 0; i < count; i++) {
      data.push({
        x: String(i),
        y: Math.floor(Math.random() * 60),
        z: Math.floor(Math.random() * 100)
      });
    }
    return data;
  }

  return (
    <div className="bubble-chart">
      {/* <ReactApexChart options={options} series={series} type="bubble" height={350} /> */}
      <ReactApexChart options={options} series={series} type="line" height={350} />
    </div>
  );
}

// https://apexcharts.com/
//Burbulha (bubble)
//Linha (line)
// Barra (bar)
// Área (area)
// Pizza (pie)
// Donut (donut)
// Radar (radar)
// Dispersão (scatter)
// Área de radar (radarArea)
// Gráfico de faixa (rangeBar)
// Histograma (histogram)
// Gráfico de caixa (boxPlot)
// Gráfico de rosca polar (polarArea)
// Mapa de calor (heatmap)
// Gráfico de barras empilhadas (barStacked)
// Gráfico de linhas empilhadas (lineStacked)
// Gráfico de área empilhada (areaStacked)

// interface DataAnalysisChartProps {}

// export const GraphicMath: React.FC<DataAnalysisChartProps> = () => {
//   const series = [{
//     name: 'Sales',
//     data: generateRandomData(12) // Gerar dados aleatórios para 12 meses
//   }];

//   const options = {
//     chart: {
//       type: 'line',
//       height: 350
//     },
//     xaxis: {
//       categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
//     }
//   };

//   // Função para gerar dados aleatórios
//   function generateRandomData(count: number): number[] {
//     const data: number[] = [];
//     for (let i = 0; i < count; i++) {
//       data.push(Math.floor(Math.random() * 1000));
//     }
//     return data;
//   }

//   return (
//     <div className="data-analysis-chart">
//       <ReactApexChart options={options} series={series} type="line" height={350} />
//     </div>
//   );
// };

////////////////
