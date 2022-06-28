var json = [
  {"dia1": "s", "fatura" : 1010},
  {"dia2": "t", "fatura" : 1200},
  {"dia3": "q", "fatura" : 1220},
  {"dia4": "q", "fatura" : 1020},
  {"dia5": "s", "fatura" : 1130},
  {"dia8": "s", "fatura" : 1140},
  {"dia9": "t", "fatura" : 1100},
  {"dia10": "q", "fatura" : 1210},
  {"dia11": "q", "fatura" : 1400},
  {"dia12": "s", "fatura" : 1150},
  {"dia15": "s", "fatura" : 1230},
  {"dia16": "t", "fatura" : 1160},
  {"dia17": "q", "fatura" : 1170},
  {"dia18": "q", "fatura" : 1180},
  {"dia19": "s", "fatura" : 1190},
  {"dia22": "s", "fatura" : 1100},
  {"dia23": "t", "fatura" : 1105},
  {"dia24": "q", "fatura" : 1110},
  {"dia25": "q", "fatura" : 1120},
  {"dia26": "s", "fatura" : 2000},
  {"dia29": "s", "fatura" : 2010},
  {"dia30": "t", "fatura" : 2020}
];


var soma = 0;
var aux;
var auxSort;
var auxCont = 0;

for(var cont = 0; cont < json.length; cont++){
  soma+= json[cont].fatura;
  document.write("Faturamento dia : " +cont+ " foi de : " + json[cont].fatura + "</br>");
  if(json[cont].fatura > 1271){
    console.log(auxCont);
    auxCont++;
  }
}
aux = soma/22;
document.write("</br>O valor total do faturamento é : "+ soma + "</br>A média mensal de faturamento é: " + aux.toFixed(2) + "</br>");



for (var i = 0; i < json.length; i++){
  for(var j = i + 1; j < json.length; j++){
    if(json[i].fatura > json[j].fatura){
      auxSort = json[i].fatura;
      json[i].fatura = json[j].fatura;
      json[j].fatura = auxSort; 
    }
  }
}

document.write("</br> O menor valor de faturamento ocorrido no mês é: " + json[0].fatura + "</br> O maior valor de faturamento ocorrido no mês é: " + json[21].fatura + "</br> O número de dias em que o faturamento foi maior do que a média é: " + auxCont);




