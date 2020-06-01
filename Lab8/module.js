(function() {
    "use script"

    const accountCreator = (function() {
        let accountName;
        let amount;

        return {
            createAccount: function (name, amt) {
                accountName = name;
                amount = amt;

                return {name: accountName, balance: amount};
            }
        }
    })();
document.getElementById("create-button").onclick = handleAddition;


    var accountList = [];

    function handleAddition() {
        const acc_name = document.getElementById("account-name").value;
        const acc_deposit = document.getElementById("account-deposit").value;
        const acc_display = document.getElementById("view-accounts").value;
    
    
        const newAccount = accountCreator.createAccount(acc_name, acc_deposit);
        accountList.push(newAccount);
        document.getElementById("view-accounts").value = "";
    
        for(const element of accountList) {
            document.getElementById("view-accounts").value += `Account Name: ${element.name}, Balance: ${element.balance} \n `;
        }
    
    }
})()






