String.prototype.reverse = function(){
    return this.split('').reverse().join(''); 
};
  
function mascaraMoeda(campo,evento) {
    var tecla = (!evento) ? window.event.keyCode : evento.which;
    var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
    var resultado  = "";
    var mascara = "##.###.###,##".reverse();
    for (var x=0, y=0; x<mascara.length && y<valor.length;) {
        if (mascara.charAt(x) != '#') {
        resultado += mascara.charAt(x);
        x++;
        } else {
        resultado += valor.charAt(y);
        y++;
        x++;
        }
    }
    campo.value = resultado.reverse();
}

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

        // ================== Mês 2

        // Número de parceiros
        var partnersNumberPartial2 = parseFloat(partnersNumber) * parseFloat(basePercent)/100;
        var partnersNumber2 = parseFloat(partnersNumber) + parseFloat(partnersNumberPartial2);
        document.getElementById("partnersNumber2").innerHTML = partnersNumber2;

        // Exibe a taxa de conversão
        var conversionRate2 = parseFloat(conversionPercent);
        document.getElementById("conversionRate2").innerHTML = conversionRate2;

        // Exibe a taxa de conversão
        var comissionRate2 = parseFloat(comissionPercent);
        document.getElementById("comissionRate2").innerHTML = comissionRate2;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial2 = parseFloat(monthlyCanalfy);
        var canalfy2 = canalfyPartial2.toFixed(2);
        document.getElementById("canalfy2").innerHTML = canalfy2;

        // Calcula o valor de receita
        var revenuePartial2 = parseFloat(ticket) * parseFloat(partnersNumber2) * parseFloat(conversionRate2)/100;
        var revenue2 = revenuePartial2.toFixed(2);
        document.getElementById("revenue2").innerHTML = revenue2;

        // Calcula o valor da comissão de parceiros
        var comissionPartial2 = parseFloat(revenue2) * parseFloat(comissionPercent)/100;
        var comission2 = comissionPartial2.toFixed(2);
        document.getElementById("comission2").innerHTML = comission2;

        // Exibe o ticket médio
        var ticketPartial2 = parseFloat(ticket);
        var ticketMiddle2 = ticketPartial2.toFixed(2);
        document.getElementById("ticketMiddle2").innerHTML = ticketMiddle2;

        // Calcula o valor do número de pedidos
        var requestsNumber2 = parseFloat(revenue2) / parseFloat(ticketMiddle2);
        document.getElementById("requestsNumber2").innerHTML = requestsNumber2;

        // Calcula o valor do total investido
        var investedPartial2 = parseFloat(comission2) + parseFloat(canalfy2);
        var totalInvested2 = investedPartial2.toFixed(2);
        document.getElementById("totalInvested2").innerHTML = totalInvested2;

        // Calcula o valor percentual do custo de venda
        var costPartial2 = parseFloat(totalInvested2) / parseFloat(revenue2);
        var costOfSale2 = parseFloat(costPartial2)*100;
        document.getElementById("costOfSale2").innerHTML = Math.round(costOfSale2);

        // ================== Mês 3

        // Número de parceiros
        var partnersNumberPartial3 = parseFloat(partnersNumber2) * parseFloat(basePercent)/100;
        var partnersNumber3 = parseFloat(partnersNumber2) + parseFloat(partnersNumberPartial3);
        document.getElementById("partnersNumber3").innerHTML = partnersNumber3;

        // Exibe a taxa de conversão
        var conversionRate3 = parseFloat(conversionPercent);
        document.getElementById("conversionRate3").innerHTML = conversionRate3;

        // Exibe a taxa de conversão
        var comissionRate3 = parseFloat(comissionPercent);
        document.getElementById("comissionRate3").innerHTML = comissionRate3;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial3 = parseFloat(monthlyCanalfy);
        var canalfy3 = canalfyPartial3.toFixed(2);
        document.getElementById("canalfy3").innerHTML = canalfy3;

        // Calcula o valor de receita
        var revenuePartial3 = parseFloat(ticket) * parseFloat(partnersNumber3) * parseFloat(conversionRate3)/100;
        var revenue3 = revenuePartial3.toFixed(2);
        document.getElementById("revenue3").innerHTML = revenue3;

        // Calcula o valor da comissão de parceiros
        var comissionPartial3 = parseFloat(revenue3) * parseFloat(comissionPercent)/100;
        var comission3 = comissionPartial3.toFixed(2);
        document.getElementById("comission3").innerHTML = comission3;

        // Exibe o ticket médio
        var ticketPartial3 = parseFloat(ticket);
        var ticketMiddle3 = ticketPartial3.toFixed(2);
        document.getElementById("ticketMiddle3").innerHTML = ticketMiddle3;

        // Calcula o valor do número de pedidos
        var requestsNumber3 = parseFloat(revenue3) / parseFloat(ticketMiddle3);
        document.getElementById("requestsNumber3").innerHTML = requestsNumber3;

        // Calcula o valor do total investido
        var investedPartial3 = parseFloat(comission3) + parseFloat(canalfy3);
        var totalInvested3 = investedPartial3.toFixed(2);
        document.getElementById("totalInvested3").innerHTML = totalInvested3;

        // Calcula o valor percentual do custo de venda
        var costPartial3 = parseFloat(totalInvested3) / parseFloat(revenue3);
        var costOfSale3 = parseFloat(costPartial3)*100;
        document.getElementById("costOfSale3").innerHTML = Math.round(costOfSale3);

        // ================== Mês 4

        // Número de parceiros
        var partnersNumberPartial4 = parseFloat(partnersNumber3) * parseFloat(basePercent)/100;
        var partnersNumber4 = parseFloat(partnersNumber3) + parseFloat(partnersNumberPartial4);
        document.getElementById("partnersNumber4").innerHTML = partnersNumber4;

        // Exibe a taxa de conversão
        var conversionRate4 = parseFloat(conversionPercent);
        document.getElementById("conversionRate4").innerHTML = conversionRate4;

        // Exibe a taxa de conversão
        var comissionRate4 = parseFloat(comissionPercent);
        document.getElementById("comissionRate4").innerHTML = comissionRate4;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial4 = parseFloat(monthlyCanalfy);
        var canalfy4 = canalfyPartial4.toFixed(2);
        document.getElementById("canalfy4").innerHTML = canalfy4;

        // Calcula o valor de receita
        var revenuePartial4 = parseFloat(ticket) * parseFloat(partnersNumber4) * parseFloat(conversionRate4)/100;
        var revenue4 = revenuePartial4.toFixed(2);
        document.getElementById("revenue4").innerHTML = revenue4;

        // Calcula o valor da comissão de parceiros
        var comissionPartial4 = parseFloat(revenue4) * parseFloat(comissionPercent)/100;
        var comission4 = comissionPartial4.toFixed(2);
        document.getElementById("comission4").innerHTML = comission4;

        // Exibe o ticket médio
        var ticketPartial4 = parseFloat(ticket);
        var ticketMiddle4 = ticketPartial4.toFixed(2);
        document.getElementById("ticketMiddle4").innerHTML = ticketMiddle4;

        // Calcula o valor do número de pedidos
        var requestsNumber4 = parseFloat(revenue4) / parseFloat(ticketMiddle4);
        document.getElementById("requestsNumber4").innerHTML = requestsNumber4;

        // Calcula o valor do total investido
        var investedPartial4 = parseFloat(comission4) + parseFloat(canalfy4);
        var totalInvested4 = investedPartial4.toFixed(2);
        document.getElementById("totalInvested4").innerHTML = totalInvested4;

        // Calcula o valor percentual do custo de venda
        var costPartial4 = parseFloat(totalInvested4) / parseFloat(revenue4);
        var costOfSale4 = parseFloat(costPartial4)*100;
        document.getElementById("costOfSale4").innerHTML = Math.round(costOfSale4);

        
}