export default function (size) {
  const tbl = document.createElement('table')
  const tblBody = document.createElement('tbody')

  for (let i = 0; i < size; i++) {
    const row = document.createElement('tr')
    for (let j = 0; j < size; j++) {
      const cell = document.createElement('td')
      row.appendChild(cell)
    }
    tblBody.appendChild(row)
  }
  tbl.appendChild(tblBody)
  document.body.appendChild(tbl)
}
