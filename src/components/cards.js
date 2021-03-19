import React, { useEffect, useState } from "react";
import "./custom.css";
import CountUp from "react-countup";
import { Bar, Line, Doughnut, Pie } from "react-chartjs-2";
import { chartColors } from "./colors";

const Cards = ({ data }) => {
  function formatDate(string) {
    var options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(string).toLocaleDateString([], options);
  }
  const options = {
    legend: {
      display: false,
      position: "right",
    },
    elements: {
      arc: {
        borderWidth: 0,
      },
    },
  };

  const pieOptions = {
    legend: {
      display: false,
      position: "right",
      legendCallback: function (chart) {
        // Return the HTML string here.
        console.log(chart);
        return [
          <ul>
            <li>z</li>
            <li></li>
            <li>ppp</li>
            <li>adasda</li>
          </ul>,
        ];
      },
    },
  };
  const [piechart, setPie] = useState({
    maintainAspectRatio: false,
    responsive: false,
    labels: ["Confirmed", "Recovered", "Deaths"],
    datasets: [
      {
        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
        backgroundColor: chartColors,
        hoverBackgroundColor: chartColors,
      },
    ],
  });
  const [chartt, setChart] = useState({
    labels: ["Confirmed", "Recovered", "Deaths"],
    datasets: [
      {
        label: "No. of people",
        backgroundColor: "rgba(89, 136, 97,0.7)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [data.confirmed.value, data.recovered.value, data.deaths.value],
      },
    ],
  });
  useEffect(() => {
    setChart({
      labels: ["Confirmed", "Recovered", "Deaths"],
      datasets: [
        {
          label: "No. of people",
          backgroundColor: "rgba(89, 136, 97,0.7)",
          borderColor: "rgba(0,0,0,1)",
          borderWidth: 2,
          data: [data.confirmed.value, data.recovered.value, data.deaths.value],
        },
      ],
    });
    setPie({
      maintainAspectRatio: false,
      responsive: false,
      labels: ["Confirmed", "Recovered", "Deaths"],
      datasets: [
        {
          data: [data.confirmed.value, data.recovered.value, data.deaths.value],
          backgroundColor: chartColors,
          hoverBackgroundColor: chartColors,
        },
      ],
    });
  }, [data]);
  let chartInstance = null;

  return (
    
    <div className="container">
      <div className=" row padd">
        <div className="containerc card text-center col-md-3">
          <h4 className="headcard">Infected</h4>
          <h3 className="headcard1">
            <CountUp
              start={data.confirmed.value - data.confirmed.value}
              end={data.confirmed.value}
              duration={1}
            ></CountUp>
          </h3>
          <p className="headcard2">Number of active cases from Covid-19,</p>
          <p className="headcard3">{formatDate(data.lastUpdate)} </p>
        </div>
        <div className="col-md-1"></div>
        <div className="containerc card text-center col-md-3">
          <h4 className="headcard">Recovered</h4>
          <h3 className="headcard1">
            <CountUp
              start={data.recovered.value - data.recovered.value}
              end={data.recovered.value}
              duration={1}
            ></CountUp>
          </h3>
          <p className="headcard2">Number of recoveries from Covid-19,</p>
          <p className="headcard3">{formatDate(data.lastUpdate)}</p>
        </div>
        <div className="col-md-1"></div>
        <div className="containerc card text-center col-md-3">
          <h4 className="headcard">Deaths</h4>
          <h3 className="headcard1">
            <CountUp
              start={data.deaths.value - data.deaths.value}
              end={data.deaths.value}
              duration={1}
            ></CountUp>
          </h3>
          <p className="headcard2">Number of deaths caused by Covid-19,</p>
          <p className="headcard3">{formatDate(data.lastUpdate)} </p>
        </div>
      </div>
      <div className="barr">
        
         
            <Line
              data={chartt}
              options={{
                title: {
                  display: true,
                  text: "COVID 19 BREAKDOWN",
                  fontSize: 40,
                },
                legend: {
                  display: true,
                  position: "right",
                },
              }}
            />
        
        
            <Doughnut data={piechart} options={options} />
         
        </div>

        {/* <Pie
            data={data}
            options={pieOptions}
            ref={input => {
              chartInstance = input;
            }}
          /> */}
     
    </div>
  );
};

export default Cards;
