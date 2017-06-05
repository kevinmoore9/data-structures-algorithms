require 'byebug'

require_relative 'board'
require_relative 'human_player'

class TicTacToe
  attr_reader :players, :board, :turn

  def initialize(player1, player2)
    @board = Board.new
    @players = { x: player1, o: player2 }
    @turn = board.next_mark
  end

  def render_board
    system("clear")
    ## Todo: improve render
    @board.rows.each do |row|
      p row
    end
  end

  def play
    until self.board.over?
      play_turn
    end

    if self.board.winner != nil
      self.render_board
      winner = self.players[self.board.winner]
      puts "#{winner.name} wins!"
    else
      puts "It's a tie!!"
    end
  end

  private

  def play_turn
    loop do
      current_player = players[turn]

      pos = current_player.move(self, self.turn)

      break if place_mark(pos, self.turn)
    end

    @turn = self.board.next_mark
  end

  def place_mark(pos, mark)
    if board[pos].nil?
      board[pos] = mark
      true
    else
      false
    end
  end

end

if $PROGRAM_NAME == __FILE__
  player1 = HumanPlayer.new("one")
  player2 = HumanPlayer.new("two")
  TicTacToe.new(player1, player2).play
end
