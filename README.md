# INTRODUCTION 

Expense Tracker is a web application for tracking expenses, allowing users to add, edit, and delete expenses based on category and date, as well as view a summary of their expenses.

# TECHNOLOGIES

Frontend: React.JS, HTML, CSS, JavaScript.
Libraries: recharts, react-modal, notistack, react-icons.
Deployment: Vercel.

# KEY CONCEPTS

React Hooks, React State & Props, Lifecycle methods, local storage, Event Handling, Module scoped css, Controlled Components, Forms, Deployment, Vercel.

# DESCRIPTION

User is able to add their wallet balance and expenses. On page load the wallet balance is set to 5000 by default making use of local storage. User is able to see a pie chart depicting percentages of each category of expense. A Barchart is visible to show the frequency of transactions for each category. A section showing transaction history is available. It has a pagination to show three items at a time. User can view, edit and delete transactions from this section. 


# DEVELOPMENT DETAILS

A modular apporach making use of individual reusable components was taken to build the project. React hooks such as useState, useEffect and custom hooks were implemented. Browser Local storage was used to persist data. Module scoped css was used to style each component. Recharts, react-modal, react-icons and notistack were the third party libraries used.

Components include - 

Card (used to render Wallet Balance and Expenses)
Forms - AddExpense, AddBalance
Modal
NoTransactionsCard
PieChart
BarChart
RecentTransactions
TransactionItem
Buttons
Pagination  
Pages - Home Page  





