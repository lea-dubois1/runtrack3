function tri(numbers,order)
{
    if (order == "asc")
    {
        return numbers.sort((a, b) => a - b);

    }else if(order == "desc")
    {
        return numbers.sort((a, b) => b - a)
    }
}

numTab1 = ['1', '127', '82', '97', '80', '18', '7']
numTab2 = ['1', '290', '17', '178', '177', '12', '28']

console.log(tri(numTab1, 'asc'))
console.log(tri(numTab2, 'desc'))