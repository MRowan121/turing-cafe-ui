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

export { getData }