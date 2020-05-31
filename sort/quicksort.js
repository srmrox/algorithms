// quick sort

// init
var values,     // array hosting values
    states,     // array hosting state for color coding
    canvas,     // blank canvas for media recorder
    recorder;   // blank recording for recording alogrithm visualization

async function setup() {
    createCanvas(windowWidth, windowHeight);
    ({ canvas, recorder } = startRecording(canvas, recorder));
    ({ values, states } = await setupBars(windowWidth));
    await shuffleArray(values);
    await quickSort(values, 0, values.length - 1);
    stopRecording(recorder);
}

async function draw() {
    await drawBars(values, states);
}

async function quickSort(values, left, right) {
    var index;
    if (values.length > 1) {
        index = await partition(values, left, right); //index returned from partition
        if (left < index - 1) { //more elements on the left side of the pivot
            await quickSort(values, left, index - 1);
        }
        if (index < right) { //more elements on the right side of the pivot
            await quickSort(values, index, right);
        }
    }
    return values;
}