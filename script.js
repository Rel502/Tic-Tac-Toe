let currentPlayer = 'circle';

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

            tableHTML += `
                <td id="cell${index}"
                    class="${cellClass}" 
                    onclick="makeMove(${index})">
                    ${value}
                </td>
            `;
        }

        tableHTML += '</tr>';
    }

    tableHTML += '</table>';
    content.innerHTML = tableHTML;
}

function makeMove(index) {
    let selectedCell = document.getElementById(`cell${index}`);

    if (fields[index] === null) {
        if (currentPlayerIsCircle()) {
            fields[index] = 'circle';
            selectedCell.innerHTML = generateCircleSVG();
            currentPlayer = 'cross';
        } else {
            fields[index] = 'cross';
            selectedCell.innerHTML = generateCrossSVG();
            currentPlayer = 'circle';
        }
        addCellClass(selectedCell);
    }
}

function addCellClass(selectedCell) {
    selectedCell.classList.add(currentPlayer === 'circle' ? 'cross' : 'circle');
}

function currentPlayerIsCircle() {
    return currentPlayer === 'circle';
}