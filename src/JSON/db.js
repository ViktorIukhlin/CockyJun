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
            })
    }
}