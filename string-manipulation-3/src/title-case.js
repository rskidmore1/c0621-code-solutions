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
    switch (titleSplit[i]) {

      case 'and':
      case 'or':
      case 'nor':
      case 'but':
      case 'a':
      case 'as':
      case 'at':
      case 'by':
      case 'for':
      case 'in':
      case 'of':
      case 'on':
      case 'per':
      case 'to' :
        titleFinal.push(titleSplit[i]);
        break;
      case 'an':

        if (i === 0) {
          titleFinal.push(titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1, titleSplit[i].length));
        } else if (titleSplit[i - 1][titleSplit[i - 1].length - 1] === ':') {
          titleFinal.push(titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1, titleSplit[i].length));
        } else {
          titleFinal.push(titleSplit[i]);
        }
        break;

      case 'the':
        if (i === 0) {
          titleFinal.push(titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1, titleSplit[i].length));
        } else if (titleSplit[i - 1][titleSplit[i - 1].length - 1] === ':') {
          titleFinal.push(titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1, titleSplit[i].length));
        } else {
          titleFinal.push(titleSplit[i]);
        }

        break;

      case titleSplit[i].length < 5:
        titleFinal.push(titleSplit[i]);
        break;

      case 'api':
        titleFinal.push('API');
        break;
      case 'Javascript':
        titleFinal.push('JavaScript');
        break;
      case 'javascript':
        titleFinal.push('JavaScript');
        break;
      case 'JavaScript':
        titleFinal.push('JavaScript');
        break;
      case 'Javascript:':
        titleFinal.push('JavaScript:');
        break;
      case 'javascript:':
        titleFinal.push('JavaScript:');
        break;

      default:
        if (titleSplit[i].includes('-') === true) {
          var hyphSplit = titleSplit[i].split('-');
          var hyphCapped = hyphSplit[0][0].toUpperCase() + hyphSplit[0].slice(1, hyphSplit[0].length) + '-' + hyphSplit[1][0].toUpperCase() + hyphSplit[1].slice(1, hyphSplit[1].length);
          titleFinal.push(hyphCapped);
        } else {
          titleFinal.push(titleSplit[i][0].toUpperCase() + titleSplit[i].slice(1, titleSplit[i].length));
        }
    }
  }
  var capString = titleFinal.join(' ');

  return capString;
}
