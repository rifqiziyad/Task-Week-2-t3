const cariHariKerja = (day) => {
  return new Promise((resolve, reject ) => {
    setTimeout (() => {
      const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat']
      let cek = dataDay.find((item) => {
        return item === day
      })
      if(cek) {
        resolve(cek)
      } else {
        reject (new Error('Hari ini bukan hari kerja'))
      }
    }, 3000)
  })
}

const hasil = async hari => {
  try {
    console.log('Proses Synchronous')
    console.log(await cariHariKerja(hari))
    console.log('Synchronous berhasil')
  } catch (error) {
    console.log(error)
    console.log('Synchronous berhasil')
  }
}

hasil('senin')

cariHariKerja('selasa')
.then( result => {
  console.log(result)
})
.catch( error => {
  console.log(error)
})


// .then() dan try akan menjalankan resolve ketika promise-nya berhasil
// .catch() dan catch akan menalankan reject ketika promise-nya gagal

