import React from 'react';
import {  Doughnut } from 'react-chartjs-2';

export default function Graphs(props) {
    const state = {
        labels: ['Active Cases', 'New Cases', 'New Death Cases',
            'Total Cases', 'Total Recovered Cases', 'Total Death Cases'],
        datasets: [
            {
                label: 'Cases',
                backgroundColor: [
                    '#1F252F',
                    '#353E4F',
                    '#4D5971',
                    '#6D7E9E',
                    '#91A8D3',
                    '#BFD5FE'
                ],
                hoverBackgroundColor: [
                    '#52CFFA',
                    '#35A5EE',
                    '#1E65C6',
                    '#17509C',
                    '#103378',
                    '#0A204C'
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
           
            <Doughnut
            data={state}
            options={{
                title: {
                    display: true,
                    text: `Doughnut Statistic Of Covid-19 Cases in ${props.title}`,
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