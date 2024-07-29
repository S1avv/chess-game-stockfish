from flask import Flask, request, jsonify
from g4f.client import Client

import chess
import chess.engine

from flask_cors import CORS 
from utils.get_abs_notation import move_to_from_notation

app = Flask(__name__)
CORS(app) 

client = Client()

stockfish_path = "utils/stockfish-windows-avx2.exe"