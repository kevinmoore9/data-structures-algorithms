require 'byebug'

require_relative 'board'
require_relative 'human_player'
require_relative 'computer_player'

class TicTacToe
  attr_reader :players, :board, :turn

  def initialize(player1, player2)
    @board = Board.new
    @players = { x: player1, o: player2 }
    @turn = board.next_mark
  end

  def render_board
    system("clear")
    puts "  0   1   2"
    
    @board.rows.each_with_index do |row, idx|
      puts "  ---------" unless idx == 0
      new_row = row.map do |el|
        if el.nil?
          " "
        else
          el
        end
      end
      puts "#{idx} " + new_row.join(" | ")
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
  player2 = ComputerPlayer.new
  TicTacToe.new(player1, player2).play
end
