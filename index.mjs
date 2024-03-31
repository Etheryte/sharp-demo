import sharp from 'sharp';

const bugged = sharp('./bugged-in.jpg');
console.log('bugged input metadata');
console.log(await bugged.metadata());
await bugged.resize(300).toFile('./bugged-out.jpg');

const working = sharp('./working-in.jpg');
console.log('working input metadata');
console.log(await working.metadata());
await working.resize(300).toFile('./working-out.jpg');
