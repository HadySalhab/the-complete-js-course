const UIController = (function() {
  const uiItems = {
    typeInput: document.querySelector(".add__type"),
    descriptionInput: document.querySelector(".add__description"),
    valueInput: document.querySelector(".add__value"),
    addBtn: document.querySelector(".add__btn"),
    expensesList: document.querySelector(".expenses__list"),
    incomeList: document.querySelector(".income__list"),
    budgetValue: document.querySelector(".budget__value"),
    budgetIncomeValue: document.querySelector(".budget__income--value"),
    budgetExpensesValue: document.querySelector(".budget__expenses--value"),
    budgetExpensesPercentage: document.querySelector(
      ".budget__expenses--percentage"
    ),
    container: document.querySelector(".container"),
    dateTitle: document.querySelector(".budget__title--month")
  };

  const formatValue = function(value) {
    let val = value;
    val = val.toFixed(2);
    val = val.toString();
    let num = val.split(".");
    let int = num[0];
    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + "," + int.substr(int.length - 3, 3); //input 23510, output 23,510
    }
    dec = num[1];
    val = `${int}.${dec}`;

    return val;
  };

  return {
    getUIItems: function() {
      return uiItems;
    },
    addNewItem: function(newItem, type) {
      let innerHtml = ``;

      let val = formatValue(newItem.value);

      if (type === "exp") {
        innerHtml = `
     <div class="item clearfix" id="expense-${newItem.id}">
     <div class="item__description">${newItem.description}</div>
     <div class="right clearfix">
         <div class="item__value">- ${val}</div>
         <div class="item__percentage"></div>
         <div class="item__delete">
             <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button>
         </div>
     </div>
 </div>
     `;
        uiItems.expensesList.insertAdjacentHTML("beforeend", innerHtml);
      } else {
        innerHtml = `
        <div class="item clearfix" id="income-${newItem.id}">
        <div class="item__description">${newItem.description}</div>
        <div class="right clearfix">
            <div class="item__value">+ ${val}</div>
            <div class="item__delete">
                <button class="item__delete--btn">
                    <i class="ion-ios-close-outline"></i>
                </button>
            </div>
        </div>
    </div>
        `;
        uiItems.incomeList.insertAdjacentHTML("beforeend", innerHtml);
      }
    },
    updateDate: function(date) {
      uiItems.dateTitle.textContent = date;
    },
    updateBudgetSummary: function(newBudgetSummary) {
      uiItems.budgetValue.textContent = formatValue(newBudgetSummary.budget);
      uiItems.budgetIncomeValue.textContent = `+ ${formatValue(
        newBudgetSummary.totalIncome
      )}`;

      uiItems.budgetExpensesValue.textContent = `- ${formatValue(
        newBudgetSummary.totalExpenses
      )}`;

      if (newBudgetSummary.percentage === -1) {
        uiItems.budgetExpensesPercentage.textContent = "---";
      } else {
        uiItems.budgetExpensesPercentage.textContent =
          Math.round(newBudgetSummary.percentage) + "%";
      }
    },
    updatePercentagesSummary: function(percentageArr) {
      Array.from(document.querySelectorAll(".item__percentage")).forEach(
        (divPercentage, index) => {
          let percentage = percentageArr[index];
          if (percentage !== "---") {
            percentage = Math.round(percentage);
            divPercentage.textContent = percentage + "%";
          } else {
            divPercentage.textContent = percentage;
          }
        }
      );
    },
    clearFields: function() {
      uiItems.descriptionInput.value = "";
      uiItems.valueInput.value = "";
      uiItems.descriptionInput.focus();
    },
    deleteItem: function(target) {
      target.remove();
    }
  };
})();

const ItemController = (function() {
  const Income = function(id, description, value) {
    (this.id = id), (this.description = description), (this.value = value);
  };
  const Expenses = function(id, description, value) {
    (this.id = id), (this.description = description), (this.value = value);
  };
  Expenses.prototype.percentage = function(totalIncome) {
    if (totalIncome !== 0) {
      return (this.value / totalIncome) * 100;
    } else {
      return 100;
    }
  };
  const dataStructure = {
    allItems: {
      inc: [],
      exp: []
    },
    total: {
      inc: 0,
      exp: 0
    },
    budget: 0,
    percentage: -1
  };

  return {
    addItemToDataStructure(item) {
      let newItem = null;
      let id = 0;
      const description = item.description;
      const value = item.value;
      if (item.type === "inc") {
        if (dataStructure.allItems.inc.length !== 0) {
          id =
            dataStructure.allItems.inc[dataStructure.allItems.inc.length - 1]
              .id + 1;
        }
        newItem = new Income(id, description, value);
        dataStructure.allItems.inc.push(newItem);
      } else {
        if (dataStructure.allItems.exp.length !== 0) {
          id =
            dataStructure.allItems.exp[dataStructure.allItems.exp.length - 1]
              .id + 1;
        }
        newItem = new Expenses(id, description, value);
        dataStructure.allItems.exp.push(newItem);
      }

      return newItem;
    },
    updateTotalBudgetAndPercentage(type) {
      let sum = 0;
      let value = [];
      if (type === "exp") {
        const expensesArr = dataStructure.allItems.exp;
        value = expensesArr.map(expense => {
          return expense.value;
        });
        value.forEach(value => {
          sum += value;
        });
        dataStructure.total.exp = sum;
      } else {
        const incomesArr = dataStructure.allItems.inc;
        value = incomesArr.map(income => {
          return income.value;
        });
        value.forEach(value => {
          sum += value;
        });
        dataStructure.total.inc = sum;
      }
      dataStructure.budget = dataStructure.total.inc - dataStructure.total.exp;
      if (dataStructure.total.inc !== 0) {
        dataStructure.percentage =
          (dataStructure.total.exp / dataStructure.total.inc) * 100;
      }
      return {
        totalIncome: dataStructure.total.inc,
        totalExpenses: dataStructure.total.exp,
        budget: dataStructure.budget,
        percentage: dataStructure.percentage
      };
    },
    getUpdatedPercentages: function() {
      let percentageArr = [];
      const expensesArr = dataStructure.allItems.exp;
      const totalIncome = dataStructure.total.inc;

      if (totalIncome <= 0) {
        expensesArr.forEach(exp => {
          percentageArr.push("---");
        });
      } else {
        percentageArr = expensesArr.map(expense => {
          return (expense.value / totalIncome) * 100;
        });
      }
      return percentageArr;
    },
    deleteItem: function(id, type) {
      if (type === "inc") {
        dataStructure.allItems.inc.forEach((item, index) => {
          if (item.id === parseInt(id)) {
            dataStructure.allItems.inc.splice(index, 1);
          }
        });
      } else {
        dataStructure.allItems.exp.forEach((item, index) => {
          if (item.id === parseInt(id)) {
            dataStructure.allItems.exp.splice(index, 1);
          }
        });
      }
    }
  };
})();

const App = (function(ItemController, UIController) {
  const uiItems = UIController.getUIItems();
  const setUpDate = function() {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December"
    ];
    const date =
      months[new Date().getMonth()] + ", " + new Date().getFullYear();
    UIController.updateDate(date);
  };
  function registerListener() {
    uiItems.addBtn.addEventListener("click", e => {
      const type = uiItems.typeInput.value;
      const description = uiItems.descriptionInput.value;
      let value = uiItems.valueInput.value;
      value = parseFloat(value);

      if (description === "" || value === "") {
        return;
      } else {
        const newItem = ItemController.addItemToDataStructure({
          type,
          description,
          value
        });
        const newBudgetSummary = ItemController.updateTotalBudgetAndPercentage(
          type
        );
        UIController.addNewItem(newItem, type);
        const percentageArr = ItemController.getUpdatedPercentages();
        UIController.updateBudgetSummary(newBudgetSummary);
        UIController.updatePercentagesSummary(percentageArr);

        UIController.clearFields();
      }

      e.preventDefault();
    });
    uiItems.typeInput.addEventListener("change", e => {
      uiItems.typeInput.classList.toggle("red-focus");
      uiItems.descriptionInput.classList.toggle("red-focus");
      uiItems.valueInput.classList.toggle("red-focus");
      uiItems.addBtn.classList.toggle("red");
    });

    uiItems.container.addEventListener("click", e => {
      if (e.target.classList.contains("ion-ios-close-outline")) {
        const typeId =
          e.target.parentElement.parentElement.parentElement.parentElement.id;
        const type = typeId.split("-")[0].substr(0, 3);
        const id = typeId.split("-")[1];
        ItemController.deleteItem(id, type);
        const newBudgetSummary = ItemController.updateTotalBudgetAndPercentage(
          type
        );
        UIController.deleteItem(
          e.target.parentElement.parentElement.parentElement.parentElement
        );
        const percentageArr = ItemController.getUpdatedPercentages();
        UIController.updateBudgetSummary(newBudgetSummary);
        UIController.updatePercentagesSummary(percentageArr);
      }
      e.preventDefault();
    });
  }
  return {
    init: function() {
      registerListener();
      UIController.updateBudgetSummary({
        totalIncome: 0,
        totalExpenses: 0,
        budget: 0,
        percentage: -1
      });
      setUpDate();
    }
  };
})(ItemController, UIController);

App.init();
