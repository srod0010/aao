// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

var minPathSum = function (grid) {
    let table = new Array(grid.length).fill().map(() => new Array(grid[0].length));

    for (let col = 0; col < grid.length; col++) {
        for (let row = 0; row < grid[col].length; row++) {
            let above = col - 1;
            let left = row - 1;
            // if left and up are not defined add start el
            if (!grid[above] && !grid[col][left]) {

                table[col][row] = grid[col][row];

            }


            // if left & !up -> add left
            if (grid[col][left] && !grid[above]) {
                table[col][row] = grid[col][row] + table[col][left];
            }


            // if up & !left -> add up
            if (grid[above] && !grid[col][left]) {
                table[col][row] = grid[col][row] + table[above][row];
            }

            // if up && left -> take minimum
            if (grid[above] && grid[col][left]) {
                let aboveSum = grid[col][row] + table[above][row];
                let leftSum = grid[col][row] + table[col][left];
                table[col][row] = Math.min(aboveSum, leftSum);
            }
        }
    }

    return table[table.length - 1][table[0].length - 1];
};