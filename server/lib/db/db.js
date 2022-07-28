const mongoose = require('mongoose')

console.log('Establishing for database connection...')
mongoose.connect(process.env.DBHOST, (err) => {
   if (err) {
       console.log(`MongoDB failed to connect @ ${process.env.DBHOST}`)
       console.error(err)
       exit(-1)
   } else {
       console.log("MongoDB succesfully connected...")
   }
})

module.exports = mongoose
