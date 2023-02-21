const url = 'http://localhost:3001/api/v1/reservations'

const getData = () => {
    return fetch(`${url}`)
    .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong.')
        }
        return res.json()
    })
}

const addNewData = (name, date, time, number) => {
    return fetch (`${url}`,
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ id: Date.now(), name: name, date: date, time: time, number: number })
    })
    .then(res => {
        if(!res.ok) {
            throw new Error('Something went wrong.')
        }
        return res.json()
    })
}

export { getData, addNewData }