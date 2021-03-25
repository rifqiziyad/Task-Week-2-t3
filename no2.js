const getMonth = callback => {
    setTimeout (() => {
        let error = true
        let month = ['January', 'February', 'March', 'April', 'May', 'Juni', 'July', 'August', 'September', 'October', 'November', 'Desember']
        if(!error) {
            callback(null, month)
        } else {
            callback(new Error('Sorry Data not found', []))
        }
    }, 4000)
}

getMonth((param1, param2) => {
    if (param1 === null) {
        param2.map( a => { console.log(a) })
    } else {
        console.log(param1)
    }
})