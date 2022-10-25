---
title: 'Tetris Game'
date: '2022-10-15'
description: 'This blog posts describes a clone of the classic game Tetris, which I created using React.'
---

# Tetris

![Tetris](/images/tetris.png)

After creating [Minesweeper](minesweeper), I was inspired to create another game, Tetris. Creating games is fun and provides good learning opportunities. Tetris, in particular, provides some interesting technical challenges, which I'll discuss below. My version of Tetris can be played at its [website](https://tetris-riegel.netlify.app/). The source code can be found on [my GitHub site](https://github.com/BenRiegel/tetris).

## Overview

In Tetris, the goal of the game is to position game pieces so that they completely fill horizontal lines. When the game starts a piece is placed at the top of the game board. At a certain time interval, the piece moves down one space. If the piece cannot move down, either because it is at the bottom of the board or if another piece is directly below it, then the piece 'lands' on the board and a new piece starts at the top. The player can move the piece right, left, down, as well as flip the piece to the right or left. The player can also perform a hard drop, which moves the piece to the bottom as far as it can go. If the player can position the game pieces so that a horizontal line is completely filled, the line is cleared and all the blocks above it move down. Players score points by clearing lines and by performing hard drops. After every ten lines that are cleared, the level increases. When this happens, the pieces start to drop a little faster. The game ends when the pieces accumulate to the top of the board and a new piece can no longer be added. The goal of the game is to achieve the highest score possible.

## Implementation

The game was created using React. The major challenge in creating Tetris, as with other projects I've worked on, was to work out the application architecture - i.e. how to manage the state variables and have the UI update when the state variables change. This is particularly challenging when you want the user interface to include animations and other asyncronous events. In the case of Tetris, when the user performs a hard drop, an animation moves the piece down as far as it can go. Moreover, when a line clears, the line initially fades out and the pieces above it move down in an animation.

Moreover, in Tetris, state management is challenging because when the player performs an action, it must trigger a series of state changes. And these changes have to happen in a particular order. Let's consider a hard drop. If the player performs a hard drop, the piece animatedly moves as far down as it can go. At this point, the piece "lands" and becomes part of the board. The board is then checked to see if there are any full lines. If there are full lines, then they animatedly disappear and then the blocks above them animatedly move down. There are a lot of different state changes contained here and they must happen in a particular order.

In my experience, there seem to be two broad approaches for handling complex, asyncronous state changes. First, one can have the state variables change all at once and have the UI *update* asyncronously and in a particular order. This is the method I used on my [animating select menu project](select-menu-react-new). When the open-state of the menu changes from open to closed, the state variable is changed and the UI updates it with an animation showing the menu closing. An alternate approach, which I used in Tetris, incorporates an asyncronous chain of state changes. Each state change and corresponding UI update happens syncronously (technically, React does not update syncronously but I'll leave this issue aside for right now). Each user action includes several state changes, and some of these happen asyncronously.

Let's look at the code for a hard drop action below:

~~~js
async function drop(){
  pieceIsActive.update(false);
  const dropDist = grid.calcDropDist(piece.value);
  if (dropDist > 0){
    await dropPiece(dropDist);
    score.scoreDrop(dropDist);
  }
  landPiece();
  await clearFullRows();
  placeNextPiece();
}
~~~

When the user drops a piece, a state variable is updated reflecting that the piece is no longer active. This just means that the piece can no longer be controlled with keyboard keys. Then the drop distance is calculated based on the position of the piece and the state of the game board (grid). Assuming the drop distance is greater than zero, the 'dropPiece' function is executed which performs the animation of moving the piece down. The score is then updated based on the drop distance. Next, the piece 'lands' on the grid, meaning that the cells from the game piece become part of the board. Then, any full rows are cleared. The 'clearFullRows' function tests and performs the animation of clearing the rows and moving overlying rows down. Finally, a new piece is placed on the board.

The asyncronous parts of the drop action incorporate state changes. For instance, when the piece drops, an animating function asyncronously updates the position of the piece, which is stored as a state variable. The UI is updated syncronously. This animating function incorporates the 'requestAnimationFrame' function. Upon each new animation frame, the position variable is changed slightly and the UI is updated. This creates an animation of the piece falling.

This seems to me to be the best approach for managing the complicated state changes. It's definitely a throw-back to imperative style programming, however. Other things being equal, a goal when creating code is to create declarative code. According to the declarative paradigm, the ideal is to specify what you want the UI to look like, and the framework abstracts away the details of making those changes. This doesn't really work, however, when you incorporate animations and other asyncronous actions. You literally have to specify what order things are supposed to happen. In this case, having imperative code is the best way to make it happen.

## Conclusion

Overall, the tetris project was a success. I feel good about the internal architecture of the app and how that works. Aside from that, I gained some good experience creating [custom hooks in React](react-custom-hooks). Moreover, I gained experience using the local storage web API, which I used to keep track of high scores. There are at least a couple things that I think could be improved upon. First, the user interface is not particularly polished stylistically. The functionality is there, but it just doesn't look that great. Also, there is one performance issue that I'm not super happy about. At certain times, animations are not particularly smooth. I'm not entirely sure why, but it's in some way related to the animating function, which uses requestAnimationFrame. Perhaps at some point in the future, I'll come back and fix this issue and polish up the UI. For now, though, I think it's time to move on to other things.
