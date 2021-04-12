// String.prototype.reverse = function(){
//     return this.split('').reverse().join(''); 
// };
  
// function mascaraMoeda(campo,evento) {
//     var tecla = (!evento) ? window.event.keyCode : evento.which;
//     var valor  =  campo.value.replace(/[^\d]+/gi,'').reverse();
//     var resultado  = "";
//     var mascara = "##.###.###,##".reverse();
//     for (var x=0, y=0; x<mascara.length && y<valor.length;) {
//         if (mascara.charAt(x) != '#') {
//         resultado += mascara.charAt(x);
//         x++;
//         } else {
//         resultado += valor.charAt(y);
//         y++;
//         x++;
//         }
//     }
//     campo.value = resultado.reverse();
// }

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

        // ================== Mês 5

        // Número de parceiros
        var partnersNumberPartial5 = parseFloat(partnersNumber4) * parseFloat(basePercent)/100;
        var partnersNumber5 = parseFloat(partnersNumber4) + parseFloat(partnersNumberPartial5);
        document.getElementById("partnersNumber5").innerHTML = partnersNumber5;

        // Exibe a taxa de conversão
        var conversionRate5 = parseFloat(conversionPercent);
        document.getElementById("conversionRate5").innerHTML = conversionRate5;

        // Exibe a taxa de conversão
        var comissionRate5 = parseFloat(comissionPercent);
        document.getElementById("comissionRate5").innerHTML = comissionRate5;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial5 = parseFloat(monthlyCanalfy);
        var canalfy5 = canalfyPartial5.toFixed(2);
        document.getElementById("canalfy5").innerHTML = canalfy5;

        // Calcula o valor de receita
        var revenuePartial5 = parseFloat(ticket) * parseFloat(partnersNumber5) * parseFloat(conversionRate5)/100;
        var revenue5 = revenuePartial5.toFixed(2);
        document.getElementById("revenue5").innerHTML = revenue5;

        // Calcula o valor da comissão de parceiros
        var comissionPartial5 = parseFloat(revenue5) * parseFloat(comissionPercent)/100;
        var comission5 = comissionPartial5.toFixed(2);
        document.getElementById("comission5").innerHTML = comission5;

        // Exibe o ticket médio
        var ticketPartial5 = parseFloat(ticket);
        var ticketMiddle5 = ticketPartial5.toFixed(2);
        document.getElementById("ticketMiddle5").innerHTML = ticketMiddle5;

        // Calcula o valor do número de pedidos
        var requestsNumber5 = parseFloat(revenue5) / parseFloat(ticketMiddle5);
        document.getElementById("requestsNumber5").innerHTML = requestsNumber5;

        // Calcula o valor do total investido
        var investedPartial5 = parseFloat(comission5) + parseFloat(canalfy5);
        var totalInvested5 = investedPartial5.toFixed(2);
        document.getElementById("totalInvested5").innerHTML = totalInvested5;

        // Calcula o valor percentual do custo de venda
        var costPartial5 = parseFloat(totalInvested5) / parseFloat(revenue5);
        var costOfSale5 = parseFloat(costPartial5)*100;
        document.getElementById("costOfSale5").innerHTML = Math.round(costOfSale5);

        // ================== Mês 6

        // Número de parceiros
        var partnersNumberPartial6 = parseFloat(partnersNumber5) * parseFloat(basePercent)/100;
        var partnersNumber6 = parseFloat(partnersNumber5) + parseFloat(partnersNumberPartial6);
        document.getElementById("partnersNumber6").innerHTML = partnersNumber6;

        // Exibe a taxa de conversão
        var conversionRate6 = parseFloat(conversionPercent);
        document.getElementById("conversionRate6").innerHTML = conversionRate6;

        // Exibe a taxa de conversão
        var comissionRate6 = parseFloat(comissionPercent);
        document.getElementById("comissionRate6").innerHTML = comissionRate6;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial6 = parseFloat(monthlyCanalfy);
        var canalfy6 = canalfyPartial6.toFixed(2);
        document.getElementById("canalfy6").innerHTML = canalfy6;

        // Calcula o valor de receita
        var revenuePartial6 = parseFloat(ticket) * parseFloat(partnersNumber6) * parseFloat(conversionRate6)/100;
        var revenue6 = revenuePartial6.toFixed(2);
        document.getElementById("revenue6").innerHTML = revenue6;

        // Calcula o valor da comissão de parceiros
        var comissionPartial6 = parseFloat(revenue6) * parseFloat(comissionPercent)/100;
        var comission6 = comissionPartial6.toFixed(2);
        document.getElementById("comission6").innerHTML = comission6;

        // Exibe o ticket médio
        var ticketPartial6 = parseFloat(ticket);
        var ticketMiddle6 = ticketPartial6.toFixed(2);
        document.getElementById("ticketMiddle6").innerHTML = ticketMiddle6;

        // Calcula o valor do número de pedidos
        var requestsNumber6 = parseFloat(revenue6) / parseFloat(ticketMiddle6);
        document.getElementById("requestsNumber6").innerHTML = requestsNumber6;

        // Calcula o valor do total investido
        var investedPartial6 = parseFloat(comission6) + parseFloat(canalfy6);
        var totalInvested6 = investedPartial6.toFixed(2);
        document.getElementById("totalInvested6").innerHTML = totalInvested6;

        // Calcula o valor percentual do custo de venda
        var costPartial6 = parseFloat(totalInvested6) / parseFloat(revenue6);
        var costOfSale6 = parseFloat(costPartial6)*100;
        document.getElementById("costOfSale6").innerHTML = Math.round(costOfSale6);

        // ================== Mês 7

        // Número de parceiros
        var partnersNumberPartial7 = parseFloat(partnersNumber6) * parseFloat(basePercent)/100;
        var partnersNumber7 = parseFloat(partnersNumber6) + parseFloat(partnersNumberPartial7);
        document.getElementById("partnersNumber7").innerHTML = partnersNumber7;

        // Exibe a taxa de conversão
        var conversionRate7 = parseFloat(conversionPercent);
        document.getElementById("conversionRate7").innerHTML = conversionRate7;

        // Exibe a taxa de conversão
        var comissionRate7 = parseFloat(comissionPercent);
        document.getElementById("comissionRate7").innerHTML = comissionRate7;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial7 = parseFloat(monthlyCanalfy);
        var canalfy7 = canalfyPartial7.toFixed(2);
        document.getElementById("canalfy7").innerHTML = canalfy7;

        // Calcula o valor de receita
        var revenuePartial7 = parseFloat(ticket) * parseFloat(partnersNumber7) * parseFloat(conversionRate7)/100;
        var revenue7 = revenuePartial7.toFixed(2);
        document.getElementById("revenue7").innerHTML = revenue7;

        // Calcula o valor da comissão de parceiros
        var comissionPartial7 = parseFloat(revenue7) * parseFloat(comissionPercent)/100;
        var comission7 = comissionPartial7.toFixed(2);
        document.getElementById("comission7").innerHTML = comission7;

        // Exibe o ticket médio
        var ticketPartial7 = parseFloat(ticket);
        var ticketMiddle7 = ticketPartial7.toFixed(2);
        document.getElementById("ticketMiddle7").innerHTML = ticketMiddle7;

        // Calcula o valor do número de pedidos
        var requestsNumber7 = parseFloat(revenue7) / parseFloat(ticketMiddle7);
        document.getElementById("requestsNumber7").innerHTML = requestsNumber7;

        // Calcula o valor do total investido
        var investedPartial7 = parseFloat(comission7) + parseFloat(canalfy7);
        var totalInvested7 = investedPartial7.toFixed(2);
        document.getElementById("totalInvested7").innerHTML = totalInvested7;

        // Calcula o valor percentual do custo de venda
        var costPartial7 = parseFloat(totalInvested7) / parseFloat(revenue7);
        var costOfSale7 = parseFloat(costPartial7)*100;
        document.getElementById("costOfSale7").innerHTML = Math.round(costOfSale7);

        // ================== Mês 8

        // Número de parceiros
        var partnersNumberPartial8 = parseFloat(partnersNumber7) * parseFloat(basePercent)/100;
        var partnersNumber8 = parseFloat(partnersNumber7) + parseFloat(partnersNumberPartial8);
        document.getElementById("partnersNumber8").innerHTML = partnersNumber8;

        // Exibe a taxa de conversão
        var conversionRate8 = parseFloat(conversionPercent);
        document.getElementById("conversionRate8").innerHTML = conversionRate8;

        // Exibe a taxa de conversão
        var comissionRate8 = parseFloat(comissionPercent);
        document.getElementById("comissionRate8").innerHTML = comissionRate8;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial8 = parseFloat(monthlyCanalfy);
        var canalfy8 = canalfyPartial8.toFixed(2);
        document.getElementById("canalfy8").innerHTML = canalfy8;

        // Calcula o valor de receita
        var revenuePartial8 = parseFloat(ticket) * parseFloat(partnersNumber8) * parseFloat(conversionRate8)/100;
        var revenue8 = revenuePartial8.toFixed(2);
        document.getElementById("revenue8").innerHTML = revenue8;

        // Calcula o valor da comissão de parceiros
        var comissionPartial8 = parseFloat(revenue8) * parseFloat(comissionPercent)/100;
        var comission8 = comissionPartial8.toFixed(2);
        document.getElementById("comission8").innerHTML = comission8;

        // Exibe o ticket médio
        var ticketPartial8 = parseFloat(ticket);
        var ticketMiddle8 = ticketPartial8.toFixed(2);
        document.getElementById("ticketMiddle8").innerHTML = ticketMiddle8;

        // Calcula o valor do número de pedidos
        var requestsNumber8 = parseFloat(revenue8) / parseFloat(ticketMiddle8);
        document.getElementById("requestsNumber8").innerHTML = requestsNumber8;

        // Calcula o valor do total investido
        var investedPartial8 = parseFloat(comission8) + parseFloat(canalfy8);
        var totalInvested8 = investedPartial8.toFixed(2);
        document.getElementById("totalInvested8").innerHTML = totalInvested8;

        // Calcula o valor percentual do custo de venda
        var costPartial8 = parseFloat(totalInvested8) / parseFloat(revenue8);
        var costOfSale8 = parseFloat(costPartial8)*100;
        document.getElementById("costOfSale8").innerHTML = Math.round(costOfSale8);

        // ================== Mês 9

        // Número de parceiros
        var partnersNumberPartial9 = parseFloat(partnersNumber8) * parseFloat(basePercent)/100;
        var partnersNumber9 = parseFloat(partnersNumber8) + parseFloat(partnersNumberPartial9);
        document.getElementById("partnersNumber9").innerHTML = partnersNumber9;

        // Exibe a taxa de conversão
        var conversionRate9 = parseFloat(conversionPercent);
        document.getElementById("conversionRate9").innerHTML = conversionRate9;

        // Exibe a taxa de conversão
        var comissionRate9 = parseFloat(comissionPercent);
        document.getElementById("comissionRate9").innerHTML = comissionRate9;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial9 = parseFloat(monthlyCanalfy);
        var canalfy9 = canalfyPartial9.toFixed(2);
        document.getElementById("canalfy9").innerHTML = canalfy9;

        // Calcula o valor de receita
        var revenuePartial9 = parseFloat(ticket) * parseFloat(partnersNumber9) * parseFloat(conversionRate9)/100;
        var revenue9 = revenuePartial9.toFixed(2);
        document.getElementById("revenue9").innerHTML = revenue9;

        // Calcula o valor da comissão de parceiros
        var comissionPartial9 = parseFloat(revenue9) * parseFloat(comissionPercent)/100;
        var comission9 = comissionPartial9.toFixed(2);
        document.getElementById("comission9").innerHTML = comission9;

        // Exibe o ticket médio
        var ticketPartial9 = parseFloat(ticket);
        var ticketMiddle9 = ticketPartial9.toFixed(2);
        document.getElementById("ticketMiddle9").innerHTML = ticketMiddle9;

        // Calcula o valor do número de pedidos
        var requestsNumber9 = parseFloat(revenue9) / parseFloat(ticketMiddle9);
        document.getElementById("requestsNumber9").innerHTML = requestsNumber9;

        // Calcula o valor do total investido
        var investedPartial9 = parseFloat(comission9) + parseFloat(canalfy9);
        var totalInvested9 = investedPartial9.toFixed(2);
        document.getElementById("totalInvested9").innerHTML = totalInvested9;

        // Calcula o valor percentual do custo de venda
        var costPartial9 = parseFloat(totalInvested9) / parseFloat(revenue9);
        var costOfSale9 = parseFloat(costPartial9)*100;
        document.getElementById("costOfSale9").innerHTML = Math.round(costOfSale9);

        // ================== Mês 10

        // Número de parceiros
        var partnersNumberPartial10 = parseFloat(partnersNumber9) * parseFloat(basePercent)/100;
        var partnersNumber10 = parseFloat(partnersNumber9) + parseFloat(partnersNumberPartial10);
        document.getElementById("partnersNumber10").innerHTML = partnersNumber10;

        // Exibe a taxa de conversão
        var conversionRate10 = parseFloat(conversionPercent);
        document.getElementById("conversionRate10").innerHTML = conversionRate10;

        // Exibe a taxa de conversão
        var comissionRate10 = parseFloat(comissionPercent);
        document.getElementById("comissionRate10").innerHTML = comissionRate10;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial10 = parseFloat(monthlyCanalfy);
        var canalfy10 = canalfyPartial10.toFixed(2);
        document.getElementById("canalfy10").innerHTML = canalfy10;

        // Calcula o valor de receita
        var revenuePartial10 = parseFloat(ticket) * parseFloat(partnersNumber10) * parseFloat(conversionRate10)/100;
        var revenue10 = revenuePartial10.toFixed(2);
        document.getElementById("revenue10").innerHTML = revenue10;

        // Calcula o valor da comissão de parceiros
        var comissionPartial10 = parseFloat(revenue10) * parseFloat(comissionPercent)/100;
        var comission10 = comissionPartial10.toFixed(2);
        document.getElementById("comission10").innerHTML = comission10;

        // Exibe o ticket médio
        var ticketPartial10 = parseFloat(ticket);
        var ticketMiddle10 = ticketPartial10.toFixed(2);
        document.getElementById("ticketMiddle10").innerHTML = ticketMiddle10;

        // Calcula o valor do número de pedidos
        var requestsNumber10 = parseFloat(revenue10) / parseFloat(ticketMiddle10);
        document.getElementById("requestsNumber10").innerHTML = requestsNumber10;

        // Calcula o valor do total investido
        var investedPartial10 = parseFloat(comission10) + parseFloat(canalfy10);
        var totalInvested10 = investedPartial10.toFixed(2);
        document.getElementById("totalInvested10").innerHTML = totalInvested10;

        // Calcula o valor percentual do custo de venda
        var costPartial10 = parseFloat(totalInvested10) / parseFloat(revenue10);
        var costOfSale10 = parseFloat(costPartial10)*100;
        document.getElementById("costOfSale10").innerHTML = Math.round(costOfSale10);

        // ================== Mês 11

        // Número de parceiros
        var partnersNumberPartial11 = parseFloat(partnersNumber10) * parseFloat(basePercent)/100;
        var partnersNumber11 = parseFloat(partnersNumber10) + parseFloat(partnersNumberPartial11);
        document.getElementById("partnersNumber11").innerHTML = partnersNumber11;

        // Exibe a taxa de conversão
        var conversionRate11 = parseFloat(conversionPercent);
        document.getElementById("conversionRate11").innerHTML = conversionRate11;

        // Exibe a taxa de conversão
        var comissionRate11 = parseFloat(comissionPercent);
        document.getElementById("comissionRate11").innerHTML = comissionRate11;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial11 = parseFloat(monthlyCanalfy);
        var canalfy11 = canalfyPartial11.toFixed(2);
        document.getElementById("canalfy11").innerHTML = canalfy11;

        // Calcula o valor de receita
        var revenuePartial11 = parseFloat(ticket) * parseFloat(partnersNumber11) * parseFloat(conversionRate11)/100;
        var revenue11 = revenuePartial11.toFixed(2);
        document.getElementById("revenue11").innerHTML = revenue11;

        // Calcula o valor da comissão de parceiros
        var comissionPartial11 = parseFloat(revenue11) * parseFloat(comissionPercent)/100;
        var comission11 = comissionPartial11.toFixed(2);
        document.getElementById("comission11").innerHTML = comission11;

        // Exibe o ticket médio
        var ticketPartial11 = parseFloat(ticket);
        var ticketMiddle11 = ticketPartial11.toFixed(2);
        document.getElementById("ticketMiddle11").innerHTML = ticketMiddle11;

        // Calcula o valor do número de pedidos
        var requestsNumber11 = parseFloat(revenue11) / parseFloat(ticketMiddle11);
        document.getElementById("requestsNumber11").innerHTML = requestsNumber11;

        // Calcula o valor do total investido
        var investedPartial11 = parseFloat(comission11) + parseFloat(canalfy11);
        var totalInvested11 = investedPartial11.toFixed(2);
        document.getElementById("totalInvested11").innerHTML = totalInvested11;

        // Calcula o valor percentual do custo de venda
        var costPartial11 = parseFloat(totalInvested11) / parseFloat(revenue11);
        var costOfSale11 = parseFloat(costPartial11)*100;
        document.getElementById("costOfSale11").innerHTML = Math.round(costOfSale11);

        // ================== Mês 12

        // Número de parceiros
        var partnersNumberPartial12 = parseFloat(partnersNumber11) * parseFloat(basePercent)/100;
        var partnersNumber12 = parseFloat(partnersNumber11) + parseFloat(partnersNumberPartial12);
        document.getElementById("partnersNumber12").innerHTML = partnersNumber12;

        // Exibe a taxa de conversão
        var conversionRate12 = parseFloat(conversionPercent);
        document.getElementById("conversionRate12").innerHTML = conversionRate12;

        // Exibe a taxa de conversão
        var comissionRate12 = parseFloat(comissionPercent);
        document.getElementById("comissionRate12").innerHTML = comissionRate12;

        // Exibe a mensalidade da Canalfy
        var canalfyPartial12 = parseFloat(monthlyCanalfy);
        var canalfy12 = canalfyPartial12.toFixed(2);
        document.getElementById("canalfy12").innerHTML = canalfy12;

        // Calcula o valor de receita
        var revenuePartial12 = parseFloat(ticket) * parseFloat(partnersNumber12) * parseFloat(conversionRate12)/100;
        var revenue12 = revenuePartial12.toFixed(2);
        document.getElementById("revenue12").innerHTML = revenue12;

        // Calcula o valor da comissão de parceiros
        var comissionPartial12 = parseFloat(revenue12) * parseFloat(comissionPercent)/100;
        var comission12 = comissionPartial12.toFixed(2);
        document.getElementById("comission12").innerHTML = comission12;

        // Exibe o ticket médio
        var ticketPartial12 = parseFloat(ticket);
        var ticketMiddle12 = ticketPartial12.toFixed(2);
        document.getElementById("ticketMiddle12").innerHTML = ticketMiddle12;

        // Calcula o valor do número de pedidos
        var requestsNumber12 = parseFloat(revenue12) / parseFloat(ticketMiddle12);
        document.getElementById("requestsNumber12").innerHTML = requestsNumber12;

        // Calcula o valor do total investido
        var investedPartial12 = parseFloat(comission12) + parseFloat(canalfy12);
        var totalInvested12 = investedPartial12.toFixed(2);
        document.getElementById("totalInvested12").innerHTML = totalInvested12;

        // Calcula o valor percentual do custo de venda
        var costPartial12 = parseFloat(totalInvested12) / parseFloat(revenue12);
        var costOfSale12 = parseFloat(costPartial12)*100;
        document.getElementById("costOfSale12").innerHTML = Math.round(costOfSale12);

        // ================== Resumo total

        var totalRevenuePartial = parseFloat(revenue) + parseFloat(revenue2) + parseFloat(revenue3) + parseFloat(revenue4) + parseFloat(revenue5) + parseFloat(revenue6) + parseFloat(revenue7) + parseFloat(revenue8) + parseFloat(revenue9) + parseFloat(revenue10) + parseFloat(revenue11) + parseFloat(revenue12);
        var totalRevenue = totalRevenuePartial.toFixed(2);
        document.getElementById("totalRevenue").innerHTML = totalRevenue;

        var totalPartnersPartial = parseFloat(partnersNumber) + parseFloat(partnersNumber2) + parseFloat(partnersNumber3) + parseFloat(partnersNumber4) + parseFloat(partnersNumber5) + parseFloat(partnersNumber6) + parseFloat(partnersNumber7) + parseFloat(partnersNumber8) + parseFloat(partnersNumber9) + parseFloat(partnersNumber10) + parseFloat(partnersNumber11) + parseFloat(partnersNumber12);
        var totalPartners = totalPartnersPartial.toFixed(2);
        document.getElementById("totalPartners").innerHTML = Math.round(totalPartners);


        // ================== Ações do botão

        
        
}