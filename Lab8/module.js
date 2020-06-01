var Account = function(){
    
    var myAccounts = [];
    

    return {
        addAccount: function addAccount(account) {
            myAccounts.push(account);
        },
        myAccounts: myAccounts
    }    

}

var mine = Account;

const acc_name = document.getElementById("account-name").value;
const acc_deposit = document.getElementById("account-deposit").value;
const acc_button = document.getElementById("create-button");
const acc_display = document.getElementById("view-accounts").value;

function handleAddition({acc_name, acc_deposit}) {
    console.log("Here we go")
    mine.addAccount({acc_name, acc_deposit})
    acc_display = "";

    for(const element of mine.myAccounts) {
        acc_display = element + "\n"
    }

}

acc_button.addEventListener("onclick", handleAddition({acc_name, acc_deposit}));
