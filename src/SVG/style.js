import styled from 'styled-components'

export const SustainableStyle = styled.div`
    padding: 25px;
    width: 150rem;

    .st0{fill:#52BAAF;}
    .st1{fill:#FED84D;}
    .st2{fill:#F7922D;}
    .st3{fill:#156272;}
    .st4{fill:#336130;}
    .st5{fill:#FCD790;}
    @media (max-width: 414px) {
        padding: 5px;
    }
`;

export const FairStyle = styled.div`
    padding: 25px;
    width: 150rem;
    height: 14.5rem;
    .st0{fill:#FCD243;}
    .st1{fill:#F7922D;}
    .st2{fill:#FED235;}
    .st3{fill:#A97A2B;}
    .st4{fill:#FDFADB;}
    @media (max-width: 414px) {
        padding: 5px;
    }
`;
export const AffordableStyle = styled.div`
    width: 150rem; 
    padding: 25px;
    
    .st0{fill:#156272;}
    .st1{fill:#FDFADB;}
    .st2{fill:#FCD790;}
    .st3{fill:#FFFFFF;}
    .st4{fill:#876F4B;}
    .st5{fill:#FAA829;}

    @media (max-width: 414px) {
        padding: 5px;
    }
`;


export const SVGWindow = styled.div`
    padding: 25px;
    width: 150rem;

       .bread {
        color: #79b353;
        stroke-color: #f7922d;
    }
    .leaf_1:hover {
        animation: leaf 1s infinite 
    }
    .orange:hover {
        animation: orange 1s infinite
    }
    @keyframes orange{
        0% {transform: translate3d(0px, 0px, 0px);}
        100% {transform: translate3d(-4.06px, -4.3px, 0px);}
    }

    @keyframes leaf{
        0% {transform: rotate(0deg);
            transform-origin: center;}
        100% {transform: rotate(5deg);
            transform-origin: center;}
    }

    @media (max-width: 414px) {
        padding: 5px;
    }
`;
