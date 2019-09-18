import React, { useState } from 'react'
import AffordableGrouped from '../SVG/AffordableGrouped'
import { DivStyle, 
DivContainer } from './style'
import HealthyGrouped from '../SVG/Healthy_grouped'
import FairGrouped from '../SVG/FairGrouped'
import SustainableGrouped from '../SVG/SustainableGrouped'

const HealthyGroupSvg = (props) => {
    console.log('inside healthy group')
    return (
        <DivContainer>
            <DivStyle>
                <HealthyGrouped/>
                <AffordableGrouped/> 
                <SustainableGrouped/> 
                <FairGrouped/>
            </DivStyle>
        </DivContainer>
    )


}

export default HealthyGroupSvg
