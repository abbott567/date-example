const express = require('express')
const router = express.Router()
const {format} = require('date-fns') // ------------------ Require format function from date-fns



// Create a new middleware function.
// This makes it run on every page load in the application
router.use('/', (req, res, next) => {
  // Get todays date as a JS date
  const today = new Date()

  // Set a local (a variable available in the .html files) using the format function from date-fns
  res.locals.todayDateFNS = format(today, 'D MMMM YYYY - hh:mm:ss')

  // Tell express we are done with this middleware function
  next()
})



// Create a new middleware function.
// This makes it run on every page load in the application
router.use('/', (req, res, next) => {
  // Get todays date as a JS date
  const today = new Date();

  // Get the day from the today variable
  const day = today.getDate();

  // Create an array of months as words
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ]

  // Get the month in words from the months array
  // by using the month as a number from the today variable
  const month = months[today.getMonth()];

  // Get the year from the today variable
  const year = today.getFullYear();

  // Create the time using the hours, minutes and seconds from the today variable
  const hours = today.getHours();
  const minutes = today.getMinutes();
  const seconds = today.getSeconds();

  // Set a local (a variable available in the .html files) using the variables we just created
  res.locals.todayDateJS = `${day} ${month} ${year} - ${hours}:${minutes}:${seconds}`

  // Tell express we are done with this middleware function
  next()
})

// Add your routes here - above the module.exports line

module.exports = router
