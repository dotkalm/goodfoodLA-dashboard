import React, { Component } from 'react'
import { Bar } from 'react-chartjs-2';
import { thisExpression } from '@babel/types';


const Test = (props) => {

    const chartData = {
            labels: [props.indicator],
            datasets: [
                {
                    label: "Fruit & Vegetable Accessibility",
                    data: [
                        81.9, 79.7, 80
                    ],
                    backgroundColor:[
                        'rgba(255, 99, 132, 0.8)',
                        'rgba(54, 162, 235, 0.8)'
                    ]
                }
            ]
        }


        console.log(props.data)
        const HealthyDataSort = (props) => {
            const newData = [...props.healthData]
            console.log(newData)
            const labels = []
            const baseline = []
            const update = []
            newData.forEach((e,i) => {
                labels.push(e.indicator);
                baseline.push(e.baseline)
                update.push(e.update)
            })
        }

        return(
            <div>
                {/* <Bar
                    data={}
                    width={800}
                    height={500}
                    options={{maintainAspectRatio: false , responsive:false}}
                /> */}
            </div>
        )
        }


export default Test
