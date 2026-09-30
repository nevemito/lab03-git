const fs = require('fs');

// Função 1: vai buscar os filmes à API e devolve só os títulos
async function fetchMovies() {
  const response = await fetch('https://api.sampleapis.com/movies/animation');

  if (!response.ok) {
    throw new Error(`Erro HTTP: ${response.status}`);
  }

  const movies = await response.json();

  // Extrai apenas os títulos
  const titles = movies.map(movie => movie.title);

  return titles;
}

// Função 2: recebe os títulos e guarda num ficheiro JSON
async function saveTitles(titles) {
  const json = JSON.stringify(titles, null, 2);
  await fs.promises.writeFile('animationTitles.json', json, 'utf8');
  console.log('Ficheiro animationTitles.json criado com sucesso!');
}

// Função principal: junta tudo
async function main() {
  try {
    const titles = await fetchMovies();
    await saveTitles(titles);
  } catch (error) {
    console.error('Erro:', error.message);
  }
}

main();