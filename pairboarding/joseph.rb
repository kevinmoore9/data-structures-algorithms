def joe(k, n)
  return 1 if n == 1

  (joe(k, n - 1) + k - 1) % n + 1
end
p joe(4, 17)


k, n = 3, 7

# 1 2 3 4 5 6 7  3, 7
# 1 2   4 5 6 7  3, 6
# 1 2   4 5   7  3, 5
# 1     4 5
# 1     4
#       4

def next_man(current_man_kill, kill_step, population)
  (current_man_kill + kill_step) % population
end

def last_man(population, kill_step)
  man_to_kill = Array.new (population + 1)
  man_to_kill[0] = next_man(0, kill_step, population)

  1.upto(population) do |i|
    man_to_kill[i] = next_man(man_to_kill[i - 1], kill_step, population)
  end

  next_man(man_to_kill[population], kill_step, population)
end

p last_man(17, 3)

# public class JosephusProblem {
#
#   public static int findLastManStanding(int population, int killStep) {
#
#     int[] manToKill = new int[population + 1];
#     manToKill[0] = nextMan(0, killStep, population);
#
#     for (int i = 1; i <= population; i++)
#       manToKill[i] = nextMan(manToKill[i - 1], killStep, population);
#
#     return nextMan(manToKill[population], killStep, population);
#   }
# }
