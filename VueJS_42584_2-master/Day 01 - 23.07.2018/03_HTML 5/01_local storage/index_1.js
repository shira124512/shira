
//a way to add to the <body> a function that will be executed when the  "onload" event is raised
onload = () => {

    //if we dont have an item with this key - we will get null
    let prevColor = localStorage.getItem("MyColor");
    prevColor = (prevColor) ? prevColor : "#111111";


    console.log("prevColor", prevColor);

    document.body.style.backgroundColor = prevColor;

    let colorInput = document.getElementById("color");
    if (colorInput)
        colorInput.value = prevColor;
};


function saveColor() {
    let color = document.getElementById("color").value;

    console.log("color", color);

    //localStorageהוספת פריט ל 
    //MyColor המפתח של הפריט הוא
    //color הערך של הפריט הוא התוכן של המשתנה 
    localStorage.setItem("MyColor", color);

    document.body.style.backgroundColor = color;
}



