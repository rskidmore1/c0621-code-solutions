/* exported titleCase */

// split arg title by ' ' into array
// Enter loop over array
// Switch statement for excluded words
// exclude words with 4 characters
// Process 'api' as 'API'
// Process varieties of the word "JavaScript"
// included spcial exceptions

function titleCase(title) {
  var titleSplit = title.split(' ');
  var titleFinal = [];
  for (var i = 0; i < titleSplit.length; i++) {
    if (titleSplit[i].toLowerCase() === 'javascript') {
      titleFinal.push('JavaScript');

    } else if (titleSplit[i].toLowerCase() === 'javascript:') {
      titleFinal.push('JavaScript:');

    } else if (i === 0) {
      titleFinal.push(titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1, titleSplit[i].length));

    } else if (i > 0 && titleSplit[i - 1].includes(':')) {

      titleFinal.push(titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1, titleSplit[i].length));

    } else if (titleSplit[i].includes('-') === true) {
      var hyphSplit = titleSplit[i].split('-');
      var hyphCapped = hyphSplit[0][0].toUpperCase() + hyphSplit[0].slice(1, hyphSplit[0].length) + '-' + hyphSplit[1][0].toUpperCase() + hyphSplit[1].slice(1, hyphSplit[1].length);
      titleFinal.push(hyphCapped);
    } else if (titleSplit[i].length > 3) {
      titleFinal.push(titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1, titleSplit[i].length));

    } else if (titleSplit[i] === 'api') {
      titleFinal.push('API');
    } else if (titleSplit[i] === 'and') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'or') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'nor') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'but') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'a') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'as') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'at') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'by') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'for') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'in') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'of') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'on') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'per') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'to') {
      titleFinal.push(titleSplit[i]);
    } else if (titleSplit[i] === 'the') {
      titleFinal.push(titleSplit[i]);

    } else if (titleSplit[i] === 'an') {
      titleFinal.push(titleSplit[i]);

    } else {
      titleFinal.push(titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1, titleSplit[i].length));

    }

  }

  var capString = titleFinal.join(' ');

  return capString;
}
