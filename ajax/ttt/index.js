$(() => {
  const root = $(".main");
  new Board(root);
})

class Board {
  constructor(root) {
    this.root = root;

    this.setupBoard();
    this.bindEvents();
  }

  setupBoard() {
    for (let i=0; i<3; i++) {
      $(".main").append("<div class='row'></div>");
    }
    for (let i=0; i<3; i++) {
      $(".row").append("<div class='square'></div>");
    }
  }

  bindEvents() {
    this.root.on("click", ".square", (e => {
      const square = e.currentTarget;
      square.classList.add("clicked");
      console.log(square);
    }))
  }

}
