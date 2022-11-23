alert("Well, let me change the color")

document.body.style.backgroundColor = 'gray';

const data = {}

tables = document.querySelectorAll('table')



// table
for (let i = 0; i < tables.length; i++) {
    data['table' + i] = []
    const currTable = tables[i]
    const currRows = tables[i].querySelectorAll('tr')

    // tr
    for (let j = 0; j < currRows.length; j++) {
        data['table' + i][j] = []
        let currRow = currRows[j]
        let cells = currRow.querySelectorAll('td')

        let IDString = "row"

        IDString += String(j)

        currRow.setAttribute("id", IDString)

        // td
        for (let k = 0; k < cells.length; k++) {
            data['table' + i][j][k] = cells[k].textContent
        }
    }
}

let max = -263.
let max_i = -1

for (let i = 1; i < data.table0.length; i++) {

    if (Number(data.table0[i][3]) > max) {

        max = Number(data.table0[i][3])
        max_i = i;

    }

}

console.log('done')

console.log(max)
console.log(max_i)

let out = ""

out = "<p> It's about<a href="
out += "\"#row"
out += String(max_i)
out +="\" > here</a > "
out += "</p>"

document.body.insertAdjacentHTML("afterbegin", out)

out = "<p> The date of the hottest day: "
out += String(data.table0[max_i][2])
out += "<br> Appropriate temperature:"
out += String(max)
out += "</p>"

document.body.insertAdjacentHTML("afterbegin", out)

/*document.head.insertAdjacentHTML("afterbegin", "<meta charset=\"utf-8\">")*/
    