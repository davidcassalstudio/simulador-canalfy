function calc() {
    var client = document.getElementById("client").value;
    var ticket = document.getElementById("ticket").value;
    var partners = document.getElementById("partners").value;
    var conversionPercent = document.getElementById("conversionPercent").value;
    var comissionPercent = document.getElementById("comissionPercent").value;
    var monthlyCanalfy = document.getElementById("monthlyCanalfy").value;

    var clientName = client;
    document.getElementById("clientName").innerHTML = clientName;

    var revenue = parseInt(ticket) * parseInt(partners) * parseInt(conversionPercent)/100;
    document.getElementById("revenue").innerHTML = revenue;

    var comission = parseInt(revenue) * parseInt(comissionPercent)/100;
    document.getElementById("comission").innerHTML = comission;

    var totalInvested = parseInt(comission) + parseInt(monthlyCanalfy);
    document.getElementById("totalInvested").innerHTML = totalInvested;
}