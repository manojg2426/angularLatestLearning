import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-tic-tac-toe',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css'
})
export class TicTacToeComponent {
  board:string[][]=[
    ["","",""],
    ["","",""],
    ["","",""]
  ]

  currentPlayer:string ='X';
  winner:string | null =null;
  draw:string | null =null;
  constructor() { }

  ngOnInit(): void {
  }

  playGame(row:number,col:number){
    if(!this.board[row][col] && !this.winner){
      this.board[row][col]= this.currentPlayer;
      if(this.checkWinner()){
        this.winner = this.currentPlayer;
      }else{
        if(this.board.every(row => row.every(cell => cell))){
          this.draw = 'Tie';
          return;
        }
        this.currentPlayer = this.currentPlayer === 'X'?'O':'X'
      }
    }
  }

  checkWinner():Boolean{
      const winningCombination =[
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]]
      ]

    for(let combination of winningCombination){
      const [a,b,c] = combination;
      if(this.board[a[0]][a[1]] && this.board[a[0]][a[1]] === this.board[b[0]][b[1]] && this.board[c[0]][c[1]]=== this.board[a[0]][a[1]])
          return true
    }
    return false;
  }

  resetGame(){
    this.board=[
      ["","",""],
      ["","",""],
      ["","",""]
    ]
    this.draw = null;
    this.winner =null;
    this.currentPlayer = 'X';
  }

}
