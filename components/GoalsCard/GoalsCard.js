import {
  StyledItem,
  StyledList,
  GoalCardName,
  GoalCardAmount,
  StyledEditSavingButton,
  StyledGoalCardContent,
  EditIcon,
} from "./GoalsCard.Styled";
import { DeleteButton, DeleteIcon } from "@/styles";

import ProgressBar from "../ProgressBar/ProgressBar";

export default function GoalsCard({ goals, onHandleDeleteGoal, onEditGoal }) {
  return (
    <StyledList>
      {goals.map(({ id, goalName, savedAmount, goalAmount }) => (
        <StyledItem key={id}>
          <StyledGoalCardContent>
            <GoalCardName>{goalName}</GoalCardName>
            <GoalCardAmount>
              saved {savedAmount} EUR of {goalAmount} EUR
            </GoalCardAmount>
            <ProgressBar savedAmount={savedAmount} goalAmount={goalAmount} />
          </StyledGoalCardContent>
          <div>
            <DeleteButton onClick={() => onHandleDeleteGoal(id)}>
              <DeleteIcon />
            </DeleteButton>
            <StyledEditSavingButton
              onClick={() =>
                onEditGoal({ id, goalName, savedAmount, goalAmount })
              }
            >
              <EditIcon />
            </StyledEditSavingButton>
          </div>
        </StyledItem>
      ))}
    </StyledList>
  );
}
