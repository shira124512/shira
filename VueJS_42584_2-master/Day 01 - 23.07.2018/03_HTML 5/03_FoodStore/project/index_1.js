//a way to add to the <body> a function that will be executed when the  "onload" event is raised
function clearOrder() {
    localStorage.clear();
};

function addPizza() {

    //-------------------step 1 - create a new pizza
    let currentPizza ={toppings:[],totalPrice:30};

    let checkBoxArr = document.getElementsByClassName("pizzaTop");
    for(let singleElement of checkBoxArr) {
        if (singleElement.checked) {

            //"push" is a built-in function - that adds a new element in the end of the array 
            //the element will get the value that we passed as a prameter to the "push" function
            currentPizza.toppings.push(singleElement.value);
            currentPizza.totalPrice += 2;
        }
     
    }

    //-------------------step 2 - get all the stored pizzas from local storage
    let prevPizzaList = localStorage.getItem("pizza");
    prevPizzaList = prevPizzaList ? JSON.parse(prevPizzaList) : [];

    //-------------------step 3 - add the new pizza to all the stored pizzas from local storage
    prevPizzaList.push(currentPizza);

    //-------------------step 4 - set new pizza list to the local storage
    localStorage.setItem("pizza", JSON.stringify(prevPizzaList));
}



