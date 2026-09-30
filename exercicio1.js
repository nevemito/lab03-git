import fs from 'fs';

async function readAndFilter() {
    const data = await fs.promises.readFile('./json/liga.json', 'utf8');
    const teams = JSON.parse(data);
    const filtered = teams.filter(team => team.goals > 10);
    return filtered;
}

async function saveResult(filteredTeams) {
    const json = JSON.stringify(filteredTeams);
    await fs.promises.writeFile('./liga10goals.json', json);
}

async function main() {
    const filteredTeams = await readAndFilter();
    await saveResult(filteredTeams);
    console.log('Ficheiro liga10goals.json criado com sucesso!');
}

main();