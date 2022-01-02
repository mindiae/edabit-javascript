/*
Track the Robot (Part 2)
This robot roams around a 2D grid. It starts at (0, 0) facing North. After each time it moves, the robot rotates 90 degrees clockwise. Given the amount the robot has moved each time, you have to calculate the robot's final position.

To illustrate, if the robot is given the movements 20, 30, 10, 40 then it will move:

20 steps North, now at (0, 20)
30 steps East, now at (30, 20)
10 steps South. now at (30, 10)
40 steps West, now at (-10, 10)
...and will end up at coordinates (-10, 10).

Examples
trackRobot(20, 30, 10, 40) ➞ [-10, 10]

trackRobot() ➞ [0, 0]
// No movement means the robot stays at (0, 0).

trackRobot(-10, 20, 10) ➞ [20, -20]
// The amount to move can be negative.
Notes
Each movement is an integer (whole number).
*/
function trackRobot(...steps) {
	let coordinates = [0, 0];
	let direction = 1;
	for (i = 0; i< steps.length; i++) {
	  switch (direction) {
	    case 1:
	      coordinates[1] += steps[i];
	      break;
	    case 2:
	      coordinates[0] += steps[i];
	      break;
	    case 3:
	      coordinates[1] -= steps[i];
	      break;
	    case 4:
	      coordinates[0] -= steps[i];
	      break;
	  }
	  if (direction == 4) {
	    direction = 1;
	  } else {
	    direction ++;
	  }
	}
	return coordinates;
}
function arraysEqual(a, b) {
  if (a, b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
console.log(arraysEqual(trackRobot(20, 30, 10, 40), [-10, 10]))
console.log(arraysEqual(trackRobot(10, -10, -10, 10), [-20, 20]))
console.log(arraysEqual(trackRobot(), [0, 0]))
console.log(arraysEqual(trackRobot(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), [6, 5]))
console.log(arraysEqual(trackRobot(1, 0, 2, 0, 3, 0, 4, 0, 5, 0), [0, 3]))
console.log(arraysEqual(trackRobot(0, 1, 0, 2, 0, 3, 0, 4, 0, 5), [3, 0]))