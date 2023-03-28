// GETTING GENERAL HTML ELEMENTS
const body = $('body');
let turnIndicator = $('#playerTurn');
const resetBtn = $('#resetBtn');
let allTd = $('td')
let alertDiv = $('#alert');
let alertMessage = $('#alertMessage');
let closeAlert = $('#closeAlert');

// COUNTS TIMES BOARD IS CLICKED
let count = 0

// KEEPS TRACK OF PLAYER CHOICES
let xArray = [
    ['', '',''],
    ['','',''],
    ['','','']
];

let oArray = [
    ['', '',''],
    ['','',''],
    ['','','']
];

// CHANGES CELL TEXT WHEN CLICKED
const tableClickHandler = (e) => {
    let target = e.target;

    if ($(target).is('td')) {
        if ($(target).text() === '') {
            $(target).text($(turnIndicator).text())

            let cellId = $(target).attr('id') 
            pushToArray(cellId);

            count += 1;

            if (checkWin($(turnIndicator).text()) === $(turnIndicator).text()) {
                $(alertMessage).text(`${$(turnIndicator).text()} wins!`)

                $(alertDiv).attr('style', 'display: block');

                $(body).off();
            }
            else if (checkWin($(turnIndicator).text()) === 'draw') {
                $(alertMessage).text('It\'s a draw!');

                $(alertDiv).attr('style', 'display: block');

                $(body).off()
            } else {
                $(turnIndicator).text(changeTurn());
            }
        };
    };
};

// RESETS GRID WHEN BUTTON IS CLICKED
const resetHandler = () => {
    location.reload();
}

// CHANGES THE TURN
const changeTurn = () => {
    if ($(turnIndicator).text() === 'X') {
        return 'O'
    } else {
        return 'X'
    };
};

// PUSHES PLAYER CHOICE TO RESPECTIVE ARRAY
const pushToArray = (cell) => {
    let arrayIndexes = cell.split('-');
    let index1 = parseInt(arrayIndexes[0]);
    let index2 = parseInt(arrayIndexes[1]);

    if ($(turnIndicator).text() === 'X') {
        xArray[index1 - 1][index2 - 1] = 'X';
        console.log(xArray);
    } else {
        oArray[index1 - 1][index2 - 1] = 'O';
        console.log(oArray);
    };
};

// CHECKS IF SOMEONE HAS WON OR THERE IS A DRAW
const checkWin = (player) => {
    let array = null;
    if (player === 'X') {
        array = xArray;
    } else {
        array = oArray;
    }

    let row1 = array[0];
    let row2 = array[1];
    let row3 = array[2];

    if (row1[0] === player && row1[1] === player && row1[2] === player) {
        return player;
    }
    else if (row2[0] === player && row2[1] === player && row2[2] === player) {
        return player;
    }
    else if (row3[0] === player && row3[1] === player && row3[2] === player) {
        return player;
    }
    else if (row1[0] === player && row2[0] === player && row3[0] === player) {
        return player;
    }
    else if (row1[1] === player && row2[1] === player && row3[1] === player) {
        return player;
    }
    else if (row1[2] === player && row2[2] === player && row3[2] === player) {
        return player;
    }
    else if (row1[0] === player && row2[1] === player && row3[2] === player) {
        return player;
    }
    else if (row1[2] === player && row2[1] === player && row3[0] === player) {
        return player;
    };

    if (count === 9) {
        return 'draw';
    }

    return false;
}


$(body).on('click', tableClickHandler);
$(resetBtn).on('click', resetHandler);