import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {

  const [cicilan, setCicilan] = useState(5250000)
  const [pinjaman, setPinjaman] = useState(600000000);
  const [tahun, setTahun] = useState(10)
  const [bunga, setBunga] = useState(5)

  function handleChangeCicilan(){
    const jumlahValue = jumlahPinjaman.value
    const bungaValue = 1 + 1*(bungaPinjaman.value/100)
    const tahunValue = (tahunPinjaman.value * 12)

    setCicilan(jumlahValue * (bungaValue/tahunValue))
  }

  function handleChangePinjaman(event){
    if(pinjaman){
      setPinjaman(event.target.value)
      handleChangeCicilan()
    }
  }

  function handleChangeTahun(event){
    setTahun(event.target.value)
    handleChangeCicilan()
  }

  function handleChangeBunga(event){
    setBunga(event.target.value)
    handleChangeCicilan()
  }


  let rupiah = new Intl.NumberFormat('id-ID');
  return (
    <div className=' flex flex-col items-center justify-center bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 w-screen h-screen'>
      <div className=' bg-white w-8/12 h-5/6 p-6 rounded-2xl border-t-8 border-teal-600'>
        <h1 className=' font-bold text-3xl mb-6'>Simulasi Pinjaman</h1>
        <div className=' bg-teal-600 mb-12 text-white flex flex-col items-center gap-4 p-2 rounded-lg border-sky-600 border-b-8'>
          <h3>Angsuran per bulan</h3>
          <h2 className=' font-bold text-2xl'>Rp{rupiah.format(cicilan)}</h2>
          <h3>dari total pinjaman Rp{rupiah.format(pinjaman)}</h3>
        </div>
        <div className=' mb-4 w-full'>
          <div className=' flex justify-between'>
            <h2 className='mb-2'>Jumlah Pinjaman</h2>
            <h2 onChange={handleChangePinjaman}>Rp{rupiah.format(pinjaman)}</h2>
          </div>
          <input type="range" id='jumlahPinjaman' min={50000000} max={2000000000} step={25000000} onChange={handleChangePinjaman} value={pinjaman} className=' w-full'/>
        </div>
        <div className=' mb-4 w-full'>
          <div className=' flex justify-between'>
            <h2 className='mb-2'>Jangka Waktu</h2>
            <h2>{tahun} Tahun</h2>
          </div>
          <input type="range" id='tahunPinjaman' min={1} max={25} step={1} onChange={handleChangeTahun} value={tahun}  className=' w-full'/>
        </div>
        <div className=' mb-4 w-full'>
          <div className=' flex justify-between'>
            <h2 className='mb-2'>Suku Bunga Efektif</h2>
            <h2>{bunga}%</h2>
          </div>
          <input type="range" id='bungaPinjaman' min={3} max={15} step={1} onChange={handleChangeBunga} value={bunga}  className=' w-full'/>
        </div>
      </div>
    </div>
  )
}
