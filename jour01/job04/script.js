function bisextile(année) {

    let result;
    
    if (année % 4 == 0 && année % 100 != 0 || année % 100 == 0 && année % 400 == 0) {
        result = true;
    } else {
        result = false
    }

    return result;

}

console.log(bisextile(2022));