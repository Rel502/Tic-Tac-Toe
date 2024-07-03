function init() {
    render();
}

function render() {
    let content = document.getElementById('content');
    let tableHTML = '<table class="tic-tac-toe">';

    for (let i = 0; i < 3; i++) {
        tableHTML += '<tr>';

        for (let j = 0; j < 3; j++) {
            const index = i * 3 + j;
            let value = '';
            let cellClass = '';

            if (fields[index] === 'cross') {
                value = generateCrossSVG();
                cellClass = 'cross';
            } else if (fields[index] === 'circle') {
                value = generateCircleSVG();
                cellClass = 'circle';
            }

            tableHTML += `<td class="${cellClass}" onclick="makeMove(${index})">${value}</td>`;
        }

        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    content.innerHTML = tableHTML;
}

function makeMove(index) {
    if (fields[index] === null) {
        fields[index] = 'X'; // Beispiel: Spieler X macht einen Zug
        render();
    }
}