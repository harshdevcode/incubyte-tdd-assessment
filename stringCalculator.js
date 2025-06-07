function Add(numbers)
{
    if (numbers === '') return 0;

    let delimiters = [',', '\n'];

    const regex = new RegExp(delimiters.join('|'));
    const numberList = numbers.split(regex)
        .map(n => parseInt(n, 10))
        .filter(n => !isNaN(n));

}


module.exports = { Add };