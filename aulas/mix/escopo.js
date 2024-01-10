function exemploEscopo() {
    var variavelVar = 1;
    let variavelLet = 2;
  
    if (true) {
      var variavelVarBloco = 3;
      let variavelLetBloco = 4;
    }
  
    console.log(variavelVar); // 1 (escopo de função)
    console.log(variavelLet); // 2 (escopo de bloco)
    console.log(variavelVarBloco); // 3 (escopo de função, devido a var)
  //  console.log(variavelLetBloco); // Gera um erro, pois está fora do escopo
  }
  exemploEscopo()