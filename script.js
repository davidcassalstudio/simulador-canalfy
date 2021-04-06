function calc() {
    var client = document.getElementById("client").value;
    var ticket = document.getElementById("ticket").value;
    var partners = document.getElementById("partners").value;
    var conversionPercent = document.getElementById("conversionPercent").value;
    var comissionPercent = document.getElementById("comissionPercent").value;
    var monthlyCanalfy = document.getElementById("monthlyCanalfy").value;

    var clientName = client;
    document.getElementById("clientName").innerHTML = clientName;

    var revenue = parseFloat(ticket) * parseFloat(partners) * parseFloat(conversionPercent)/100;
    document.getElementById("revenue").innerHTML = revenue;

    var comission = parseFloat(revenue) * parseFloat(comissionPercent)/100;
    document.getElementById("comission").innerHTML = comission;

    var partnersNumber = parseFloat(partners);
    document.getElementById("partnersNumber").innerHTML = partnersNumber;

    var totalInvested = parseFloat(comission) + parseFloat(monthlyCanalfy);
    document.getElementById("totalInvested").innerHTML = totalInvested;

    var costPartial = parseFloat(totalInvested) / parseFloat(revenue);
    var costOfSale = parseFloat(costPartial)*100;
    document.getElementById("costOfSale").innerHTML = costOfSale;
}