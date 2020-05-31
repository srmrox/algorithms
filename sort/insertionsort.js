// insertion sort

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
  insertionSort(values, 0, values.length - 1);
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
    console.log(`$i $w $height $values[i]`);
    rect(i * w, height - values[i], w, values[i]);
  }
}

async function insertionSort() {
  var pivot = 0;
  var temp = 0;

  for (let i = 0; i < values.length - 1; i++) {
    temp = values[i];
    pivot = i;

    while (pivot > 0 && values[pivot - 1] > temp) {
      await swap(values, values[pivot], values[pivot - 1]);
    }

    values[pivot] = temp;
  }
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