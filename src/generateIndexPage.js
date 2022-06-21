// Creates a function to generate HTML for Team Profile Generator
function generateIndexPage(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
  </head>
  <body>
  <header>
    <h1 class="title">My Team</h1>
  </header>
  <main>
    ${cardInfo(data)} // can a function run with a for loop to generate multiple info cards?
  </main>
  </body>
  </html>
  `
}

function cardInfo(teamArray) {

  let test = '';
  for (let i = 0; i > teamArray; i++) {
    if (teamArray[i].getRole() === 'Manager') {
      test += `card`
    }
  test += `
  <p>
  ${teamArray[i].name}
  ${teamArray[i].id}
  </p>
  `
  }
  return test;
}


module.exports = generateIndexPage;