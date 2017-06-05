class HumanPlayer
  attr_reader :name

  def initialize(name)
    @name = name
  end

  def move(game, mark)
    ## render boaard -- game
    game.render_board

    loop do
      puts "#{mark}: Please select a space"

      input = gets.chomp
      row, col = input[0].to_i, input[1].to_i
      pos = [row, col]

      if valid_input?(pos)
        return pos
      else
        puts "Invalid input!"
      end
    end
  end

  private

  def valid_input?(pos)
    pos.all? { |coord| (0..2).include?(coord) }
  end
end
