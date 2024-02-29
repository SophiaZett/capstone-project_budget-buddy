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
  --primary-color: #fffcf4;
  --secondary-color: #5532c8;
  --lightgreen-color: #008657;
  --red-color: #D32F2F;
}
  
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: var(--primary-color);
  }
`;

export const Main = styled.div`
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

export const StyledHeading = styled.h1`
  background-color: var(--primary-color);
  text-align: center;
  width: 100%;
  margin-top: 0;
  margin-bottom: 0;
  padding: 10px;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

// hier bleiben
export const StyledAmoutDisplay = styled.div`
  text-align: center;
  color: var(--secondary-color);
  border-radius: 99rem;
  border: 1px solid var(--secondary-color);
  padding: 8px;
`;

export const AmountDisplayTransactions = styled(StyledAmoutDisplay)`
  margin: 90px 0.5rem 15px 0.5rem;
`;

export const AmountDisplayDashboard = styled(StyledAmoutDisplay)`
  margin: 20px 0.5rem 0 0.5rem;
`;

export const StyledText = styled.p`
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
`;

export const StyledCardContainer = styled.div`
  margin: 90px 0 40px 0;
`;

export const StyledSavingContainer = styled.div`
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  border-radius: 99rem;
  margin: 60px 0.5rem 0.5rem 0.5rem;
  text-align: center;
  padding: 10px 0 10px 0;
`;

export const StyledTotalSavingContainer = styled.div`
  border: 1px solid var(--secondary-color);
  color: var(--secondary-color);
  border-radius: 99rem;
  margin: 1.5rem 0.5rem 0.5rem 0.5rem;
  text-align: center;
  padding: 10px 0 10px 0;
`;

export const FilterFlexBox = styled.div`
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px;
  margin: 10px 0 25px 0;
  font-size: 0.9rem;
  height: 50px;
`;

export const StyledAllButtonsContainer = styled.div`
  text-align: center;
  display: flex;
  justify-content: space-around;
`;

export const ActionButton = styled.button`
  font-size: 1rem;
  background-color: var(--secondary-color);
  color: var(--primary-color);
  border-radius: 99rem;
  padding: 0.75rem 1.5rem;
  border: 0.5px solid;
`;
export const ActionButtonGoalsPage = styled(ActionButton)`
  margin: 30px 0;
`;

export const ActionButtonTransaction = styled(ActionButton)`
  margin: 15px 0;
`;

export const ActionButtonDashboard = styled(ActionButton)`
  margin: 90px 0 20px 0;
`;

export const DashboardButtonExpense = styled(ActionButtonDashboard)`
  border: 1px solid var(--red-color);
  background-color: ${(props) =>
    props.$active ? "var(--red-color)" : "var(--primary-color)"};
  color: ${(props) => (props.$active ? "var(--primary-color)" : "black")};
`;

export const DashboardButtonIcome = styled(ActionButtonDashboard)`
  border: 1px solid var(--lightgreen-color);
  background-color: ${(props) =>
    props.$active ? "var(--lightgreen-color)" : "var(--primary-color)"};
  color: ${(props) => (props.$active ? "var(--primary-color)" : "black")};
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 5px;
  right: 10px;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
`;

export const DeleteIcon = styled.span`
  &:before {
    content: "delete";
    font-family: "Material Symbols Outlined";
    font-weight: 200px;
    font-size: 24px;
    display: inline-block;
    vertical-align: middle;
    -webkit-font-smoothing: antialiased;
    color: black;
    cursor: pointer;
  }
`;
