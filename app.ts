let message: string = 'help me natan';
console.log(message);

let episode: number = 4;
console.log('This is episode ' + 4)
episode = episode + 1
console.log('Next episode is ' + episode)

let favoriteDroid: string
favoriteDroid = 'BB-8'
console.log('My favorite droid' + favoriteDroid)

function inc (speed: number, inc: number = 1) : number {
    return speed = inc;
}

console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5) = ${inc(5)}`)