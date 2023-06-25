function sendMoney() {
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
 
    if (enterAmount > myAccountBalance) {
       alert("Insufficient Balance.");
    } else {
       var findUserBankAccount = enterName + "BankBalance";
       var finalAmount = parseInt(document.getElementById(findUserBankAccount).innerHTML) + enterAmount;
       myAccountBalance = parseInt(document.getElementById("myAccountBalance").innerText) - enterAmount;
       document.getElementById("myAccountBalance").innerText = myAccountBalance;
       document.getElementById(findUserBankAccount).innerHTML = finalAmount;
       alert(`Transaction Successful!!\n₹${enterAmount} is sent to ${enterName}@gmail.com.`);
       
       // transaction history 
       var createPTag = document.createElement("li");
       var textNode = document.createTextNode(`₹${enterAmount} is sent to recipient with Email-id ${enterName}@gmail.com on ${new Date().toLocaleString()}`);
       createPTag.appendChild(textNode);
       var element = document.getElementById("transaction-history-body");
       element.insertBefore(createPTag, element.firstChild);
       
       // Append data to the table
       var tableBody = document.querySelector("tbody");
       var newRow = document.createElement("tr");
       newRow.className = "table-light";
       newRow.innerHTML = `
          <td scope="row">${tableBody.children.length + 1}</td>
          <td scope="row">${enterName}</td>
          <td scope="row">${enterName}@gmail.com</td>
          <td><p id="${enterName}BankBalance">${enterAmount}</p></td>
       `;
       tableBody.appendChild(newRow);
    }
 }
 