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
  