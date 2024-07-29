from __init__ import *

def move_to_from_notation(move):
    from_square = chess.square_name(move.from_square)
    to_square = chess.square_name(move.to_square)
    return f"{from_square} -> {to_square}"