let currentPlayer = 'circle';

function init() {
    document.addEventListener('DOMContentLoaded', (event) => {
        render();
    })
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
        if (checkForWinner()) {
            return;
        }
    }
}

function addCellClass(selectedCell) {
    selectedCell.classList.add(currentPlayer === 'circle' ? 'cross' : 'circle');
}

function currentPlayerIsCircle() {
    return currentPlayer === 'circle';
}

// WINNING THE GAME

function checkForWinner() {
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
        [0, 4, 8], [2, 4, 6] // diagonal
    ];

    for (const combination of winningCombinations) {
        const [a, b, c] = combination;
        if (fields[a] && fields[a] === fields[b] && fields[a] === fields[c]) {
            drawWinningLine(a, b, c);
            return true;
        }
    }
    return false;
}

function drawWinningLine(a, b, c) {
    const cellA = document.getElementById(`cell${a}`);
    const cellB = document.getElementById(`cell${b}`);
    const cellC = document.getElementById(`cell${c}`);

    const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    line.setAttribute('x1', cellA.offsetLeft + cellA.offsetWidth / 2);
    line.setAttribute('y1', cellA.offsetTop + cellA.offsetHeight / 2);
    line.setAttribute('x2', cellC.offsetLeft + cellC.offsetWidth / 2);
    line.setAttribute('y2', cellC.offsetTop + cellC.offsetHeight / 2);
    line.setAttribute('stroke', 'white');
    line.setAttribute('stroke-width', '5');

    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'winning-line');
    svg.appendChild(line);

    const content = document.getElementById('content');
    content.insertBefore(svg, content.firstChild);

    // document.getElementById('content').appendChild(svg);
}

// Initialize the game
init();