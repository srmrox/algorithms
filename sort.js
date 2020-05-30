// Sorts

// Quick sort
let quickSort = new p5(p => {

  // init
  var width = 0;
  var height = 0;
  var values = [];

  // setup
  p.setup = () => {

    // set width and height based on id of div
    width = $("#quick-sort-main").width();
    height = $("#quick-sort-main").height();

    // create canvas
    p.createCanvas(width, height);

    // get random values | # of values = width | range = 0 to height
    for (i = 0; i < width; i++) {
      values.push(Math.round(Math.random() * height));
    }

    p.noLoop();
  };

  p.draw = () => {
    // set background
    render();

    quickSort(values, 0, width);

    render();
  };

  // functions

  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  function render() { // draw current state of values array
    p.background("black");
    for (i = 0; i < width; i++) {
      p.stroke("white");
      p.line(i, height, i, height - values[i]);
    }
  }

  function drawPartition() {

  }

  async function quickSort(items, left, right) {
    var index;
    if (items.length > 1) {
      index = partition(items, left, right); //index returned from partition
      p.stroke("red");
      p.line(items, height, items, height);
      await sleep(100);
      if (left < index - 1) { //more elements on the left side of the pivot
        quickSort(items, left, index - 1);
      }
      if (index < right) { //more elements on the right side of the pivot
        quickSort(items, index, right);
      }
    }
    return items;
  }

  function swap(items, leftIndex, rightIndex) {
    var temp = items[leftIndex];
    items[leftIndex] = items[rightIndex];
    items[rightIndex] = temp;
  }

  function partition(items, left, right) {
    var pivot = items[Math.floor((right + left) / 2)], //middle element
      i = left, //left pointer
      j = right; //right pointer
    while (i <= j) {
      while (items[i] < pivot) {
        i++;
      }
      while (items[j] > pivot) {
        j--;
      }
      if (i <= j) {
        swap(items, i, j); //swap two elements
        i++;
        j--;
      }
    }
    return i;
  }

}, 'quick-sort-main');


// Sketch2
let sketch2 = new p5(p => {

  p.setup = () => {
    // canvas size is specified in the CSS file (size of div #two)
    p.createCanvas($("#two").width(), $("#two").height());
  };

  p.draw = () => {
    p.background(170);
    p.noStroke();
    p.fill(255);
    p.ellipse(p.mouseX, p.mouseY, 50, 50);
  };
}, 'two');