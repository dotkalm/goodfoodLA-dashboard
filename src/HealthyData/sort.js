import React from 'react'

const HealthyDataSort = (props) => {
    const newData = [...props.healthData]
    console.log(newData, 'newdata')
    
    const asians = newData.filter(
        entry => entry.group == 'Asian'
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
    return (
        <div>
            {asians}
        </div>
        
    )

}


export default  HealthyDataSort 
