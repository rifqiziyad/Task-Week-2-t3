// const cekJam = parameter => {
//     return new Promise( (resolve, reject) => {
//         setTimeout(() => {
//             const jam = new Date().getHours()
//             const menit = new Date().getMinutes()

//             const cek = parameter === jam
//             if(cek){
//                 resolve(`Benar... Sekarang jam ${parameter}:${menit}`)
//             } else {
//                 reject(`Salah, sekarang jam ${jam}:${menit}`)
//             }
//         },3000)
//     })
// }

// const hasil = async a => {
//     try {
//       console.log('Sedang Proses')
//       console.log(await cekJam(a))
//       console.log('Proses Selesai')
//     } catch (salah) {
//       console.log(salah)
//       console.log('Proses Selesai')
//     }
// }

// hasil(18)



const tebakAngka = parameter => {
  return new Promise( (resolve, reject) => {
    let comp = Math.random()
    if( comp >= 0 && comp <= 0.5) {
      comp = 1
    } else {
      comp = 2
    }
    const cek = comp === parameter
    if(cek) {
      resolve(`Benar....kamu pilih ${parameter} dan computer pilih ${comp}`)
    } else {
      reject(`Salah....kamu pilih ${parameter} dan computer pilih ${comp}`)
    }
  })
}

tebakAngka(1)
.then(benar => {
  console.log(benar)
})
.catch(salah => {
  console.log(salah)
})