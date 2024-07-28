bool findMazePath(int x, int y) {
	if (x < 0 || y < 0 || x >= N || y >= N || maze[x][y] != PATHWAY_COLOUR)
		return 0;
	else if (x == N - 1 && y == N - 1) {
		maze[x][y] = PATH_COLOUR;
		return 1;
	}
	int count = 0;
	maze[x][y] = PATH_COLOUR;
	count += findMazePath(x - 1, y) + findMazePath(x, y + 1) + findMazePath(x + 1, y) + findMazePath(x, y - 1));
	maze[x][y] = BLOCKED_COLOUR;
	return count;
