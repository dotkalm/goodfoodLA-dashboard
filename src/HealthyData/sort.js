import React, { useState } from 'react'
import Affordable from '../Affordable'
import { Bar } from 'react-chartjs-2';

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
                    'rgba(255, 99, 132, 0.8)',
                    'rgba(54, 162, 235, 0.8)'
                ]
            }
        ]
    })
    const [group, setGroup] = useState('')
    const newData = [...props.healthData]
    const newData2 = [...props.healthData]
    console.log(charObj, 'newdata')
    
    const selectGroup = (e) => {
        e.preventDefault()
        props.grabGroup(group)
        console.log(group, 'group<-------')
        const newobjtest = newData2.filter(entry => entry.group === group).map((e,i) => {
            return (
                {
                    labels: ['baseline', 'update'],
                    datasets: [
                        {
                            label: e.indicator,
                            data: [(e.baseline * 10), (e.update*10)],
                            backgroundColor:[
                                'rgba(255, 99, 132, 0.8)',
                                'rgba(54, 162, 235, 0.8)'
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
        <div>
            <form onSubmit={selectGroup}> 
                <select name='group' onChange={e => setGroup(e.target.value)} > 
                    {sortGroup}
                </select>
                <button  type='submit'>sort by group</button>
            </form>
            {groupsOfCitizens}
            {charObj[0] === undefined ? 
                <Bar data={charObj}/>
            :
                <Bar data={charObj[0]}/>
            }
            
            
            <Affordable />
        </div>

        
    )

}


export default  HealthyDataSort 
