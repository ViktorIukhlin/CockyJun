export class Question {
    static create(question) {
        return fetch('https://cockyjun-3ca04.firebaseio.com/db.json', {
            method: 'POST',
            body: JSON.stringify(question),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => {
                console.log('res', res)
                question.id = res.name
                return question
            })
    }
}

export function addDateArrToLocalStorage(date, name) {
    const all = getDateFromLocalStorage()
    all.push(date)
    localStorage.setItem(name, JSON.stringify(all))
}

export function addDateToLocalStorage(date, name) {
    localStorage.setItem(name, JSON.stringify(date))
}

export function getDateFromLocalStorage(name) {
    return JSON.parse(localStorage.getItem(name) || false)
}