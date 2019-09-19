import React, { useState } from 'react'
import Affordable from '../Affordable'
import { Bar } from 'react-chartjs-2';
import HealthyGroupSvg from '../Home'

const HealthyDataSort = (props) => {
    const [charObj, setcharObj] = useState({
        labels: [`fgsgsfgga`,],
        datasets: [
            {
                label: `& Veget`,
                data: [
                    81.9,
                ],
                backgroundColor:[
                    '#356032',
                    '#7bb258'

                                    ]
            }
        ]
    })
    const [group, setGroup] = useState('')
    const newData = [...props.healthData]
    const newData2 = [...props.healthData]
    
    const selectGroup = (e) => {
        e.preventDefault()
        props.grabGroup(group)
        const newobjtest = newData2.filter(entry => entry.group === group).map((e,i) => {
            return (
                {
                    labels: ['baseline', 'update'],
                    datasets: [
                        {
                            label: e.indicator,
                            data: [+(e.baseline.toString().replace(/\%/,'')), +(e.update.toString().replace(/\%/,''))],
                            backgroundColor:[
                                '#356032',
                                '#7bb258'
                            ]
                        }
                    ]
                }
            )
        })
        setcharObj(newobjtest);
        // setcharObj(newData2.filter(
        //     entry => entry.group === group
        // ))
    }

    console.log(props.selectedGroup, 'props.selectedGroup')
    const groupsOfCitizens = newData.filter(
        entry => entry.group === group
    ).map((e,i) => {
        return (
            <div key={`${i}`}>
                <div key={`group ${i}`}> group: {e.group} </div>
                <div key={`indicator ${i}`}> indicator: {e.indicator} </div>
                <div key={`baseline ${i}`}> baseline: {e.baseline} </div>
                <div key={`update ${i}`}> update: {e.update} </div>
                <div key={`source ${i}`}> source: {e.source} </div>
            </div>
        ) 
 
    })
    
    
    
    console.log(charObj, 'char obj')
    const sortGroup = newData.filter(
                entry => entry.group !== undefined).map((e,i) => {
        return(
            <option key={e.group, i} value={e.group}>
                {e.group}
            </option>
        )
    })
    // console.log(group, 'group')
    return (
        <div className="bigGraph">
            <form onSubmit={selectGroup}> 
                <select name='group' onChange={e => setGroup(e.target.value)} > 
                    {sortGroup}
                </select>
                <button  type='submit'>sort by group</button>
            </form>
            {groupsOfCitizens}
            {charObj[0] === undefined ? 
                <Bar data={charObj}
                    width={800}
                    height={400}
                    options={{ responsive:false}}
              />
:
                <Bar data={charObj[0]}
                    width={800}
                    height={400}
                    options={{ responsive:false}}
               />

            }
            
            
            
        </div>

        
    )

}


export default  HealthyDataSort 
