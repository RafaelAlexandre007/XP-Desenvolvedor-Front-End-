import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css'],
})
export class JogoDaVelhaComponent implements OnInit {
  currentPlayer: string = 'O';
  winner: string = '';
  board: string[][] = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  prossesPlay(line: number, col: number) {
    if (this.board[line][col] == '' && this.winner == '') {
      this.board[line][col] = this.currentPlayer;

      //verificar vencedor
      if (this.checkWinner(this.currentPlayer)) {
        this.winner = this.currentPlayer;
      }

      if (this.currentPlayer == 'O') {
        this.currentPlayer = 'X';
      } else {
        this.currentPlayer = 'O';
      }
    }
  }

  reset() {
    this.currentPlayer = 'O';
    this.winner = '';
    this.board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', ''],
    ];
  }

  checkWinner(player: string): boolean {
    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[i][0] == player &&
        this.board[i][1] == player &&
        this.board[i][2] == player
      ) {
        return true;
      }
    }

    for (let i = 0; i < this.board.length; i++) {
      if (
        this.board[0][i] == player &&
        this.board[1][i] == player &&
        this.board[2][i] == player
      ) {
        return true;
      }
    }
    if (
      this.board[0][0] == player &&
      this.board[1][1] == player &&
      this.board[2][2] == player
    ) {
      return true;
    }
    if (
      this.board[0][2] == player &&
      this.board[1][1] == player &&
      this.board[2][0] == player
    ) {
      return true;
    }

    return false;
  }

  constructor() {}

  ngOnInit(): void {}
}
