

function calc() {
    var client = document.getElementById("client").value;
    var ticket = document.getElementById("ticket").value;
    var partners = document.getElementById("partners").value;
    var conversionPercent = document.getElementById("conversionPercent").value;
    var comissionPercent = document.getElementById("comissionPercent").value;
    var basePercent = document.getElementById("basePercent").value;
    var monthlyCanalfy = document.getElementById("monthlyCanalfy").value;

    // Exibe o nome do cliente
    var clientName = client;
    document.getElementById("clientName").innerHTML = clientName;

    // Calcula o valor de receita (Ticket Médio x Qtd. de Parceiros x Taxa de Conversão em Porcentagem)
    var revenuePartial = parseFloat(ticket) * parseFloat(partners) * parseFloat(conversionPercent)/100;
    var revenue = revenuePartial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("revenue").innerHTML = revenue;

    // Calcula o valor da comissão de parceiros (Receita x Comissão Percentual)
    var comissionPartial = parseFloat(revenuePartial) * parseFloat(comissionPercent)/100;
    var comission = comissionPartial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("comission").innerHTML = comission;

    // Calcula o valor do número de pedidos (Receita / Ticket Médio)
    var requestsNumber = parseFloat(revenuePartial) / parseFloat(ticket);
    document.getElementById("requestsNumber").innerHTML = Math.round(requestsNumber);

    // Exibe a quantidade de parceiros
    var partnersNumber = parseFloat(partners);
    document.getElementById("partnersNumber").innerHTML = Math.round(partnersNumber);

    // Exibe o ticket médio
    var ticketPartial = parseFloat(ticket);
    var ticketMiddle = ticketPartial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("ticketMiddle").innerHTML = ticketMiddle;

    // Exibe a taxa de conversão
    var conversionRate = parseFloat(conversionPercent);
    document.getElementById("conversionRate").innerHTML = conversionRate;

    // Exibe a taxa de conversão
    var comissionRate = parseFloat(comissionPercent);
    document.getElementById("comissionRate").innerHTML = comissionRate;

    // Exibe a mensalidade da Canalfy
    var canalfyPartial = parseFloat(monthlyCanalfy);
    var canalfy = canalfyPartial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("canalfy").innerHTML = canalfy;

    // Calcula o valor do total investido (Comissão dos Parceiros + Mensalidade da Canalfy)
    var investedPartial = parseFloat(comissionPartial) + parseFloat(canalfyPartial);
    var totalInvested = investedPartial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById("totalInvested").innerHTML = totalInvested;

    // Calcula o valor percentual do custo de venda (Total Investido / Receita)
    var costPartial = parseFloat(investedPartial) / parseFloat(revenuePartial);
    var costOfSale = parseFloat(costPartial)*100;
    document.getElementById("costOfSale").innerHTML = Math.round(costOfSale);

        // ================== Mês 2

        // Número de parceiros
        var partnersNumberPartial2 = parseFloat(partnersNumber) * parseFloat(basePercent)/100;
        var partnersNumber2 = parseFloat(partnersNumber) + parseFloat(partnersNumberPartial2);
        document.getElementById("partnersNumber2").innerHTML = Math.round(partnersNumber2);

        // Exibe a taxa de conversão
        var conversionRate2 = parseFloat(conversionPercent);
        document.getElementById("conversionRate2").innerHTML = conversionRate2;

        // Exibe a taxa de conversão
        var comissionRate2 = parseFloat(comissionPercent);
        document.getElementById("comissionRate2").innerHTML = comissionRate2;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial2 = parseFloat(monthlyCanalfy);
        var canalfy2 = canalfyPartial2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("canalfy2").innerHTML = canalfy2;

        // Calcula o valor de receita
        var revenuePartial2 = parseFloat(ticket) * parseFloat(partnersNumber2) * parseFloat(conversionRate2)/100;
        var revenue2 = revenuePartial2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("revenue2").innerHTML = revenue2;

        // Calcula o valor da comissão de parceiros
        var comissionPartial2 = parseFloat(revenuePartial2) * parseFloat(comissionPercent)/100;
        var comission2 = comissionPartial2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("comission2").innerHTML = comission2;

        // Exibe o ticket médio
        var ticketPartial2 = parseFloat(ticket);
        var ticketMiddle2 = ticketPartial2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("ticketMiddle2").innerHTML = ticketMiddle2;

        // Calcula o valor do número de pedidos
        var requestsNumber2 = parseFloat(revenuePartial2) / parseFloat(ticketPartial2);
        document.getElementById("requestsNumber2").innerHTML = Math.round(requestsNumber2);

        // Calcula o valor do total investido
        var investedPartial2 = parseFloat(comissionPartial2) + parseFloat(canalfyPartial2);
        var totalInvested2 = investedPartial2.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("totalInvested2").innerHTML = totalInvested2;

        // Calcula o valor percentual do custo de venda
        var costPartial2 = parseFloat(investedPartial2) / parseFloat(revenuePartial2);
        var costOfSale2 = parseFloat(costPartial2)*100;
        document.getElementById("costOfSale2").innerHTML = Math.round(costOfSale2);

        // ================== Mês 3

        // Número de parceiros
        var partnersNumberPartial3 = parseFloat(partnersNumber2) * parseFloat(basePercent)/100;
        var partnersNumber3 = parseFloat(partnersNumber2) + parseFloat(partnersNumberPartial3);
        document.getElementById("partnersNumber3").innerHTML = Math.round(partnersNumber3);

        // Exibe a taxa de conversão
        var conversionRate3 = parseFloat(conversionPercent);
        document.getElementById("conversionRate3").innerHTML = conversionRate3;

        // Exibe a taxa de conversão
        var comissionRate3 = parseFloat(comissionPercent);
        document.getElementById("comissionRate3").innerHTML = comissionRate3;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial3 = parseFloat(monthlyCanalfy);
        var canalfy3 = canalfyPartial3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("canalfy3").innerHTML = canalfy3;

        // Calcula o valor de receita
        var revenuePartial3 = parseFloat(ticket) * parseFloat(partnersNumber3) * parseFloat(conversionRate3)/100;
        var revenue3 = revenuePartial3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("revenue3").innerHTML = revenue3;

        // Calcula o valor da comissão de parceiros
        var comissionPartial3 = parseFloat(revenuePartial3) * parseFloat(comissionPercent)/100;
        var comission3 = comissionPartial3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("comission3").innerHTML = comission3;

        // Exibe o ticket médio
        var ticketPartial3 = parseFloat(ticket);
        var ticketMiddle3 = ticketPartial3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("ticketMiddle3").innerHTML = ticketMiddle3;

        // Calcula o valor do número de pedidos
        var requestsNumber3 = parseFloat(revenuePartial3) / parseFloat(ticketPartial3);
        document.getElementById("requestsNumber3").innerHTML = Math.round(requestsNumber3);

        // Calcula o valor do total investido
        var investedPartial3 = parseFloat(comissionPartial3) + parseFloat(canalfyPartial3);
        var totalInvested3 = investedPartial3.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("totalInvested3").innerHTML = totalInvested3;

        // Calcula o valor percentual do custo de venda
        var costPartial3 = parseFloat(investedPartial3) / parseFloat(revenuePartial3);
        var costOfSale3 = parseFloat(costPartial3)*100;
        document.getElementById("costOfSale3").innerHTML = Math.round(costOfSale3);

        // ================== Mês 4

        // Número de parceiros
        var partnersNumberPartial4 = parseFloat(partnersNumber3) * parseFloat(basePercent)/100;
        var partnersNumber4 = parseFloat(partnersNumber3) + parseFloat(partnersNumberPartial4);
        document.getElementById("partnersNumber4").innerHTML = Math.round(partnersNumber4);

        // Exibe a taxa de conversão
        var conversionRate4 = parseFloat(conversionPercent);
        document.getElementById("conversionRate4").innerHTML = conversionRate4;

        // Exibe a taxa de conversão
        var comissionRate4 = parseFloat(comissionPercent);
        document.getElementById("comissionRate4").innerHTML = comissionRate4;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial4 = parseFloat(monthlyCanalfy);
        var canalfy4 = canalfyPartial4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("canalfy4").innerHTML = canalfy4;

        // Calcula o valor de receita
        var revenuePartial4 = parseFloat(ticket) * parseFloat(partnersNumber4) * parseFloat(conversionRate4)/100;
        var revenue4 = revenuePartial4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("revenue4").innerHTML = revenue4;

        // Calcula o valor da comissão de parceiros
        var comissionPartial4 = parseFloat(revenuePartial4) * parseFloat(comissionPercent)/100;
        var comission4 = comissionPartial4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("comission4").innerHTML = comission4;

        // Exibe o ticket médio
        var ticketPartial4 = parseFloat(ticket);
        var ticketMiddle4 = ticketPartial4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("ticketMiddle4").innerHTML = ticketMiddle4;

        // Calcula o valor do número de pedidos
        var requestsNumber4 = parseFloat(revenuePartial4) / parseFloat(ticketPartial4);
        document.getElementById("requestsNumber4").innerHTML = Math.round(requestsNumber4);

        // Calcula o valor do total investido
        var investedPartial4 = parseFloat(comissionPartial4) + parseFloat(canalfyPartial4);
        var totalInvested4 = investedPartial4.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("totalInvested4").innerHTML = totalInvested4;

        // Calcula o valor percentual do custo de venda
        var costPartial4 = parseFloat(investedPartial4) / parseFloat(revenuePartial4);
        var costOfSale4 = parseFloat(costPartial4)*100;
        document.getElementById("costOfSale4").innerHTML = Math.round(costOfSale4);

        // ================== Mês 5

        // Número de parceiros
        var partnersNumberPartial5 = parseFloat(partnersNumber4) * parseFloat(basePercent)/100;
        var partnersNumber5 = parseFloat(partnersNumber4) + parseFloat(partnersNumberPartial5);
        document.getElementById("partnersNumber5").innerHTML = Math.round(partnersNumber5);

        // Exibe a taxa de conversão
        var conversionRate5 = parseFloat(conversionPercent);
        document.getElementById("conversionRate5").innerHTML = conversionRate5;

        // Exibe a taxa de conversão
        var comissionRate5 = parseFloat(comissionPercent);
        document.getElementById("comissionRate5").innerHTML = comissionRate5;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial5 = parseFloat(monthlyCanalfy);
        var canalfy5 = canalfyPartial5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("canalfy5").innerHTML = canalfy5;

        // Calcula o valor de receita
        var revenuePartial5 = parseFloat(ticket) * parseFloat(partnersNumber5) * parseFloat(conversionRate5)/100;
        var revenue5 = revenuePartial5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("revenue5").innerHTML = revenue5;

        // Calcula o valor da comissão de parceiros
        var comissionPartial5 = parseFloat(revenuePartial5) * parseFloat(comissionPercent)/100;
        var comission5 = comissionPartial5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("comission5").innerHTML = comission5;

        // Exibe o ticket médio
        var ticketPartial5 = parseFloat(ticket);
        var ticketMiddle5 = ticketPartial5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("ticketMiddle5").innerHTML = ticketMiddle5;

        // Calcula o valor do número de pedidos
        var requestsNumber5 = parseFloat(revenuePartial5) / parseFloat(ticketPartial5);
        document.getElementById("requestsNumber5").innerHTML = Math.round(requestsNumber5);

        // Calcula o valor do total investido
        var investedPartial5 = parseFloat(comissionPartial5) + parseFloat(canalfyPartial5);
        var totalInvested5 = investedPartial5.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("totalInvested5").innerHTML = totalInvested5;

        // Calcula o valor percentual do custo de venda
        var costPartial5 = parseFloat(investedPartial5) / parseFloat(revenuePartial5);
        var costOfSale5 = parseFloat(costPartial5)*100;
        document.getElementById("costOfSale5").innerHTML = Math.round(costOfSale5);

        // ================== Mês 6

        // Número de parceiros
        var partnersNumberPartial6 = parseFloat(partnersNumber5) * parseFloat(basePercent)/100;
        var partnersNumber6 = parseFloat(partnersNumber5) + parseFloat(partnersNumberPartial6);
        document.getElementById("partnersNumber6").innerHTML = Math.round(partnersNumber6);

        // Exibe a taxa de conversão
        var conversionRate6 = parseFloat(conversionPercent);
        document.getElementById("conversionRate6").innerHTML = conversionRate6;

        // Exibe a taxa de conversão
        var comissionRate6 = parseFloat(comissionPercent);
        document.getElementById("comissionRate6").innerHTML = comissionRate6;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial6 = parseFloat(monthlyCanalfy);
        var canalfy6 = canalfyPartial6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("canalfy6").innerHTML = canalfy6;

        // Calcula o valor de receita
        var revenuePartial6 = parseFloat(ticket) * parseFloat(partnersNumber6) * parseFloat(conversionRate6)/100;
        var revenue6 = revenuePartial6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("revenue6").innerHTML = revenue6;

        // Calcula o valor da comissão de parceiros
        var comissionPartial6 = parseFloat(revenuePartial6) * parseFloat(comissionPercent)/100;
        var comission6 = comissionPartial6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("comission6").innerHTML = comission6;

        // Exibe o ticket médio
        var ticketPartial6 = parseFloat(ticket);
        var ticketMiddle6 = ticketPartial6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("ticketMiddle6").innerHTML = ticketMiddle6;

        // Calcula o valor do número de pedidos
        var requestsNumber6 = parseFloat(revenuePartial6) / parseFloat(ticketPartial6);
        document.getElementById("requestsNumber6").innerHTML = Math.round(requestsNumber6);

        // Calcula o valor do total investido
        var investedPartial6 = parseFloat(comissionPartial6) + parseFloat(canalfyPartial6);
        var totalInvested6 = investedPartial6.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("totalInvested6").innerHTML = totalInvested6;

        // Calcula o valor percentual do custo de venda
        var costPartial6 = parseFloat(investedPartial6) / parseFloat(revenuePartial6);
        var costOfSale6 = parseFloat(costPartial6)*100;
        document.getElementById("costOfSale6").innerHTML = Math.round(costOfSale6);

        // ================== Mês 7

        // Número de parceiros
        var partnersNumberPartial7 = parseFloat(partnersNumber6) * parseFloat(basePercent)/100;
        var partnersNumber7 = parseFloat(partnersNumber6) + parseFloat(partnersNumberPartial7);
        document.getElementById("partnersNumber7").innerHTML = Math.round(partnersNumber7);

        // Exibe a taxa de conversão
        var conversionRate7 = parseFloat(conversionPercent);
        document.getElementById("conversionRate7").innerHTML = conversionRate7;

        // Exibe a taxa de conversão
        var comissionRate7 = parseFloat(comissionPercent);
        document.getElementById("comissionRate7").innerHTML = comissionRate7;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial7 = parseFloat(monthlyCanalfy);
        var canalfy7 = canalfyPartial7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("canalfy7").innerHTML = canalfy7;

        // Calcula o valor de receita
        var revenuePartial7 = parseFloat(ticket) * parseFloat(partnersNumber7) * parseFloat(conversionRate7)/100;
        var revenue7 = revenuePartial7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("revenue7").innerHTML = revenue7;

        // Calcula o valor da comissão de parceiros
        var comissionPartial7 = parseFloat(revenuePartial7) * parseFloat(comissionPercent)/100;
        var comission7 = comissionPartial7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("comission7").innerHTML = comission7;

        // Exibe o ticket médio
        var ticketPartial7 = parseFloat(ticket);
        var ticketMiddle7 = ticketPartial7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("ticketMiddle7").innerHTML = ticketMiddle7;

        // Calcula o valor do número de pedidos
        var requestsNumber7 = parseFloat(revenuePartial7) / parseFloat(ticketPartial7);
        document.getElementById("requestsNumber7").innerHTML = Math.round(requestsNumber7);

        // Calcula o valor do total investido
        var investedPartial7 = parseFloat(comissionPartial7) + parseFloat(canalfyPartial7);
        var totalInvested7 = investedPartial7.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("totalInvested7").innerHTML = totalInvested7;

        // Calcula o valor percentual do custo de venda
        var costPartial7 = parseFloat(investedPartial7) / parseFloat(revenuePartial7);
        var costOfSale7 = parseFloat(costPartial7)*100;
        document.getElementById("costOfSale7").innerHTML = Math.round(costOfSale7);

        // ================== Mês 8

        // Número de parceiros
        var partnersNumberPartial8 = parseFloat(partnersNumber7) * parseFloat(basePercent)/100;
        var partnersNumber8 = parseFloat(partnersNumber7) + parseFloat(partnersNumberPartial8);
        document.getElementById("partnersNumber8").innerHTML = Math.round(partnersNumber8);

        // Exibe a taxa de conversão
        var conversionRate8 = parseFloat(conversionPercent);
        document.getElementById("conversionRate8").innerHTML = conversionRate8;

        // Exibe a taxa de conversão
        var comissionRate8 = parseFloat(comissionPercent);
        document.getElementById("comissionRate8").innerHTML = comissionRate8;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial8 = parseFloat(monthlyCanalfy);
        var canalfy8 = canalfyPartial8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("canalfy8").innerHTML = canalfy8;

        // Calcula o valor de receita
        var revenuePartial8 = parseFloat(ticket) * parseFloat(partnersNumber8) * parseFloat(conversionRate8)/100;
        var revenue8 = revenuePartial8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("revenue8").innerHTML = revenue8;

        // Calcula o valor da comissão de parceiros
        var comissionPartial8 = parseFloat(revenuePartial8) * parseFloat(comissionPercent)/100;
        var comission8 = comissionPartial8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("comission8").innerHTML = comission8;

        // Exibe o ticket médio
        var ticketPartial8 = parseFloat(ticket);
        var ticketMiddle8 = ticketPartial8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("ticketMiddle8").innerHTML = ticketMiddle8;

        // Calcula o valor do número de pedidos
        var requestsNumber8 = parseFloat(revenuePartial8) / parseFloat(ticketPartial8);
        document.getElementById("requestsNumber8").innerHTML = Math.round(requestsNumber8);

        // Calcula o valor do total investido
        var investedPartial8 = parseFloat(comissionPartial8) + parseFloat(canalfyPartial8);
        var totalInvested8 = investedPartial8.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("totalInvested8").innerHTML = totalInvested8;

        // Calcula o valor percentual do custo de venda
        var costPartial8 = parseFloat(investedPartial8) / parseFloat(revenuePartial8);
        var costOfSale8 = parseFloat(costPartial8)*100;
        document.getElementById("costOfSale8").innerHTML = Math.round(costOfSale8);

        // ================== Mês 9

        // Número de parceiros
        var partnersNumberPartial9 = parseFloat(partnersNumber8) * parseFloat(basePercent)/100;
        var partnersNumber9 = parseFloat(partnersNumber8) + parseFloat(partnersNumberPartial9);
        document.getElementById("partnersNumber9").innerHTML = Math.round(partnersNumber9);

        // Exibe a taxa de conversão
        var conversionRate9 = parseFloat(conversionPercent);
        document.getElementById("conversionRate9").innerHTML = conversionRate9;

        // Exibe a taxa de conversão
        var comissionRate9 = parseFloat(comissionPercent);
        document.getElementById("comissionRate9").innerHTML = comissionRate9;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial9 = parseFloat(monthlyCanalfy);
        var canalfy9 = canalfyPartial9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("canalfy9").innerHTML = canalfy9;

        // Calcula o valor de receita
        var revenuePartial9 = parseFloat(ticket) * parseFloat(partnersNumber9) * parseFloat(conversionRate9)/100;
        var revenue9 = revenuePartial9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("revenue9").innerHTML = revenue9;

        // Calcula o valor da comissão de parceiros
        var comissionPartial9 = parseFloat(revenuePartial9) * parseFloat(comissionPercent)/100;
        var comission9 = comissionPartial9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("comission9").innerHTML = comission9;

        // Exibe o ticket médio
        var ticketPartial9 = parseFloat(ticket);
        var ticketMiddle9 = ticketPartial9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("ticketMiddle9").innerHTML = ticketMiddle9;

        // Calcula o valor do número de pedidos
        var requestsNumber9 = parseFloat(revenuePartial9) / parseFloat(ticketPartial9);
        document.getElementById("requestsNumber9").innerHTML = Math.round(requestsNumber9);

        // Calcula o valor do total investido
        var investedPartial9 = parseFloat(comissionPartial9) + parseFloat(canalfyPartial9);
        var totalInvested9 = investedPartial9.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("totalInvested9").innerHTML = totalInvested9;

        // Calcula o valor percentual do custo de venda
        var costPartial9 = parseFloat(investedPartial9) / parseFloat(revenuePartial9);
        var costOfSale9 = parseFloat(costPartial9)*100;
        document.getElementById("costOfSale9").innerHTML = Math.round(costOfSale9);

        // ================== Mês 10

        // Número de parceiros
        var partnersNumberPartial10 = parseFloat(partnersNumber9) * parseFloat(basePercent)/100;
        var partnersNumber10 = parseFloat(partnersNumber9) + parseFloat(partnersNumberPartial10);
        document.getElementById("partnersNumber10").innerHTML = Math.round(partnersNumber10);

        // Exibe a taxa de conversão
        var conversionRate10 = parseFloat(conversionPercent);
        document.getElementById("conversionRate10").innerHTML = conversionRate10;

        // Exibe a taxa de conversão
        var comissionRate10 = parseFloat(comissionPercent);
        document.getElementById("comissionRate10").innerHTML = comissionRate10;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial10 = parseFloat(monthlyCanalfy);
        var canalfy10 = canalfyPartial10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("canalfy10").innerHTML = canalfy10;

        // Calcula o valor de receita
        var revenuePartial10 = parseFloat(ticket) * parseFloat(partnersNumber10) * parseFloat(conversionRate10)/100;
        var revenue10 = revenuePartial10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("revenue10").innerHTML = revenue10;

        // Calcula o valor da comissão de parceiros
        var comissionPartial10 = parseFloat(revenuePartial10) * parseFloat(comissionPercent)/100;
        var comission10 = comissionPartial10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("comission10").innerHTML = comission10;

        // Exibe o ticket médio
        var ticketPartial10 = parseFloat(ticket);
        var ticketMiddle10 = ticketPartial10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("ticketMiddle10").innerHTML = ticketMiddle10;

        // Calcula o valor do número de pedidos
        var requestsNumber10 = parseFloat(revenuePartial10) / parseFloat(ticketPartial10);
        document.getElementById("requestsNumber10").innerHTML = Math.round(requestsNumber10);

        // Calcula o valor do total investido
        var investedPartial10 = parseFloat(comissionPartial10) + parseFloat(canalfyPartial10);
        var totalInvested10 = investedPartial10.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("totalInvested10").innerHTML = totalInvested10;

        // Calcula o valor percentual do custo de venda
        var costPartial10 = parseFloat(investedPartial10) / parseFloat(revenuePartial10);
        var costOfSale10 = parseFloat(costPartial10)*100;
        document.getElementById("costOfSale10").innerHTML = Math.round(costOfSale10);

        // ================== Mês 11

        // Número de parceiros
        var partnersNumberPartial11 = parseFloat(partnersNumber10) * parseFloat(basePercent)/100;
        var partnersNumber11 = parseFloat(partnersNumber10) + parseFloat(partnersNumberPartial11);
        document.getElementById("partnersNumber11").innerHTML = Math.round(partnersNumber11);

        // Exibe a taxa de conversão
        var conversionRate11 = parseFloat(conversionPercent);
        document.getElementById("conversionRate11").innerHTML = conversionRate11;

        // Exibe a taxa de conversão
        var comissionRate11 = parseFloat(comissionPercent);
        document.getElementById("comissionRate11").innerHTML = comissionRate11;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial11 = parseFloat(monthlyCanalfy);
        var canalfy11 = canalfyPartial11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("canalfy11").innerHTML = canalfy11;

        // Calcula o valor de receita
        var revenuePartial11 = parseFloat(ticket) * parseFloat(partnersNumber11) * parseFloat(conversionRate11)/100;
        var revenue11 = revenuePartial11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("revenue11").innerHTML = revenue11;

        // Calcula o valor da comissão de parceiros
        var comissionPartial11 = parseFloat(revenuePartial11) * parseFloat(comissionPercent)/100;
        var comission11 = comissionPartial11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("comission11").innerHTML = comission11;

        // Exibe o ticket médio
        var ticketPartial11 = parseFloat(ticket);
        var ticketMiddle11 = ticketPartial11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("ticketMiddle11").innerHTML = ticketMiddle11;

        // Calcula o valor do número de pedidos
        var requestsNumber11 = parseFloat(revenuePartial11) / parseFloat(ticketPartial11);
        document.getElementById("requestsNumber11").innerHTML = Math.round(requestsNumber11);

        // Calcula o valor do total investido
        var investedPartial11 = parseFloat(comissionPartial11) + parseFloat(canalfyPartial11);
        var totalInvested11 = investedPartial11.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("totalInvested11").innerHTML = totalInvested11;

        // Calcula o valor percentual do custo de venda
        var costPartial11 = parseFloat(investedPartial11) / parseFloat(revenuePartial11);
        var costOfSale11 = parseFloat(costPartial11)*100;
        document.getElementById("costOfSale11").innerHTML = Math.round(costOfSale11);

        // ================== Mês 12

        // Número de parceiros
        var partnersNumberPartial12 = parseFloat(partnersNumber11) * parseFloat(basePercent)/100;
        var partnersNumber12 = parseFloat(partnersNumber11) + parseFloat(partnersNumberPartial12);
        document.getElementById("partnersNumber12").innerHTML = Math.round(partnersNumber12);

        // Exibe a taxa de conversão
        var conversionRate12 = parseFloat(conversionPercent);
        document.getElementById("conversionRate12").innerHTML = conversionRate12;

        // Exibe a taxa de conversão
        var comissionRate12 = parseFloat(comissionPercent);
        document.getElementById("comissionRate12").innerHTML = comissionRate12;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial12 = parseFloat(monthlyCanalfy);
        var canalfy12 = canalfyPartial12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("canalfy12").innerHTML = canalfy12;

        // Calcula o valor de receita
        var revenuePartial12 = parseFloat(ticket) * parseFloat(partnersNumber12) * parseFloat(conversionRate12)/100;
        var revenue12 = revenuePartial12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("revenue12").innerHTML = revenue12;

        // Calcula o valor da comissão de parceiros
        var comissionPartial12 = parseFloat(revenuePartial12) * parseFloat(comissionPercent)/100;
        var comission12 = comissionPartial12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("comission12").innerHTML = comission12;

        // Exibe o ticket médio
        var ticketPartial12 = parseFloat(ticket);
        var ticketMiddle12 = ticketPartial12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("ticketMiddle12").innerHTML = ticketMiddle12;

        // Calcula o valor do número de pedidos
        var requestsNumber12 = parseFloat(revenuePartial12) / parseFloat(ticketPartial12);
        document.getElementById("requestsNumber12").innerHTML = Math.round(requestsNumber12);

        // Calcula o valor do total investido
        var investedPartial12 = parseFloat(comissionPartial12) + parseFloat(canalfyPartial12);
        var totalInvested12 = investedPartial12.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("totalInvested12").innerHTML = totalInvested12;

        // Calcula o valor percentual do custo de venda
        var costPartial12 = parseFloat(investedPartial12) / parseFloat(revenuePartial12);
        var costOfSale12 = parseFloat(costPartial12)*100;
        document.getElementById("costOfSale12").innerHTML = Math.round(costOfSale12);

        // ================== Resumo total

        var totalRevenuePartial = parseFloat(revenuePartial) + parseFloat(revenuePartial2) + parseFloat(revenuePartial3) + parseFloat(revenuePartial4) + parseFloat(revenuePartial5) + parseFloat(revenuePartial6) + parseFloat(revenuePartial7) + parseFloat(revenuePartial8) + parseFloat(revenuePartial9) + parseFloat(revenuePartial10) + parseFloat(revenuePartial11) + parseFloat(revenuePartial12);
        var totalRevenue = totalRevenuePartial.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("totalRevenue").innerHTML = totalRevenue;

        var totalPartnersPartial = parseFloat(partnersNumber12);
        var totalPartners = totalPartnersPartial.toFixed(2);
        document.getElementById("totalPartners").innerHTML = Math.round(totalPartners);


        // ================== Ações do botão

        document.getElementsByClassName('resume-placeholder')[0].setAttribute('style', 'display: none');
        document.getElementsByClassName('resume-results')[0].setAttribute('style', 'display: block');

        
}

function moeda(i) {
	var v = i.value.replace(/\D/g,'');
	v = (v/100).toFixed(2) + '';
	v = v.replace(".", ".");
	v = v.replace(/(\d)(\d{3})(\d{3}),/g, "$1.$2.$3,");
	v = v.replace(/(\d)(\d{3}),/g, "$1.$2,");
	i.value = v;
}