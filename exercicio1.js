const fs = require('fs');

async function readAndFilter() {
    const data = await fs.promises.readFile('liga.json', 'utf8');

    const teams = JSON.parse(data);

    const filteredTeams = teams.filter(team => team.goals > 10);

    return filteredTeams;
}

async function saveResult(filteredTeams) {
    const jsonData = JSON.stringify(filteredTeams, null, 2);

    await fs.promises.writeFile('liga10goals.json', jsonData);
}

async function main() {
    const filteredTeams = await readAndFilter();

    await saveResult(filteredTeams);
}

main();