
/////////////////////////////////// NAV /////////////////////////////////////


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
};


/////////////////////////////////// TEAM /////////////////////////////////////


// var invoiceOutcomes = [
//     "",
//     "<i class='fas fa-check'></i> ONLY PM INVOICED",
//     "<i class='fas fa-check'></i> INDIVIDUAL INVOICES"
// ]

// var combined = [
//     "",
//     "<i class='fas fa-check'></i> ALL BENEFITS IN ALL PLANS ARE POOLED",
//     "<i class='fas fa-check'></i>"
// ]

// var individualMember = [
//     "",
//     "<i class='fas fa-check'></i> PM BENEFITS SHARED",
//     "<i class='fas fa-check'></i> PM + OWN BENEFITS"
// ]

// var individualContact = [
//     "",
//     "NO PLAN TO RELEASE BENEFITS",
//     "<i class='fas fa-check'></i> OWN BENEFITS"
// ]

// var alerts = [
//     "<i class='fas fa-exclamation-triangle'></i> Please Note: Having 'Combine credits' disabled means only benefits give to the paying member will be shared with the team.",
// ]

var invoiceOutcomes = [
    "",
    "<i class='fas fa-check'></i> ONLY PM INVOICED",
    "<i class='fas fa-check'></i> INDIVIDUAL INVOICES"
]
var combineOutcomes = [
    "",
    "NO SHARING",
    "<i class='fas fa-check'></i> ALL BENEFITS IN ALL PLANS ARE POOLED",
    "<i class='fas fa-check'></i> PM BENEFITS SHARED",
    "NO PLAN TO RELEASE BENEFITS"

]
var benefitOutcomes = [
    "",
    "<i class='fas fa-check'></i> OWN BENEFITS",
    "<i class='fas fa-check'></i> PM + OWN BENEFITS",
    "<i class='fas fa-check'></i>",
    "NOTHING TO SHARE"
]
var alerts = [
    "<i class='fas fa-exclamation-triangle'></i> Please Note: Having 'Combine credits' disabled means only benefits give to the paying member will be shared with the team.",
]


function alert() {
    var payingMember = document.getElementById("paying-member");

    var combineCredit = document.getElementById("combine-credit");
    var alertBox = document.getElementById("alert");
    if (combineCredit.checked === false && payingMember.value !== "") {
        alertBox.classList.remove("disabled")
        alertBox.innerHTML = alerts[0];
    } else {
        alertBox.classList.add("disabled")
    }
};

// document.querySelectorAll("merge-invoice").addEventListener("change", teamBilling());

function teamBilling() {
    var mergeInvoice = document.getElementById("merge-invoice");
    var payingMember = document.getElementById("paying-member");

    if (payingMember.value !== "") {
        if (mergeInvoice.checked === true) {
            document.getElementById("everyone").getElementsByTagName("li")[0].innerHTML = invoiceOutcomes[1];
            document.getElementById("individual").getElementsByTagName("li")[0].innerHTML = invoiceOutcomes[0];
        } else {
            document.getElementById("everyone").getElementsByTagName("li")[0].innerHTML = invoiceOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[0].innerHTML = invoiceOutcomes[2];
        }
    }

};


function teamFunction() {
    var payingMember = document.getElementById("paying-member");
    var combineCredit = document.getElementById("combine-credit");

    if (payingMember.value === "member") {
        if (combineCredit.checked === true) {
            document.getElementById("everyone").getElementsByTagName("li")[1].innerHTML = combineOutcomes[2];
            document.getElementById("individual").getElementsByTagName("li")[1].innerHTML = combineOutcomes[0];

        } else if (combineCredit.checked === false) {
            document.getElementById("everyone").getElementsByTagName("li")[1].innerHTML = combineOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[1].innerHTML = combineOutcomes[1];
        }
    } else if (payingMember.value === "contact") {
        if (combineCredit.checked === true) {
            document.getElementById("everyone").getElementsByTagName("li")[1].innerHTML = combineOutcomes[2];
            document.getElementById("individual").getElementsByTagName("li")[1].innerHTML = combineOutcomes[0];

        } else if (combineCredit.checked === false) {
            document.getElementById("everyone").getElementsByTagName("li")[1].innerHTML = combineOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[1].innerHTML = combineOutcomes[0];

        }
    }

};

function accessPass() {
    var payingMember = document.getElementById("paying-member");
    var combineCredit = document.getElementById("combine-credit");
    var accessPass = document.getElementById("access-pass");

    if (payingMember.value === "member") {
        if (combineCredit.checked === true && accessPass.checked === true) {
            document.getElementById("everyone").getElementsByTagName("li")[2].innerHTML = benefitOutcomes[3];
            document.getElementById("individual").getElementsByTagName("li")[2].innerHTML = benefitOutcomes[0];

        } else if (combineCredit.checked === false && accessPass.checked === true) {
            document.getElementById("everyone").getElementsByTagName("li")[2].innerHTML = benefitOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[2].innerHTML = benefitOutcomes[2];
            document.getElementById("individual").getElementsByTagName("li")[1].innerHTML = combineOutcomes[2];

        } else {
            document.getElementById("everyone").getElementsByTagName("li")[2].innerHTML = benefitOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[2].innerHTML = benefitOutcomes[0];

        }
    } else if (payingMember.value === "contact") {
        if (combineCredit.checked === true && accessPass.checked === true) {
            document.getElementById("everyone").getElementsByTagName("li")[2].innerHTML = benefitOutcomes[3];
            document.getElementById("individual").getElementsByTagName("li")[2].innerHTML = benefitOutcomes[0];

        } else if (combineCredit.checked === false && accessPass.checked === true) {
            document.getElementById("everyone").getElementsByTagName("li")[2].innerHTML = benefitOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[2].innerHTML = benefitOutcomes[4];
            document.getElementById("individual").getElementsByTagName("li")[1].innerHTML = combineOutcomes[4];;

        } else {
            document.getElementById("everyone").getElementsByTagName("li")[2].innerHTML = benefitOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[2].innerHTML = benefitOutcomes[0];

        }
    }
};

function timeCredit() {
    var payingMember = document.getElementById("paying-member");
    var combineCredit = document.getElementById("combine-credit");
    var timeCredit = document.getElementById("time-credit");

    if (payingMember.value === "member") {
        if (timeCredit.checked === true && combineCredit.checked === true) {
            document.getElementById("everyone").getElementsByTagName("li")[3].innerHTML = benefitOutcomes[3];
            document.getElementById("individual").getElementsByTagName("li")[3].innerHTML = benefitOutcomes[0];

        } else if (combineCredit.checked === false && timeCredit.checked === true ) {
            document.getElementById("everyone").getElementsByTagName("li")[3].innerHTML = benefitOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[3].innerHTML = benefitOutcomes[2];
            document.getElementById("individual").getElementsByTagName("li")[1].innerHTML = combineOutcomes[3];

        } else {
            document.getElementById("everyone").getElementsByTagName("li")[3].innerHTML = benefitOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[3].innerHTML = benefitOutcomes[0];

        }
    } else if (payingMember.value === "contact") {
        if (timeCredit.checked === true && combineCredit.checked === true) {
            document.getElementById("everyone").getElementsByTagName("li")[3].innerHTML = benefitOutcomes[3];
            document.getElementById("individual").getElementsByTagName("li")[3].innerHTML = benefitOutcomes[0];

        } else if (timeCredit.checked === true && combineCredit.checked === false) {
            document.getElementById("everyone").getElementsByTagName("li")[3].innerHTML = "";
            document.getElementById("individual").getElementsByTagName("li")[3].innerHTML = benefitOutcomes[4];
            document.getElementById("individual").getElementsByTagName("li")[1].innerHTML = combineOutcomes[4];


        } else {
            document.getElementById("everyone").getElementsByTagName("li")[3].innerHTML = benefitOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[3].innerHTML = benefitOutcomes[0];

        }
    }
};

function monetaryCredit() {
    var payingMember = document.getElementById("paying-member");
    var combineCredit = document.getElementById("combine-credit");
    var monetaryCredit = document.getElementById("monetary-credit");

    if (payingMember.value === "member") {
        if (monetaryCredit.checked === true && combineCredit.checked === true) {
            document.getElementById("everyone").getElementsByTagName("li")[4].innerHTML = benefitOutcomes[3];
            document.getElementById("individual").getElementsByTagName("li")[4].innerHTML = benefitOutcomes[0];

        } else if (monetaryCredit.checked === true && combineCredit.checked === false) {
            document.getElementById("everyone").getElementsByTagName("li")[4].innerHTML = benefitOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[4].innerHTML = benefitOutcomes[2];
            document.getElementById("individual").getElementsByTagName("li")[1].innerHTML = combineOutcomes[3]

        } else {
            document.getElementById("everyone").getElementsByTagName("li")[4].innerHTML = benefitOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[4].innerHTML = benefitOutcomes[0];

        }
    } else if (payingMember.value === "contact") {
        if (monetaryCredit.checked === true && combineCredit.checked === true) {
            document.getElementById("everyone").getElementsByTagName("li")[4].innerHTML = benefitOutcomes[3];
            document.getElementById("individual").getElementsByTagName("li")[4].innerHTML = benefitOutcomes[0];

        } else if (monetaryCredit.checked === true && combineCredit.checked === false) {
            document.getElementById("everyone").getElementsByTagName("li")[4].innerHTML = "";
            document.getElementById("individual").getElementsByTagName("li")[4].innerHTML = benefitOutcomes[4];
            document.getElementById("individual").getElementsByTagName("li")[1].innerHTML = combineOutcomes[4];

        } else {
            document.getElementById("everyone").getElementsByTagName("li")[4].innerHTML = benefitOutcomes[0];
            document.getElementById("individual").getElementsByTagName("li")[4].innerHTML = benefitOutcomes[0];

        }
    }
};


function allTogether() {
    teamFunction();
    accessPass();
    timeCredit();
    monetaryCredit();
    teamBilling();
    alert()
};

function caseClick() {
    var input = document.querySelectorAll('input'),
        i;

    document.querySelector("#paying-member option[value='member']").setAttribute('selected', true);
    for (i = 0; i < input.length; ++i) {
        document.querySelectorAll("input")[i].checked = true;
    }

    allTogether()
    scrollWin()
}

function caseClickTwo() {

    document.querySelector("#paying-member option[value='member']").setAttribute('selected', true);

    document.querySelector("#merge-invoice").checked = true;
    document.querySelector("#combine-credit").checked = false;
    document.querySelector("#access-pass").checked = true;
    document.querySelector("#time-credit").checked = true;
    document.querySelector("#monetary-credit").checked = true;
    allTogether()
    scrollWin()
}

function caseClickThree() {

    document.querySelector("#paying-member option[value='member']").setAttribute('selected', true);

    document.querySelector("#merge-invoice").checked = false;
    document.querySelector("#combine-credit").checked = true;
    document.querySelector("#access-pass").checked = true;
    document.querySelector("#time-credit").checked = true;
    document.querySelector("#monetary-credit").checked = true;
    allTogether()
    scrollWin()
}

/////////////////////////////////// TAX/////////////////////////////////////

function caseClickTax() {

    document.querySelector("#plan-price").value = "250"
    document.querySelector("#tax-rate").value = "21"
    document.querySelector("#invoice-tax").checked = true;
    document.querySelector("#back-end").checked = true;
    document.querySelector("#display-tax").checked = true;
    document.querySelector("#specific-tax").checked = false;
    document.querySelector("#specific-tax-rate").value = null;
    document.getElementById("unique-tax").style.display = "none"

    billingFunction()
    scrollWin()

};

function scrollWin() {
    window.scrollBy({
        top: 2000,
        left: 0,
        behavior: 'smooth'
    });
};

function caseClickTwoTax() {

    document.querySelector("#plan-price").value = "250"
    document.querySelector("#tax-rate").value = "21"

    document.querySelector("#invoice-tax").checked = true;
    document.querySelector("#back-end").checked = false;
    document.querySelector("#display-tax").checked = true;
    document.querySelector("#specific-tax").checked = false;
    document.querySelector("#specific-tax-rate").value = null;

    document.getElementById("unique-tax").style.display = "none"

    scrollWin()
    billingFunction()
}

function caseClickThreeTax() {

    document.querySelector("#plan-price").value = "250"
    document.querySelector("#tax-rate").value = "21"
    document.querySelector("#specific-tax-rate").value = "10"

    document.querySelector("#invoice-tax").checked = true;
    document.querySelector("#back-end").checked = false;
    document.querySelector("#display-tax").checked = true;
    document.querySelector("#specific-tax").checked = true;


    scrollWin()
    billingFunction()
    specificTax()
}

function billingFunction() {

    var originalPrice = document.getElementById("plan-price");
    var taxRate = document.getElementById("tax-rate");
    var specificTaxRate = document.getElementById("specific-tax-rate")
    var invoiceTax = document.getElementById("invoice-tax");
    var backEnd = document.getElementById("back-end");
    var displayTax = document.getElementById("display-tax");
    var specificTaxCheckbox = document.getElementById("specific-tax")

    if (taxRate.value > 0 && specificTaxCheckbox.checked === false) {

        if (invoiceTax.checked === true && backEnd.checked === false && displayTax.checked === false) {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value * 1 + originalPrice.value * (taxRate.value / 100)).toFixed(2);
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2);
            taxAlert()


        } else if (invoiceTax.checked === true && backEnd.checked === true && displayTax.checked === false) {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2);
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value - (originalPrice.value * (taxRate.value / 100))).toFixed(2);
            taxAlert()


        } else if (invoiceTax.checked === true && backEnd.checked === false && displayTax.checked === true) {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value * 1 + originalPrice.value * (taxRate.value / 100)).toFixed(2);
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value * 1 + originalPrice.value * (taxRate.value / 100)).toFixed(2);
            taxAlert()



        } else if (invoiceTax.checked === false && backEnd.checked === true && displayTax.checked === false) {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2) + " NO TAX";
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value - (originalPrice.value * (taxRate.value / 100))).toFixed(2);
            taxAlert()


        } else if (invoiceTax.checked === false && backEnd.checked === true && displayTax.checked === true) {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2) + " NO TAX";
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2);
            taxAlert()

        } else if (invoiceTax.checked === false && backEnd.checked === false && displayTax.checked === true) {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2) + " NO TAX";
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2);
            taxAlert()

        } else {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2);
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2);
            taxAlert()
        }
    } else if (specificTaxCheckbox.checked === true) {

        if (invoiceTax.checked === true && backEnd.checked === false && displayTax.checked === false) {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value * 1 + originalPrice.value * (specificTaxRate.value / 100)).toFixed(2);
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2);
            taxAlert()


        } else if (invoiceTax.checked === true && backEnd.checked === true && displayTax.checked === false) {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2);
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value - (originalPrice.value * (specificTaxRate.value / 100))).toFixed(2);
            taxAlert()


        } else if (invoiceTax.checked === true && backEnd.checked === false && displayTax.checked === true) {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value * 1 + originalPrice.value * (specificTaxRate.value / 100)).toFixed(2);
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value * 1 + originalPrice.value * (specificTaxRate.value / 100)).toFixed(2);
            taxAlert()



        } else if (invoiceTax.checked === false && backEnd.checked === true && displayTax.checked === false) {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2) + " NO TAX";
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value - (originalPrice.value * (specificTaxRate.value / 100))).toFixed(2);
            taxAlert()


        } else if (invoiceTax.checked === false && backEnd.checked === true && displayTax.checked === true) {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2) + " NO TAX";
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2);
            taxAlert()

        } else if (invoiceTax.checked === false && backEnd.checked === false && displayTax.checked === true) {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2) + " NO TAX";
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2);
            taxAlert()

        } else {
            document.getElementById("invoice-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2);
            document.getElementById("website-output").innerHTML = "$" + Number(originalPrice.value).toFixed(2);
            taxAlert()
        }
    }
}

function taxAlert() {
    var invoiceTax = document.getElementById("invoice-tax");

    if (invoiceTax.checked === false) {
        document.getElementById("alert").style.display = "block"
        document.getElementById("alert").innerHTML = "<i class='fas fa-exclamation-triangle'></i> Please Note: Having 'Add Tax to Invoice' disabled means sales will not be taxed.";
    } else {
        document.getElementById("alert").style.display = "none"
    }
}

function specificTax() {
    var specificTax = document.getElementById("specific-tax");

    if (specificTax.checked === true) {
        document.getElementById("unique-tax").style.display = "flex"
    } else {
        document.getElementById("unique-tax").style.display = "none"
    }
}


///////////////////////////////////////////// CONTRACT ///////////////////////////////////////////////////////

function fixRate() {
    var fixPrice = document.getElementById("fix-price");

    if (fixPrice.checked === true) {
        document.getElementById("price").style.display = "flex"
    } else {
        document.getElementById("price").style.display = "none"
    }
}

function cancellation() {
    var cancelDate = document.getElementById("cancel-date");

    if (cancelDate.checked === true) {
        document.getElementById("cancel").style.display = "flex"
    } else {
        document.getElementById("cancel").style.display = "none"
    }
}

function contractOutcome () {
  var memberName = document.querySelector("#customer").value;
  var planName = document.querySelector("#plan").value;
  var startDate = document.querySelector('#start-date').value;
  var billingDay = document.querySelector("#billing-day").value;
  var nextInvoice = document.querySelector("#next-invoice").value;
  var invoicePeriod = document.querySelector("#invoice-period").value;


    document.getElementById("modal-content").innerHTML = 
    "<h2> Contract Summary </h2>" + 
    "<p> " + memberName + " will start on the " + startDate + " for " + planName + " the next invoice will be on the " + nextInvoice + " for the period starting on the " + invoicePeriod + " going forward all invoices will be raise on the " + billingDay + " of every month.</p>";
};
