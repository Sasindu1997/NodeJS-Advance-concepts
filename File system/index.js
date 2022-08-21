const fs = require('fs');
const fsPromises = require('fs').promises;
const path = require('path');

const fileOps = async () => {
   try {
      const data = await fsPromises.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8');
      console.log(data);
      await fsPromises.unlink(path.join(__dirname, 'files', 'promiseWrite.txt'));
      await fsPromises.writeFile(path.join(__dirname, 'files', 'promiseWrite.txt'), 'Nice to meet you!');
      await fsPromises.appendFile(path.join(__dirname, 'files', 'promiseWrite.txt'), '\n\nyes it is.');
      await fsPromises.rename(path.join(__dirname, 'files', 'promiseWrite.txt'), path.join(__dirname, 'files', 'promiseRename.txt'));

   } catch (err) {
      console.error(err);
   }
}

fileOps();

//reading a file
// fs.readFile(path.join(__dirname, 'files', 'starter.txt'), 'utf8', (err, data) => {
//     if (err) { throw err; }
//     console.log(data);
// })

//writing data to a file
// fs.writeFile(path.join(__dirname, 'files', 'reply.txt'), 'Nice to meet you!', (err) => {
//    if (err) { throw err; }
//    console.log('Write completed');

//    fs.appendFile(path.join(__dirname, 'files', 'reply.txt'), '\n\nyes it is.', (err) => {
//       if (err) { throw err; }
//       console.log('Append completed');
//    })

//    fs.rename(path.join(__dirname, 'files', 'reply.txt'), path.join(__dirname, 'files', 'newReply.txt'), (err) => {
//       if (err) { throw err; }
//       console.log('Rename completed');
//    })
// })

fs.appendFile(path.join(__dirname, 'files', 'test.txt'), 'test test test', (err) => {
   if (err) { throw err; }
   console.log('Append completed');
})

fs.unlink(path.join(__dirname, 'files', 'test.txt'), (err) => {
   if (err) { throw err; }
   console.log('Unlink completed');
})

//exit on uncaught error
process.on('uncaughtExeption', err => {
   console.error(`There was an uncaught error : ${err}`)
})

