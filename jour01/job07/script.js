function jourtravaille(date) {

    const joursferies = ["01-01-2020", "04-13-2020", "05-01-2020", "05-08-2020", "05-21-2020", "06-01-2020", "07-14-2020", "08-15-2020", "11-01-2020", "11-11-2020", "12-25-2020"]

    for (let i = 0; i < joursferies.length; i++) {

        let myDate = new Date(date);
        let ferieDate = new Date(joursferies[i]);
        let jour = myDate.toLocaleString('fr', {  weekday: 'long' });
        let num = myDate.getDate();
        let mois = myDate.toLocaleString('fr', {  month: 'long' });
        let année = myDate.getFullYear();

        if (myDate.getTime() == ferieDate.getTime()) {
            return "Le " + jour + " " + num + " " + mois + " " + année + " est un jour férié";
        } else if (jour == "samedi" || jour == "dimanche") {
            return "Le " + jour + " " + num + " " + mois + " " + année + " est un weekend";
        } else {
            return "Le " + jour + " " + num + " " + mois + " " + année + " est un jour travaillé";
        }
    }

}

console.log(jourtravaille('01/01/2020'));