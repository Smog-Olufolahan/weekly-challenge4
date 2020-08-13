/* CHALLENGE
A construction company is building a new neighborhood, and they are currently working on the design. Each house will be built using one of three main materials (e.g., wood, brick, or concrete), but no side-by-side houses can be made of the same material. Because each house will be of varying size and complexity, the cost of the materials for each house varies. Given the cost of using each material for each house, what is the minimum cost needed to complete the neighborhood?
For example, let's say there are n = 3 houses to be built. Also, cost = [[1, 2, 3], [1, 2, 3], [3, 3, 1]], denoting the cost of materials for each of the 3 houses. The minimum cost to build all the houses is 4, as seen in the table below:



Material 1
Material 2
Material 3
Cost for House 1
1
2
3
Cost for House 2
1
2
3
Cost for House 3
3
3
1

For the first house, the cheapest material is the first one, which costs 1.  For the second house, the materials cost the same as with the first house, but the same material can't be used because the houses are side by side. The next best option is the second material, which costs 2. Finally, the cheapest material for the third house is the third material, which costs 1. Therefore, the total cost to build all the houses is 1 + 2 + 1 = 4.

YOUR TASK
Write a function minCost which:
has a parameter cost:  a 2-dimensional array of integers where cost[i][j] denotes the cost of using the jth material on the ith house, and
returns minimumCost (an integer which is the minimum cost to build all the houses in the neighborhood)

Constraints
1 ≤ n ≤ 100
0 ≤ cost[i][j] ≤ 100
 */

function minCost(cost) {
    var array = [];
    var minimumItem = 100;
    
    for(var i = 0; i < cost.length; i++) {
      if(cost.length < 1 || cost.length > 100) {
        return ("Number of houses must be between 1 and 100");
      }
      for(var j = 0; j < cost[i].length; j++) {
        if(cost[i][j] < 0 || cost[i][j] > 100) {
          return ("The unit cost for building a house must be between 0 and 100");
        }
        if(cost[i][j] < minimumItem && cost[i][j] != array.slice(-1)[0]) {
          minimumItem = cost[i][j];
        }
      }
      array.push(minimumItem);
      minimumItem = 101;
    }
    var minimumCost = `Minimun cost: ${array.reduce((a,b) => a + b)}`
    return minimumCost
  }
  
  minCost([[1, 2, 3], [1, 2, 3], [3, 3, 1]]);
