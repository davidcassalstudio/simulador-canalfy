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
    var revenuePartial = parseFloat(ticket) * parseFloat(partners) * parseFloat(conversionPercent)/100;
    var revenue = revenuePartial.toFixed(2);
    document.getElementById("revenue").innerHTML = revenue;

    // Calcula o valor da comissão de parceiros (Receita x Comissão Percentual)
    var comissionPartial = parseFloat(revenue) * parseFloat(comissionPercent)/100;
    var comission = comissionPartial.toFixed(2);
    document.getElementById("comission").innerHTML = comission;

    // Calcula o valor do número de pedidos (Receita / Ticket Médio)
    var requestsNumber = parseFloat(revenue) / parseFloat(ticket);
    document.getElementById("requestsNumber").innerHTML = requestsNumber;

    // Exibe a quantidade de parceiros
    var partnersNumber = parseFloat(partners);
    document.getElementById("partnersNumber").innerHTML = partnersNumber;

    // Exibe o ticket médio
    var ticketPartial = parseFloat(ticket);
    var ticketMiddle = ticketPartial.toFixed(2);
    document.getElementById("ticketMiddle").innerHTML = ticketMiddle;

    // Exibe a taxa de conversão
    var conversionRate = parseFloat(conversionPercent);
    document.getElementById("conversionRate").innerHTML = conversionRate;

    // Exibe a taxa de conversão
    var comissionRate = parseFloat(comissionPercent);
    document.getElementById("comissionRate").innerHTML = comissionRate;

    // Exibe a mensalidade da Canalfy
    var canalfyPartial = parseFloat(monthlyCanalfy);
    var canalfy = canalfyPartial.toFixed(2);
    document.getElementById("canalfy").innerHTML = canalfy;

    // Calcula o valor do total investido (Comissão dos Parceiros + Mensalidade da Canalfy)
    var investedPartial = parseFloat(comission) + parseFloat(monthlyCanalfy);
    var totalInvested = investedPartial.toFixed(2);
    document.getElementById("totalInvested").innerHTML = totalInvested;

    // Calcula o valor percentual do custo de venda (Total Investido / Receita)
    var costPartial = parseFloat(totalInvested) / parseFloat(revenue);
    var costOfSale = parseFloat(costPartial)*100;
    document.getElementById("costOfSale").innerHTML = Math.round(costOfSale);
}