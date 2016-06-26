export default function (size) {
  const tbl = document.createElement('table')
  const tblBody = document.createElement('tbody')
  for (let i = 0; i < size; i++) {
    const row = document.createElement('tr')
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('td')
      cell.addEventListener('mouseover', handleEvent)
      cell.setAttribute('id', `x${i}y${j}`)
      row.appendChild(cell)
    }
    tblBody.appendChild(row)
  }
  tbl.appendChild(tblBody)
  document.body.appendChild(tbl)
}

function handleEvent (e) {
  const cell = e.target.id
  const data = cell.split('y')
  const x = Number(data[0].replace('x', ''))
  const y = Number(data[1])
  const top = 250
  if (e.target.className !== 'active') {
    document.getElementById(cell).className = 'active'
    activateY(x, y)
  } else {
    document.getElementById(cell).className = 'deactive'
    deactivateY(x, y, top)
  }
}

function activateY (x, y) {
    while (y >= 0) {
      document.getElementById(`x${x}y${y}`).className = 'active'
      return setTimeout(() => activateY(x, y -1), 100)
    }
}

function deactivateY (x, y, top) {
  while (y < top) {
    document.getElementById(`x${x}y${y}`).className = 'deactive'
    return setTimeout(() => deactivateY(x, y + 1, top), 100)
  }
}
