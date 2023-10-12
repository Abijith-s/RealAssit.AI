import React, { forwardRef } from 'react'
import './burglary.css'
import ReactApexChart from 'react-apexcharts'
import { PDFFooter, PDFHeader } from '../HeaderAndFooter/HeaderAndFooter'

const BurglaryGraph = forwardRef(({ data }, ref) => {
  const chartData = {
    series: [
      {
        name: 'Burglary',
        data: data?.data?.map((entry) => entry.Burglary),
      },
    ],
    options: {
      chart: {
        height: 350,
        type: 'line',
        zoom: {
          enabled: false,
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'straight',
      },
      title: {
        text: 'Burglary',
        align: 'left',
      },
      grid: {
        row: {
          colors: ['#f3f3f3', 'transparent'],
          opacity: 0.5,
        },
      },
      xaxis: {
        categories: data?.data?.map((entry) => entry.data_year),
      },
    },
  }

  return (
    <div className="chart-container" id="chart" ref={ref}>
      <PDFHeader />
      <div className="mt-3 P-2" style={{ paddingTop: '20px' }}>
        <div className="crime-title">
          <i className="fa-solid fa-location-pin location-icon"></i>
          <h2>Crime</h2>
          <div className="blue-bar"></div>
        </div>
        <ReactApexChart
          options={chartData.options}
          series={chartData.series}
          type="line"
          height={350}
        />
      </div>
      <PDFFooter />
    </div>
  )
})

export default BurglaryGraph
