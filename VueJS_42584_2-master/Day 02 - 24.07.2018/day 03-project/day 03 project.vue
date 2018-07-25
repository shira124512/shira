<!DOCTYPE html>
<html lang="en">
<head>
     <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
</head>
<body>
  

   <script>
            let allUsers = localStorage.getItem("all task");
            allUsers = (allUsers) ? JSON.parse(allUsers) : [];
            let userList = "";

            for(let singleUser of allUsers) {
                
                userList += `
                    <li><h2>date: </h2> ${singleUser.dateO}</li>
                    <li><h2>time: </h2> ${singleUser.timeO}</li>
                    <li><h2>task: </h2> ${singleUser.taskO}</li>`;

            }
            document.getElementById("userList1").innerHTML = userList;
       
    
   </script>

</body>
</html>
