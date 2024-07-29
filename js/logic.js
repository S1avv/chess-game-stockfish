//inserting the images
function insertImage() {
    document.querySelectorAll('.box').forEach(image => {
        if (image.innerText.length !== 0) {
            if (image.innerText == 'Wpawn' || image.innerText == 'Bpawn') {
                image.innerHTML = `${image.innerText} <img class='all-img all-pown' src="photos/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            } else {
                image.innerHTML = `${image.innerText} <img class='all-img' src="photos/${image.innerText}.png" alt="">`
                image.style.cursor = 'pointer'
            }
        }
    })
}
insertImage()

//Coloring the board

function coloring() {
    const color = document.querySelectorAll('.box')

    color.forEach(color => {
        getId = color.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        aup = eval(arr.shift())
        a = aside + aup

        if (a % 2 == 0) {
            color.style.backgroundColor = 'rgb(232 235 239)'
        }
        if (a % 2 !== 0) {
            color.style.backgroundColor = 'rgb(125 135 150)'
        }
    })
}
coloring()


//function to not remove the same team element

function reddish() {
    document.querySelectorAll('.box').forEach(i1 => {
        if (i1.style.backgroundColor == 'blue') {

            document.querySelectorAll('.box').forEach(i2 => {

                if (i2.style.backgroundColor == 'greenyellow' && i2.innerText.length !== 0) {


                    greenyellowText = i2.innerText

                    blueText = i1.innerText

                    blueColor = ((Array.from(blueText)).shift()).toString()
                    greenyellowColor = ((Array.from(greenyellowText)).shift()).toString()

                    getId = i2.id
                    arr = Array.from(getId)
                    arr.shift()
                    aside = eval(arr.pop())
                    aup = eval(arr.shift())
                    a = aside + aup

                    if (a % 2 == 0 && blueColor == greenyellowColor) {
                        i2.style.backgroundColor = 'rgb(232 235 239)'
                    }
                    if (a % 2 !== 0 && blueColor == greenyellowColor) {
                        i2.style.backgroundColor = 'rgb(125 135 150)'
                    }

                }
            })
        }
    })
}




tog = 1

document.querySelectorAll('.box').forEach(item => {


    item.addEventListener('click', function() {

        if (item.style.backgroundColor == 'greenyellow' && item.innerText.length == 0) {
            tog = tog + 1
        } else if (item.style.backgroundColor == 'greenyellow' && item.innerText.length !== 0) {

            document.querySelectorAll('.box').forEach(i => {
                if (i.style.backgroundColor == 'blue') {
                    blueId = i.id
                    blueText = i.innerText

                    document.getElementById(blueId).innerText = ''
                    item.innerText = blueText
                    makeMove(blueId, item.id);
                    coloring()
                    insertImage()
                    tog = tog + 1

                }
            })
        }



        getId = item.id
        arr = Array.from(getId)
        arr.shift()
        aside = eval(arr.pop())
        arr.push('0')
        aup = eval(arr.join(''))
        a = aside + aup

        //function to display the available paths for all pieces

        function whosTurn(toggle) {
            // PAWN

            if (item.innerText == `${toggle}pawn`) {
                item.style.backgroundColor = 'blue';

                if (tog % 2 !== 0 && aup < 800) {
                    // First move for white pawns
                    if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow';
                        if (document.getElementById(`b${a + 200}`).innerText.length == 0 && aup < 300) {
                            document.getElementById(`b${a + 200}`).style.backgroundColor = 'greenyellow';
                        }
                    }
                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow';
                    }
                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow';
                    }
                }

                if (tog % 2 == 0 && aup > 100) {
                    // First move for black pawns
                    if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow';
                        if (document.getElementById(`b${a - 200}`).innerText.length == 0 && aup > 600) {
                            document.getElementById(`b${a - 200}`).style.backgroundColor = 'greenyellow';
                        }
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow';
                    }
                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow';
                    }
                }
                // Second move for pawns
                if (tog % 2 !== 0 && aup >= 800) {
                    if (document.getElementById(`b${a + 100}`).innerText.length == 0) {
                        document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow';
                    }
                    if (aside < 8 && document.getElementById(`b${a + 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow';
                    }
                    if (aside > 1 && document.getElementById(`b${a + 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow';
                    }
                }
                if (tog % 2 == 0 && aup <= 100) {
                    if (document.getElementById(`b${a - 100}`).innerText.length == 0) {
                        document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow';
                    }
                    if (aside < 8 && document.getElementById(`b${a - 100 + 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow';
                    }
                    if (aside > 1 && document.getElementById(`b${a - 100 - 1}`).innerText.length !== 0) {
                        document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow';
                    }
                }
            }

            // KING

            if (item.innerText == `${toggle}king`) {


                if (aside < 8) {
                    document.getElementById(`b${a + 1}`).style.backgroundColor = 'greenyellow'

                }
                if (aside > 1) {

                    document.getElementById(`b${a - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800) {

                    document.getElementById(`b${a + 100}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100) {

                    document.getElementById(`b${a - 100}`).style.backgroundColor = 'greenyellow'
                }

                if (aup > 100 && aside < 8) {

                    document.getElementById(`b${a - 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup > 100 && aside > 1) {

                    document.getElementById(`b${a - 100 - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside < 8) {

                    document.getElementById(`b${a + 100 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aup < 800 && aside > 1) {

                    document.getElementById(`b${a + 100 - 1}`).style.backgroundColor = 'greenyellow'
                }

                item.style.backgroundColor = 'blue'

            }

            // KNIGHT

            if (item.innerText == `${toggle}knight`) {


                if (aside < 7 && aup < 800) {
                    document.getElementById(`b${a + 100 + 2}`).style.backgroundColor = 'greenyellow'
                }
                if (aside < 7 && aup > 200) {
                    document.getElementById(`b${a - 100 + 2}`).style.backgroundColor = 'greenyellow'
                }
                if (aside < 8 && aup < 700) {
                    document.getElementById(`b${a + 200 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aside > 1 && aup < 700) {
                    document.getElementById(`b${a + 200 - 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aside > 2 && aup < 800) {
                    document.getElementById(`b${a - 2 + 100}`).style.backgroundColor = 'greenyellow'
                }
                if (aside > 2 && aup > 100) {
                    document.getElementById(`b${a - 2 - 100}`).style.backgroundColor = 'greenyellow'
                }
                if (aside < 8 && aup > 200) {
                    document.getElementById(`b${a - 200 + 1}`).style.backgroundColor = 'greenyellow'
                }
                if (aside > 1 && aup > 200) {
                    document.getElementById(`b${a - 200 - 1}`).style.backgroundColor = 'greenyellow'
                }

                item.style.backgroundColor = 'blue'

            }

            // QUEEN

            if (item.innerText == `${toggle}queen`) {


                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'greenyellow'
                    } else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'greenyellow'
                    } else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'greenyellow'
                    } else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'greenyellow'
                    } else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }



                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'greenyellow'
                    } else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'greenyellow'
                    } else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'greenyellow'
                    } else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'greenyellow'
                        break
                    }

                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'greenyellow'
                    } else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }



                item.style.backgroundColor = 'blue'

            }

            // BISHOP

            if (item.innerText == `${toggle}bishop`) {


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'greenyellow'
                    } else if (i < (900 - aup) / 100 && i < 9 - aside && document.getElementById(`b${a + i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 + i}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'greenyellow'
                    } else if (i < aup / 100 && i < 9 - aside && document.getElementById(`b${a - i * 100 + i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 + i}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }


                for (let i = 1; i < 9; i++) {
                    if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'greenyellow'
                    } else if (i < (900 - aup) / 100 && i < aside && document.getElementById(`b${a + i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a + i * 100 - i}`).style.backgroundColor = 'greenyellow'
                        break
                    }

                }


                for (let i = 1; i < 9; i++) {
                    if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length == 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'greenyellow'
                    } else if (i < aup / 100 && i < aside && document.getElementById(`b${a - i * 100 - i}`).innerText.length !== 0) {
                        document.getElementById(`b${a - i * 100 - i}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }



                item.style.backgroundColor = 'blue'

            }

            // ROOK

            if (item.innerText == `${toggle}rook`) {

                for (let i = 1; i < 9; i++) {

                    if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText == 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'greenyellow'
                    } else if ((a + i * 100) < 900 && document.getElementById(`b${a + i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a + i * 100}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText == 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'greenyellow'
                    } else if ((a - i * 100) > 100 && document.getElementById(`b${a - i * 100}`).innerText !== 0) {
                        document.getElementById(`b${a - i * 100}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText == 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'greenyellow'
                    } else if ((a + i) < (aup + 9) && document.getElementById(`b${a + i}`).innerText !== 0) {
                        document.getElementById(`b${a + i}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }

                for (let i = 1; i < 9; i++) {

                    if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText == 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'greenyellow'
                    } else if ((a - i) > (aup) && document.getElementById(`b${a - i}`).innerText !== 0) {
                        document.getElementById(`b${a - i}`).style.backgroundColor = 'greenyellow'
                        break
                    }
                }

                item.style.backgroundColor = 'blue'
            }

        }

        if (tog % 2 !== 0) {
            document.getElementById('tog').innerText = ""
            whosTurn('W')
        }
        if (tog % 2 == 0) {
            document.getElementById('tog').innerText = ""
            whosTurn('B')
        }

        reddish()



    })
})

document.querySelectorAll('.box').forEach(hathiTest => {

    hathiTest.addEventListener('click', function() {

        if (hathiTest.style.backgroundColor == 'blue') {

            blueId = hathiTest.id
            blueText = hathiTest.innerText

            const fromId = hathiTest.id;
            const piece = hathiTest.innerText;

            document.querySelectorAll('.box').forEach(hathiTest2 => {

                hathiTest2.addEventListener('click', function() {
                    if (hathiTest2.style.backgroundColor == 'greenyellow' && hathiTest2.innerText.length == 0) {
                        document.getElementById(blueId).innerText = ''
                        hathiTest2.innerText = blueText
                        const toId = hathiTest2.id;
                        makeMove(blueId, toId);
                        coloring()
                        insertImage()
                        

                    }

                })
            })

        }

    })

})


z = 0
document.querySelectorAll('.box').forEach(ee => {
    ee.addEventListener('click', function() {
        z = z + 1
        if (z % 2 == 0 && ee.style.backgroundColor !== 'greenyellow') {
            coloring()
        }
    })
})

function generateFENFromHistory(history) {
    const initialBoard = [
        ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
        ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' '],
        ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
        ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R']
    ];

    const board = initialBoard.map(row => row.slice());

    function notationToIndex(notation) {
        const col = notation.charCodeAt(0) - 'a'.charCodeAt(0);
        const row = 8 - parseInt(notation.charAt(1));
        return [row, col];
    }

    history.forEach(move => {
        const [from, to] = move.split(' -> ');
        const [fromRow, fromCol] = notationToIndex(from);
        const [toRow, toCol] = notationToIndex(to);

        board[toRow][toCol] = board[fromRow][fromCol];
        board[fromRow][fromCol] = ' ';
    });

    function boardToFEN(board) {
        return board.map(row => {
            let rowString = '';
            let emptyCount = 0;
            row.forEach(cell => {
                if (cell === ' ') {
                    emptyCount++;
                } else {
                    if (emptyCount > 0) {
                        rowString += emptyCount;
                        emptyCount = 0;
                    }
                    rowString += cell;
                }
            });
            if (emptyCount > 0) {
                rowString += emptyCount;
            }
            return rowString;
        }).join('/') + ' w KQkq - 0 1';
    }

    return boardToFEN(board);
}

function convertToChessNotation(inputString) {
    const replacements = {
        'b801': 'a8',
        'b802': 'b8',
        'b803': 'c8',
        'b804': 'd8',
        'b805': 'e8',
        'b806': 'f8',
        'b807': 'g8',
        'b808': 'h8',
        'b701': 'a7',
        'b702': 'b7',
        'b703': 'c7',
        'b704': 'd7',
        'b705': 'e7',
        'b706': 'f7',
        'b707': 'g7',
        'b708': 'h7',
        'b601': 'a6',
        'b602': 'b6',
        'b603': 'c6',
        'b604': 'd6',
        'b605': 'e6',
        'b606': 'f6',
        'b607': 'g6',
        'b608': 'h6',
        'b501': 'a5',
        'b502': 'b5',
        'b503': 'c5',
        'b504': 'd5',
        'b505': 'e5',
        'b506': 'f5',
        'b507': 'g5',
        'b508': 'h5',
        'b401': 'a4',
        'b402': 'b4',
        'b403': 'c4',
        'b404': 'd4',
        'b405': 'e4',
        'b406': 'f4',
        'b407': 'g4',
        'b408': 'h4',
        'b301': 'a3',
        'b302': 'b3',
        'b303': 'c3',
        'b304': 'd3',
        'b305': 'e3',
        'b306': 'f3',
        'b307': 'g3',
        'b308': 'h3',
        'b201': 'a2',
        'b202': 'b2',
        'b203': 'c2',
        'b204': 'd2',
        'b205': 'e2',
        'b206': 'f2',
        'b207': 'g2',
        'b208': 'h2',
        'b101': 'a1',
        'b102': 'b1',
        'b103': 'c1',
        'b104': 'd1',
        'b105': 'e1',
        'b106': 'f1',
        'b107': 'g1',
        'b108': 'h1'
      };

    for (const [key, value] of Object.entries(replacements)) {
        inputString = inputString.replace(new RegExp(key, 'g'), value);
    }

    return inputString;
}

function convertToCodeNotation_(inputString) {
    const replacements = {
        'a8': 'b801',
        'b8': 'b802',
        'c8': 'b803',
        'd8': 'b804',
        'e8': 'b805',
        'f8': 'b806',
        'g8': 'b807',
        'h8': 'b808',
        'a7': 'b701',
        'b7': 'b702',
        'c7': 'b703',
        'd7': 'b704',
        'e7': 'b705',
        'f7': 'b706',
        'g7': 'b707',
        'h7': 'b708',
        'a6': 'b601',
        'b6': 'b602',
        'c6': 'b603',
        'd6': 'b604',
        'e6': 'b605',
        'f6': 'b606',
        'g6': 'b607',
        'h6': 'b608',
        'a5': 'b501',
        'b5': 'b502',
        'c5': 'b503',
        'd5': 'b504',
        'e5': 'b505',
        'f5': 'b506',
        'g5': 'b507',
        'h5': 'b508',
        'a4': 'b401',
        'b4': 'b402',
        'c4': 'b403',
        'd4': 'b404',
        'e4': 'b405',
        'f4': 'b406',
        'g4': 'b407',
        'h4': 'b408',
        'a3': 'b301',
        'b3': 'b302',
        'c3': 'b303',
        'd3': 'b304',
        'e3': 'b305',
        'f3': 'b306',
        'g3': 'b307',
        'h3': 'b308',
        'a2': 'b201',
        'b2': 'b202',
        'c2': 'b203',
        'd2': 'b204',
        'e2': 'b205',
        'f2': 'b206',
        'g2': 'b207',
        'h2': 'b208',
        'a1': 'b101',
        'b1': 'b102',
        'c1': 'b103',
        'd1': 'b104',
        'e1': 'b105',
        'f1': 'b106',
        'g1': 'b107',
        'h1': 'b108'
    };

    for (const [key, value] of Object.entries(replacements)) {
        inputString = inputString.replace(new RegExp(key, 'g'), value);
    }

    return inputString;
}

function makeMove(fromId, toId) {
    const fromBox = document.getElementById(fromId);
    const toBox = document.getElementById(toId);

    if (fromBox && toBox) {
        console.log(`${fromId} -> ${toId}`)
        moveHistory.push(convertToChessNotation(`${fromId} -> ${toId}`));

        const tog_ = document.getElementById("tog")

        if (tog_.textContent == "White s Trun"){
            return 0;
        }
        else 
        {
            const apiUrl = 'http://127.0.0.1:5000/predict';

            console.log(generateFENFromHistory(moveHistory))

            const requestData = {
                text: `${generateFENFromHistory(moveHistory)}`
            };
    
            fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestData),
            })
            .then(response => response.json())
            .then(data => {
                console.log('Response from server:', data);

                data = convertToCodeNotation_(data.response);

                toBox_ = document.getElementById(data.split('->')[1].trim());

                fromBox_ = document.getElementById(data.split('->')[0].trim());


                moveHistory.push(convertToChessNotation(`${data.split('->')[0].trim()} -> ${data.split('->')[1].trim()}`));

                toBox_.innerHTML = fromBox_.innerHTML;
                fromBox_.innerHTML = '';
                insertImage();
                reddish();

                console.log(moveHistory)
            })
            .catch(error => {
                console.error('Error:', error);
            });

            const tog_ = document.getElementById("tog");
            tog_.textContent = "";
            tog = tog + 1

        }

        console.log(moveHistory)
    }
}

let moveHistory = [];