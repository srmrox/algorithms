var w = 5; // width of rectangle; controls how many numbers are to be sorted
var delay = 0; // sleep time after every swap

async function setupBars(width) {
    values = new Array(floor(width / w));
    states = new Array(width);

    for (i = 0; i < values.length; i++) {
        values[i] = w + (height * i / values.length);
        states[i] = "grey";
    }

    return { values, states };
}

async function drawBars(values, states) {
    background("black");
    for (i = 0; i < values.length; i++) {
        noStroke();
        fill(states[i]);
        rect(i * w, height - values[i], w, values[i]);
    }
}

async function shuffleArray(array) { // Fisher–Yates shuffle; unbiased and linear time
    var n = array.length,
        i;
    while (n) {
        i = Math.random() * n-- | 0; // 0 ≤ i < n
        await swap(array, n, i);
    }
    for (i = 0; i < array.length; i++) {
        states[i] = "white";
    }
    return array;
}

async function swap(array, leftIndex, rightIndex) {
    states[leftIndex] = "red";
    states[rightIndex] = "red";
    await sleep(delay);
    var temp = array[leftIndex];
    array[leftIndex] = array[rightIndex];
    array[rightIndex] = temp;
    states[leftIndex] = "white";
    states[rightIndex] = "white";
}

async function partition(values, left, right) {
    var pivot = values[Math.floor((right + left) / 2)], //middle element
        i = left, //left pointer
        j = right; //right pointer
    states[pivot] = "purple";
    while (i <= j) {
        while (values[i] < pivot) {
            i++;
        }
        while (values[j] > pivot) {
            j--;
        }
        if (i <= j) {
            await swap(values, i, j); //swap two elements
            i++;
            j--;
        }
    }
    return i;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function startRecording(canvas, recorder) {
    canvas = document.getElementById('defaultCanvas0');
    recorder = new CanvasRecorder(canvas);
    recorder.start();

    return { canvas, recorder }
}

async function stopRecording(recorder) {
    await sleep(1000);
    recorder.stop();
    button = createButton('download');
    button.position(19, 19);
    button.mousePressed(saveRecording);
    return { button };
}

function saveRecording() {
    recorder.save()
}