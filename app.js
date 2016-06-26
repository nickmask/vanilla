import createTable from './utils/create-table'
import createActive from './utils/create-active'
// Create the table

createTable(20)

// addListeners()
//
// function active (e) {
//   e.target.className = active
// }
//
// function addListeners () {
//   const table = document.getElementsByTagName('table')
//    console.log(table)
//   table.addEventListener('click', active)
// }

function handleEvent (e) {
  console.log('fuck it')
}

var cells = document.getElementsByTagName('td')
for (var cell in cells) {
  cell.addEventListener('click', handleEvent)
}
