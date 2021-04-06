function calc() {
    var client = document.getElementById("client").value;
    var ticket = document.getElementById("ticket").value;
    var partners = document.getElementById("partners").value;
    var conversionPercent = document.getElementById("conversionPercent").value;
    var comissionPercent = document.getElementById("comissionPercent").value;
    var monthlyCanalfy = document.getElementById("monthlyCanalfy").value;

    // Exibe o nome do cliente
    var clientName = client;
    document.getElementById("clientName").innerHTML = clientName;

    // Calcula o valor de receita (Ticket Médio x Qtd. de Parceiros x Taxa de Conversão em Porcentagem)
    var revenue = parseFloat(ticket) * parseFloat(partners) * parseFloat(conversionPercent)/100;
    document.getElementById("revenue").innerHTML = revenue;

    // Calcula o valor da comissão de parceiros (Receita x Comissão Percentual)
    var comission = parseFloat(revenue) * parseFloat(comissionPercent)/100;
    document.getElementById("comission").innerHTML = comission;

    // Calcula o valor do número de pedidos (Receita / Ticket Médio)
    var requestsNumber = parseFloat(revenue) / parseFloat(ticket);
    document.getElementById("requestsNumber").innerHTML = requestsNumber;

    // Exibe a quantidade de parceiros
    var partnersNumber = parseFloat(partners);
    document.getElementById("partnersNumber").innerHTML = partnersNumber;

    // Exibe o ticket médio
    var ticketMiddle = parseFloat(ticket);
    document.getElementById("ticketMiddle").innerHTML = ticketMiddle;

    // Exibe a taxa de conversão
    var conversionRate = parseFloat(conversionPercent);
    document.getElementById("conversionRate").innerHTML = conversionRate;

    // Exibe a taxa de conversão
    var comissionRate = parseFloat(comissionPercent);
    document.getElementById("comissionRate").innerHTML = comissionRate;

    // Exibe a mensalidade da Canalfy
    var canalfy = parseFloat(monthlyCanalfy);
    document.getElementById("canalfy").innerHTML = canalfy;

    // Calcula o valor do total investido (Comissão dos Parceiros + Mensalidade da Canalfy)
    var totalInvested = parseFloat(comission) + parseFloat(monthlyCanalfy);
    document.getElementById("totalInvested").innerHTML = totalInvested;

    var costPartial = parseFloat(totalInvested) / parseFloat(revenue);
    var costOfSale = parseFloat(costPartial)*100;
    document.getElementById("costOfSale").innerHTML = costOfSale;
}