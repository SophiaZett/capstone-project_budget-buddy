import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useState } from "react";
import { categories } from "@/utils/transactionCategories";
import {
  AmountDisplayDashboard,
  DashboardButtonExpense,
  DashboardButtonIcome,
  StyledAllButtonsContainer,
} from "@/styles";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutComponent({ transactions }) {
  const [type, setType] = useState("Expense");
  const options = {
    responsive: "true",
    cutoutPercentage: 100,
    radius: "85%",
    plugins: {
      legend: {
        display: false,
      },
    },
    animation: {
      animateScale: false,
      animateRotate: true,
      duration: 1500,
      easing: "easeInSine",
    },
  };

  function handleTypeOnClick(transactionType) {
    setType(transactionType);
  }

  function sumByCategoryFunction(categories) {
    return categories.map(function (category) {
      return transactions
        .filter(function (transaction) {
          return (
            transaction.type === type &&
            transaction.internalGoalAllocation !== "yes" &&
            transaction.category === category
          );
        })
        .reduce(function (sum, transaction) {
          return sum + transaction.amount;
        }, 0);
    });
  }

  function calculateBalance(transactions) {
    const income = transactions
      .filter(
        (transaction) =>
          transaction.type === "Income" &&
          transaction.internalGoalAllocation !== "yes"
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    const expense = transactions
      .filter(
        (transaction) =>
          transaction.type === "Expense" &&
          transaction.internalGoalAllocation !== "yes"
      )
      .reduce((sum, transaction) => sum + transaction.amount, 0);

    return income - expense;
  }

  const sumByCategory = sumByCategoryFunction(categories);

  const data = {
    labels: categories,
    datasets: [
      {
        label: "€",
        data: sumByCategory,
        backgroundColor: [
          "#6B4EDA",
          "#765CE3",
          "#817AEC",
          "#8C98F5",
          "#97B6FE",
          "#A2D4FF",
          "#ADE2FF",
          "#B8F0FF",
        ],
        hoverOffset: 50,
      },
    ],
  };

  return (
    <>
      <StyledAllButtonsContainer>
        <DashboardButtonExpense
          $active={type === "Expense"}
          onClick={() => handleTypeOnClick("Expense")}
        >
          Expenses
        </DashboardButtonExpense>
        <DashboardButtonIcome
          $active={type === "Income"}
          onClick={() => handleTypeOnClick("Income")}
        >
          Income
        </DashboardButtonIcome>
      </StyledAllButtonsContainer>
      <Doughnut data={data} options={options} />
      <AmountDisplayDashboard>
        Account Balance: {calculateBalance(transactions)} EUR
      </AmountDisplayDashboard>
    </>
  );
}
