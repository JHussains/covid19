import React from 'react';
import {  Line } from 'react-chartjs-2';

export default function Graphs(props) {
    const state = {
        labels: ['Active Cases', 'New Cases', 'New Death Cases',
            'Total Cases', 'Total Recovered Cases', 'Total Death Cases'],
        datasets: [
            {
                label: 'Cases',
                backgroundColor: [
                    '#B21F00',
                    '#C9DE00',
                    '#2FDE00',
                    '#00A6B4',
                    '#6800B4',
                    '#DB7093'
                ],
                hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F',
                    '#C71585'
                ],
                data: [
                    props.convertNum(props.data["Active Cases_text"]),
                 props.convertNum(props.data["New Cases_text"]),
                  props.convertNum(props.data["New Deaths_text"]),
                   props.convertNum(props.data["Total Cases_text"]),
                    props.convertNum(props.data["Total Recovered_text"]),
                     props.convertNum(props.data["Total Deaths_text"])]
            }
        ]
    }
    return (
        <center>
        <div className="world-convas">
           
            <Line
            data={state}
            options={{
                title: {
                    display: true,
                    text: `Statistic Line chart Of Covid-19 Cases in ${props.title}`,
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'right',
                }
            }}
        />
        </div>
        </center>
    )
}