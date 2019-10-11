function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function teamAlert() {
    var combineCredit = document.getElementById("combine-credit");

    if (combineCredit.checked === false) {
        document.getElementById("alert").style.display = "block"
        document.getElementById("alert").innerHTML = "Please Note: Having 'Combine credits' disabled means only benefits give to the paying member will be shared with the team.";
    } else {
        document.getElementById("alert").style.display = "none"
    }
}

function teamBilling() {
    var mergeInvoice = document.getElementById("merge-invoice");
    var payingMember = document.getElementById("paying-member");

    if (payingMember.value != null) {
        if (mergeInvoice.checked === true) {
            document.getElementById("everyone-one").innerHTML = "ONLY PM INVOICED" + "<i class='fas fa-file-invoice-dollar'></i>";
            document.getElementById("individual-one").innerHTML = "";
        } else {
            document.getElementById("everyone-one").innerHTML = "";
            document.getElementById("individual-one").innerHTML = "INDIVIDUAL INVOICES" + "<i class='fas fa-file-invoice-dollar'></i>";
        }
    }
};


function allTogether() {
    teamFunction();
    accessPass();
    timeCredit();
    monetaryCredit();
    teamBilling();
    teamAlert()
};

function caseClick() {
    var input = document.querySelectorAll('input'),
        i;

    document.querySelector("#paying-member option[value='member']").setAttribute('selected', true);
    for (i = 0; i < input.length; ++i) {
        document.querySelectorAll("input")[i].checked = true;
    }

    allTogether()
}

function caseClickTwo() {

    document.querySelector("#paying-member option[value='member']").setAttribute('selected', true);

    document.querySelector("#merge-invoice").checked = true;
    document.querySelector("#combine-credit").checked = false;
    document.querySelector("#access-pass").checked = true;
    document.querySelector("#time-credit").checked = true;
    document.querySelector("#monetary-credit").checked = true;
    allTogether()
}

function caseClickThree() {

    document.querySelector("#paying-member option[value='member']").setAttribute('selected', true);

    document.querySelector("#merge-invoice").checked = false;
    document.querySelector("#combine-credit").checked = true;
    document.querySelector("#access-pass").checked = true;
    document.querySelector("#time-credit").checked = true;
    document.querySelector("#monetary-credit").checked = true;
    allTogether()
}

function teamFunction() {
    var payingMember = document.getElementById("paying-member");
    var combineCredit = document.getElementById("combine-credit");
    var accessPass = document.getElementById("access-pass");
    var timeCredit = document.getElementById("time-credit");
    var monetaryCredit = document.getElementById("monetary-credit");

    if (payingMember.value != null && combineCredit.checked === false && accessPass.checked === false && timeCredit.checked === false && monetaryCredit.checked === false) {
        document.getElementById('everyone-two').innerHTML = "";
        document.getElementById('individual-two').innerHTML = "";
        document.getElementById('individual-three').innerHTML = "OWN BENEFITS" + "<i class='fas fa-key'></i>";
        document.getElementById('individual-four').innerHTML = "OWN BENEFITS" + "<i class='fas fa-hourglass-half'></i>";
        document.getElementById('individual-five').innerHTML = "OWN BENEFITS" + "<i class='fas fa-dollar-sign'></i>";

    } else if (payingMember.value === "member") {
        if (combineCredit.checked === true) {
            document.getElementById("everyone-two").innerHTML = "ALL BENEFITS IN ALL PLANS ARE POOLED" + "<i class='fas fa-check'></i>"
            document.getElementById("individual-two").innerHTML = ""

        } else if (combineCredit.checked === false) {
            document.getElementById("everyone-two").innerHTML = ""
            document.getElementById("individual-two").innerHTML = "PM BENEFITS SHARED" + "<i class='fas fa-check'></i>"

        } else {
            document.getElementById('everyone-two').innerHTML = ""
            document.getElementById('individual-two').innerHTML = ""
        }

    } else if (payingMember.value === "contact") {

        if (combineCredit.checked === true) {
            document.getElementById("everyone-two").innerHTML = "ALL BENEFITS IN ALL PLANS ARE POOLED" + "<i class='fas fa-check'></i>"
            document.getElementById("individual-two").innerHTML = ""

        } else {
            document.getElementById('everyone-two').innerHTML = "";
            document.getElementById('individual-two').innerHTML = "";

        }
    }
};

function accessPass() {
    var payingMember = document.getElementById("paying-member");
    var combineCredit = document.getElementById("combine-credit");
    var accessPass = document.getElementById("access-pass");

    if (payingMember.value === "member") {
        if (combineCredit.checked === true && accessPass.checked === true) {
            document.getElementById('everyone-three').innerHTML = "<i class='fas fa-key'></i>";
            document.getElementById('individual-three').innerHTML = "";

        } else if (combineCredit.checked === false && accessPass.checked === true) {
            document.getElementById('everyone-three').innerHTML = "";
            document.getElementById('individual-three').innerHTML = "PM + OWN BENEFITS" + "<i class='fas fa-key'></i>";
            document.getElementById("individual-two").innerHTML = "PM BENEFITS SHARED" + "<i class='fas fa-check'></i>"

        } else {
            document.getElementById('everyone-three').innerHTML = "";
            document.getElementById('individual-three').innerHTML = "";

        }
    } else if (payingMember.value === "contact") {
        if (combineCredit.checked === true && accessPass.checked === true) {
            document.getElementById('everyone-three').innerHTML = "<i class='fas fa-key'></i>";
            document.getElementById('individual-three').innerHTML = "";

        } else if (combineCredit.checked === false && accessPass.checked === true) {
            document.getElementById('everyone-three').innerHTML = "";
            document.getElementById('individual-three').innerHTML = "NOTHING TO SHARE";
            document.getElementById("individual-two").innerHTML = "NO PLAN TO RELEASE BENEFITS";

        } else {
            document.getElementById('everyone-three').innerHTML = "";
            document.getElementById('individual-three').innerHTML = "";

        }
    }
};

function timeCredit() {
    var payingMember = document.getElementById("paying-member");
    var combineCredit = document.getElementById("combine-credit");
    var timeCredit = document.getElementById("time-credit");

    if (payingMember.value === "member") {
        if (timeCredit.checked === true && combineCredit.checked === true) {
            document.getElementById('everyone-four').innerHTML = "<i class='fas fa-hourglass-half'></i>";
            document.getElementById('individual-four').innerHTML = "";

        } else if (timeCredit.checked === true && combineCredit.checked === false) {
            document.getElementById('everyone-four').innerHTML = "";
            document.getElementById('individual-four').innerHTML = "PM + OWN BENEFITS" + "<i class='fas fa-hourglass-half'></i>";
            document.getElementById("individual-two").innerHTML = "PM BENEFITS SHARED" + "<i class='fas fa-check'></i>"

        } else {
            document.getElementById('everyone-four').innerHTML = "";
            document.getElementById('individual-four').innerHTML = "";

        }
    } else if (payingMember.value === "contact") {
        if (timeCredit.checked === true && combineCredit.checked === true) {
            document.getElementById('everyone-four').innerHTML = "<i class='fas fa-hourglass-half'></i>";
            document.getElementById('individual-four').innerHTML = "";

        } else if (timeCredit.checked === true && combineCredit.checked === false) {
            document.getElementById('everyone-four').innerHTML = "";
            document.getElementById('individual-four').innerHTML = "NOTHING TO SHARE";
            document.getElementById("individual-two").innerHTML = "NO PLAN TO RELEASE BENEFITS";


        } else {
            document.getElementById('everyone-four').innerHTML = "";
            document.getElementById('individual-four').innerHTML = "";

        }
    }
};

function monetaryCredit() {
    var payingMember = document.getElementById("paying-member");
    var combineCredit = document.getElementById("combine-credit");
    var monetaryCredit = document.getElementById("monetary-credit");

    if (payingMember.value === "member") {
        if (monetaryCredit.checked === true && combineCredit.checked === true) {
            document.getElementById('everyone-five').innerHTML = "<i class='fas fa-dollar-sign'></i>";
            document.getElementById('individual-five').innerHTML = "";

        } else if (monetaryCredit.checked === true && combineCredit.checked === false) {
            document.getElementById('everyone-five').innerHTML = "";
            document.getElementById('individual-five').innerHTML = "PM + OWN BENEFITS" + "<i class='fas fa-dollar-sign'></i>";
            document.getElementById("individual-two").innerHTML = "PM BENEFITS SHARED" + "<i class='fas fa-check'></i>"

        } else {
            document.getElementById('everyone-five').innerHTML = "";
            document.getElementById('individual-five').innerHTML = "";

        }
    } else if (payingMember.value === "contact") {
        if (monetaryCredit.checked === true && combineCredit.checked === true) {
            document.getElementById('everyone-five').innerHTML = "<i class='fas fa-dollar-sign'></i>";
            document.getElementById('individual-five').innerHTML = "";

        } else if (monetaryCredit.checked === true && combineCredit.checked === false) {
            document.getElementById('everyone-five').innerHTML = "";
            document.getElementById('individual-five').innerHTML = "NOTHING TO SHARE";
            document.getElementById("individual-two").innerHTML = "NO PLAN TO RELEASE BENEFITS";

        } else {
            document.getElementById('everyone-five').innerHTML = "";
            document.getElementById('individual-five').innerHTML = "";

        }
    }
};
/////////////////////////////////// TAX/////////////////////////////////////

function caseClickTax() {
    var input = document.querySelectorAll('input'),
        i;

    document.querySelector("#plan-price").value = "250"
    document.querySelector("#tax-rate").value = "21"

    for (i = 0; i < input.length; ++i) {
        document.querySelectorAll("input")[i].checked = true;
    }

    billingFunction()
    scrollWin()

};

function scrollWin() {
    // window.scrollTo(0, 500);
    document.getElementById("invoice-output").scrollIntoView()
};

function caseClickTwoTax() {

    document.querySelector("#plan-price").value = "250"
    document.querySelector("#tax-rate").value = "21"

    document.querySelector("#invoice-tax").checked = true;
    document.querySelector("#back-end").checked = false;
    document.querySelector("#display-tax").checked = true;

    scrollWin()


    billingFunction()
}

function billingFunction() {

    var originalPrice = document.getElementById("plan-price");
    var taxRate = document.getElementById("tax-rate");


    var invoiceTax = document.getElementById("invoice-tax");
    var backEnd = document.getElementById("back-end");
    var displayTax = document.getElementById("display-tax");

    if (taxRate.value > 0) {

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
    }
}

function taxAlert() {
    var invoiceTax = document.getElementById("invoice-tax");

    if (invoiceTax.checked === false) {
        document.getElementById("alert").style.display = "block"
        document.getElementById("alert").innerHTML = "Please Note: Having 'Add Tax to Invoice' disabled means sales will not be taxed.";
    } else {
        document.getElementById("alert").style.display = "none"
    }
}