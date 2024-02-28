import { createGlobalStyle } from "styled-components";
import styled from "styled-components";
export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
   font-family: 'Montserrat', sans-serif;
  };

:root {
  --primary-color: ;
  --secondary-color:
}
  
  body {
    margin: 100px 0;
    font-family: 'Montserrat', sans-serif;
    background-color: var(--primary-color);
  }
`;

export const Main = styled.div`
  max-width: 600px;
  margin: auto;
`;

export const StyledHeading = styled.h1`
  text-align: center;
  width: 100%;
  margin-top: 0;
  padding: 10px;
  position: fixed;
  top: 0;
  background-color: white;
  z-index: 1000;
`;

// hier bleiben
export const StyledAmoutDisplay = styled.div`
  text-align: center;

  border-radius: 7px;
  background-color: ;
  margin: 5% 10%;
  padding: 8px;
`;

export const StyledText = styled.p`
  margin-top: 100px;
  text-align: center;
`;

export const StyledCardContainer = styled.div`
  margin-top: 80px;
`;

export const StyledSavingContainer = styled.div`
  border: 1px solid;
  border-radius: 7px;
  margin-right: 0.5rem;
  margin-left: 0.5rem;
  text-align: center;
  padding: 10px 0 10px 0;
`;

export const FilterFlexBox = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 8px;
  margin: 0 0.5rem;
  font-size: 0.9rem;
  height: 50px;
`;

export const StyledAllButtonsContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
  margin: 5% 6%;
`;

export const ActionButton = styled.button`
  font-size: 1rem;
  border-radius: 7px;
  padding: 8px;
  border: 0.5px solid;
`;
