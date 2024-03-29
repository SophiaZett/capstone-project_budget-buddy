import { StyledText } from "@/styles";
import {
  TransactionsList,
  TransactionCard,
  TransactionDetails,
  Flexbox,
  Description,
  ChipIncomeExpense,
  ChipCategory,
} from "./List.Styled";
import { DeleteButton, DeleteIcon } from "@/styles";

export default function List({ transactions, onDeleteTransaction }) {
  return (
    <>
      {transactions.length > 0 ? (
        <TransactionsList>
          {transactions.map(
            ({ _id, date, amount, category, type, description }) => (
              <TransactionCard key={_id}>
                <TransactionDetails>
                  <Flexbox $justifyContent="between">
                    <em>{date}</em>
                    <strong>{amount} EUR</strong>
                  </Flexbox>
                  <Flexbox $justifyContent="evenly">
                    <ChipIncomeExpense $variant={type}>
                      {type}
                    </ChipIncomeExpense>
                    <ChipCategory>{category}</ChipCategory>
                  </Flexbox>
                  <Description>{description}</Description>
                </TransactionDetails>
                <DeleteButton onClick={() => onDeleteTransaction(_id)}>
                  <DeleteIcon />
                </DeleteButton>
              </TransactionCard>
            )
          )}
        </TransactionsList>
      ) : (
        <StyledText>{`No Transactions found`}</StyledText>
      )}
    </>
  );
}
