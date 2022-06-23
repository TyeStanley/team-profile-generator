// Creates a function to generate HTML for Team Profile Generator
function generateIndexPage(data) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO" crossorigin="anonymous">
    <title>Team Profile Generator</title>
  </head>
  <body>
  <header class="bg-danger p5 text-center text-white mb-4 p-3">
    <h1>My Team</h1>
  </header>
  <main class="row justify-content-center">
    ${cardInfo(data)}
  </main>
  </body>
  </html>
  `
}
// A for loop to decide if a card is either manager, engineer, intern
function cardInfo(data) {
  let template = '';
  for (let i = 0; i < data.length; i++) {
    if (data[i].getRole() === 'Manager') {
      template += `
      <div class="card m-5">
        <div class="card-title bg-primary text-white">
          <h2 class="pl-2 pr-2 pt-2">${data[i].getName()}</h2>
          <h3 class="pl-2 pr-2 pt-2">${data[i].getRole()}</h2>
        </div>
        <div class="card-body pb-4 bg-light">
          <p>ID: ${data[i].getId()}</p>
          <p>Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></p>
          <p>Office Number: ${data[i].officeNumber}</p>
        </div>
      </div>
      `
    }
    if (data[i].getRole() === 'Engineer') {
      template += `
      <div class="card m-5">
        <div class="card-title bg-primary text-white">
          <h2 class="pl-2 pr-2 pt-2">${data[i].getName()}</h2>
          <h3 class="pl-2 pr-2 pt-2">${data[i].getRole()}</h2>
        </div>
        <div class="card-body pb-4 bg-light">
          <p>ID: ${data[i].getId()}</p>
          <p>Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></p>
          <p>Github: <a href="https://github.com/${data[i].getGithub()}" target="_blank">${data[i].getGithub()}</a></p>
        </div>
      </div>
      `
    }
    if (data[i].getRole() === 'Intern') {
      template += `
      <div class="card m-5">
        <div class="card-title bg-primary text-white">
          <h2 class="pl-2 pr-2 pt-2">${data[i].getName()}</h2>
          <h3 class="pl-2 pr-2 pt-2">${data[i].getRole()}</h2>
        </div>
        <div class="card-body pb-4 bg-light">
          <p>ID: ${data[i].getId()}</p>
          <p>Email: <a href="mailto:${data[i].getEmail()}">${data[i].getEmail()}</a></p>
          <p>School: ${data[i].getSchool()}</p>
        </div>
      </div>
      `
    }
  }
  return template;
}
// Exports the html template
module.exports = generateIndexPage;