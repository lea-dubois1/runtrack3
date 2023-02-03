function sommenombrepremiers(var1, var2) {
    
    let var1Prem = true
    let var2Prem = true

    for (let i = 2; i < var1; i++) {

        if (var1 % i == 0) {
            var1Prem = false
            return false
        }
    }
    
    for (let i = 2; i < var2; i++) {

        if (var2 % i == 0) {
            var2Prem = false
            return false
        }
    }

    if (var1Prem == true && var2Prem == true) {
        let somme = var1 + var2
        return somme
    }
}

console.log(sommenombrepremiers(1, 4));