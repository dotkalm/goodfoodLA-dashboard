import React, { useState } from 'react'
import AffordableGrouped from '../SVG/AffordableGrouped'
import { DivStyle, 
DivContainer } from './style'
import HealthyGrouped from '../SVG/Healthy_grouped'
import FairGrouped from '../SVG/FairGrouped'
import SustainableGrouped from '../SVG/SustainableGrouped'

const Home = (props) => {
    return (
        <div className="homeFlex">
            <span id="homeText">The Food System Dashboard utilizes both quantitative and qualitative data to evaluate progress in achieving a healthier, greener and more equitable food system in Los Angeles. The Los Angeles Food Policy Council produced the Food System Dashboard for organizations, agencies, policymakers and the public to guide our strategy and measure impact in achieving “Good Food for All.”</span>
            <span id="homeTitle"><h2>What Do We Mean By Good Food?</h2></span>
            <DivContainer>
            <DivStyle>
                <HealthyGrouped/>
                <AffordableGrouped/> 
                <SustainableGrouped/> 
                <FairGrouped/>
            </DivStyle>
          </DivContainer>
              <span id="homeTitle"><h2>What is a Good Food System?</h2></span>
              <ul id="list">
                <li> Prioritizes the health and wellbeing of our residents</li>
                <li> Makes healthy, high quality food affordable</li>
                <li> Contributes to a thriving economy where all participants in the food supply chain receive fair compensation and fair treatment</li>
                <li> Protects and strengthens our biodiversity and regenerates natural resources</li>
                <li> Ensures that Good Food is accessible to all</li>
              </ul>
        </div>
    )
}

export default Home;
