## Features

- Chessboard and pieces implemented with HTML and CSS.
- Backend with Flask that handles moves and interacts with the Stockfish engine to get the best moves.
- Game logic implementation and move validation.
- Play against the Stockfish robot.

## Technologies

- **HTML**: Markup for the chessboard and pieces.
- **CSS**: Styling for the game interface.
- **Flask**: Python web framework for handling requests and interacting with the engine.
- **Stockfish**: Chess engine for analyzing and calculating the best moves.

## Installation and Running

### Step 1: Clone the repository

```bash
git clone https://github.com/S1avv/chess-game-stockfish.git
cd your-repository
```

### Step 2: Create and activate a virtual environment

```bash
poetry shell
```

### Step 3: Install dependencies

```bash
poetry install
```

### Step 4: Run the Flask server

```bash
python app.py
```

## Usage

1. Open your web browser and run index.html to see the chessboard.
2. Make a move by clicking on a piece and then clicking on the destination square.
3. The server will process your move and respond with the best move from Stockfish.
4. Continue playing against the Stockfish engine.

## Project Structure

```
chess-game-stockfish/
├── css/
│   └── style.css
├── js/
│   └── script.js
├── templates/
│   └── index.html
├── photos
│   ├── Bbishop.png
│   ├── Bking.png
│   ├── Bknight.png
│   └── ...
├── app.py
├── pyproject.toml
├── index.html
├── stockfish-windows-avx2.exe
└── README.md
```

- `static/css/styles.css`: CSS file for styling the chessboard and pieces.
- `static/js/script.js`: JavaScript file for handling user interactions and AJAX requests.
- `index.html`: HTML file for rendering the chessboard.
- `app.py`: Flask application file containing routes and logic for interacting with Stockfish.

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

```

Feel free to customize it further based on your specific project details and preferences.
```
