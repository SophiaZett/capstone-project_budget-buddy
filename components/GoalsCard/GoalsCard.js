import {
  StyledItem,
  StyledList,
  StyledGoalCard,
  StyledDeleteButton,
} from "@/styles";

export default function GoalsCard({
  goals,
  onHandleDeleteGoal,
  onHandleEditGoal,
}) {
  return (
    <StyledList>
      {goals.map(({ id, goalName, savedAmount, goalAmount }) => (
        <StyledItem key={id}>
          <div>
            <StyledGoalCard>{goalName}</StyledGoalCard>
            <StyledGoalCard>
              saved {savedAmount} EUR of {goalAmount} EUR
            </StyledGoalCard>
          </div>
          <StyledDeleteButton onClick={() => onHandleDeleteGoal(id)}>
            ❌
          </StyledDeleteButton>
          <button onClick={() => onHandleEditGoal(id)}>Edit</button>
        </StyledItem>
      ))}
    </StyledList>
  );
}