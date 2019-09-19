import styled from 'styled-components'

export const  GraphContainer = styled.div`
    width: 100%;
    .bigGraph{
        width: 80%;
        float: left;
    }
    .buttons{
        background-color: white;
        width: 10%;
        float: left;
        color: blue;
        padding: 10px;
        .foodSourceButtons:hover{
         color: yellow;
    padding: 17px;
        }
        .foodConsumptionButtons:hover{
                padding: 17px;
            color: yellow;
        }
        .obesityButton:hover{
            color: yellow;
                padding: 17px;
        }
        .diabetesButton:hover{
            color: yellow;
                padding: 17px;
        }
    }
          .clearfix::after {
      content: "";
      clear: both;
      display: table;
    } 
`
export const ButtonsStyle = styled.div `
    
`
