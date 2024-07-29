from __init__ import *


@app.route('/predict', methods=['POST'])
def predict():
    data = request.json

    raw_text = data.get('text', '')
    
    board = chess.Board(raw_text.replace("w", "b"))

    engine = chess.engine.SimpleEngine.popen_uci(stockfish_path)

    result = engine.play(board, chess.engine.Limit(time=0.1))
    best_move = result.move

    best = move_to_from_notation(best_move)

    engine.quit()
    
    return jsonify({'response': best})


if __name__ == '__main__':
    app.run(debug=False)
