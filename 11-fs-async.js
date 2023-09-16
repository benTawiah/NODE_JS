const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf8', (err, first) => {
    if (err) {
        console.error(err);
        return;
    }

    readFile('./content/second.txt', 'utf8', (err, second) => {
        if (err) {
            console.error(err);
            return;
        }

        writeFile(
            './content/result-async.txt',
            `Here is the result: ${first}, ${second}`,
            (err) => {
                if (err) {
                    console.error(err);
                    return;
                }
                console.log('done with this task');
            }
        );
    });
});

console.log('starting next task');
