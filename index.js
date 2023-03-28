const body = $('body');
let turnIndicator = $('#playerTurn');
const resetBtn = $('#resetBtn');

const tableClickHandler = (e) => {
    let target = e.target;

    if ($(target).is('td')) {
        if ($(target).text() === '') {
            $(target).text($(turnIndicator).text())

            $(turnIndicator).text(changeTurn());
        };
    };
};

const resetHandler = () => {
    let allTd = $('td');

    $(allTd).text('')

    $(turnIndicator).text('X');
}

const changeTurn = () => {
    if ($(turnIndicator).text() === 'X') {
        return 'O'
    } else {
        return 'X'
    };
};

$(body).on('click', tableClickHandler);
$(resetBtn).on('click', resetHandler);