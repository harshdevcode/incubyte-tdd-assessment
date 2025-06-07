function Add(numbers)
{
    if (numbers === '') return 0;

    let delimiters = [',', '\n'];

    if (numbers.startsWith('//')) {
    const multiDelimiterMatch = numbers.match(/^\/\/\[(.*)\]\n/);
    if (multiDelimiterMatch) {
      const allDelimiters = multiDelimiterMatch[1].split('][');
      delimiters = allDelimiters.map(d => escapeRegExp(d));
      numbers = numbers.slice(multiDelimiterMatch[0].length);
    } else {
      const simpleDelimiterMatch = numbers.match(/^\/\/(.)\n/);
      if (simpleDelimiterMatch) {
        delimiters = [escapeRegExp(simpleDelimiterMatch[1])];
        numbers = numbers.slice(4);
      }
    }
  }
    const regex = new RegExp(delimiters.join('|'));
    const numberList = numbers.split(regex)
        .map(n => parseInt(n, 10))
        .filter(n => !isNaN(n));

}


module.exports = { Add };