import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const CoverLoader = styled.div`
padding:1em;
box-sizing: border-box;
margin-block: 5em;
margin-inline:auto;
border: 0.2em solid white;
border-bottom-color: transparent;
border-radius: 5rem;
animation: ${rotate} 1s infinite linear;
height: 0;
width: 0;
`
export default CoverLoader;
