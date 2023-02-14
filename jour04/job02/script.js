async function fetchData(tableau, cle) {
    // On attends que le fetch se termine pour le stocker dans une variable
    const response = await fetch(tableau);
    const data = await response.json();
    console.log(data[cle])
}
  
fetchData('tableau.json', 'name');