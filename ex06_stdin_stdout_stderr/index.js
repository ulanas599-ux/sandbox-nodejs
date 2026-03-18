import { stdin, stdout, stderr, exit } from 'node:process';

//stdin.pipe(stdout);

let data = '';

stdin.on('readable', () => {
    const chunk = stdin.read();
    if(chunk !== null) {
        data += chunk;
    }
    //console.log('r');
});

stdin.on('end', () => {
    console.log('Data:', data)

    //throw new Error("!!!");

    stdout.write("Program Finished\n");
    //exit(0);

    stderr.write("Program Error\n");
    //exit(7);

});