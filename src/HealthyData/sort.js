import React from 'react'

const HealthyDataSort = (props) => {
    const newData = [...props.healthData]
    console.log(newData, 'newdata')
    
    const selectGroup = () => {}
    const handleChange = () => {}
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
    const sortGroup = newData.filter(
                entry => entry.group !== undefined).map((e,i) => {
        return(
            <option key={e.group, i} value={e.group}>
                {e.group}
            </option>
        )
    })
    
    return (
        <div>
            {asians}
            <form onSubmit={selectGroup}> 
                <select name='group' onChange={handleChange}> 
                    {sortGroup}
                </select>
                <button type='submit'>sort by group</button>
            </form>
        </div>
        
    )

}


export default  HealthyDataSort 
