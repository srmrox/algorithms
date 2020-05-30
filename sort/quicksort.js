// quick sort

// init
var w = 2;
var delay = 0;
var values = [];
var states = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  values = new Array(floor(width / w));
  for (i = 0; i < values.length; i++) {
    values[i] = floor(random(height));
    states[i] = 'u';
  }
  quickSort(values, 0, values.length - 1);
}

function draw() {
  background("black");
  for (i = 0; i < values.length; i++) {
    noStroke();
    if (states[i] == 's') {
      fill("red");
    } else if (states[i] == 'l') {
      fill("green");
    } else if (states[i] == 'r') {
      fill("blue");
    } else if (states[i] == 'p') {
      fill("purple");
    } else {
      fill("white");
    }
    rect(i * w, height - values[i], w, values[i]);
  }
}

async function quickSort(items, left, right) {
  var index;
  if (items.length > 1) {
    index = await partition(items, left, right); //index returned from partition
    if (left < index - 1) { //more elements on the left side of the pivot
      await quickSort(items, left, index - 1);
    }
    if (index < right) { //more elements on the right side of the pivot
      await quickSort(items, index, right);
    }
  }
  return items;
}

async function swap(items, leftIndex, rightIndex) {
  await sleep(delay);
  var temp = items[leftIndex];
  items[leftIndex] = items[rightIndex];
  items[rightIndex] = temp;
}

async function partition(items, left, right) {
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
      await swap(items, i, j); //swap two elements
      i++;
      j--;
    }
  }
  return i;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}