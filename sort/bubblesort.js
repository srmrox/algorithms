// bubble sort

// init
var values,     // array hosting values
    states,     // array hosting state for color coding
    canvas,     // blank canvas for media recorder
    recorder;   // blank recording for recording alogrithm visualization


// setup bars with increasing values and shuffle them
async function setup() {
    createCanvas(windowWidth, windowHeight);
    ({ canvas, recorder } = startRecording(canvas, recorder));
    ({ values, states } = await setupBars(windowWidth));
    await shuffleArray(values);
    await bubbleSort();
    stopRecording(recorder);
}

async function draw() {
    await drawBars(values, states);
}

async function bubbleSort() {
    for (let i = 0; i < values.length - 1; i++) {
        for (let j = 0; j < values.length - i; j++) {
            if (values[j] > values[j + 1]) {
                await swap(values, j, j + 1);
            }
        }
        states[values.length - i - 1] = "lime";
    }
    states[1] = "lime";
    states[0] = "lime";
}