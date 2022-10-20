let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el")
let totalEl = document.getElementById("total-el")
let count = 0
let total = 0

function increment() {
    count ++
    countEl.textContent = count
}

function decrement() {
    count--
    countEl.textContent = count
}

function save() {
    let countStr = count + " | "
    saveEl.textContent += countStr
    countEl.textContent = 0
    total += count
    totalEl.textContent = "Total: "
    totalEl.textContent += total
    count = 0
}
