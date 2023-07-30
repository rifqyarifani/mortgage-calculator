import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'

export default function App() {
  
  const defaultValue = {
    cicilan: 6363930,
    pinjaman: 600000000,
    tahun: 10,
    bunga:5,
  }

  const [cicilan, setCicilan] = useState(defaultValue.cicilan)
  const [pinjaman, setPinjaman] = useState(defaultValue.pinjaman);
  const [tahun, setTahun] = useState(defaultValue.tahun)
  const [bunga, setBunga] = useState(defaultValue.bunga)

  function handleChangeCicilan(){
    const jumlahValue = jumlahPinjaman.value
    const bungaValue = (bungaPinjaman.value/100)/12;
    const tahunValue = (tahunPinjaman.value * 12)

    setCicilan( jumlahValue * (bungaValue *(1 + bungaValue) ** tahunValue)/((1 + bungaValue) ** tahunValue - 1))
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
    <div className=' flex flex-col items-center bg-gradient-to-r from-teal-100 via-cyan-100 to-blue-100 w-screen h-screen'>
      <div className=' bg-white w-8/12 h-5/6 p-6 m-4 rounded-2xl border-t-8 border-teal-600'>
        <h1 className=' font-bold text-3xl mb-6'>Simulasi Pinjaman</h1>
        <div className=' bg-teal-600 mb-12 text-white flex flex-col items-center gap-4 p-2 rounded-lg border-sky-600 border-b-8'>
          <h3>Angsuran per bulan</h3>
          <h2 className=' font-bold text-2xl'>Rp{rupiah.format(Math.floor(cicilan))}</h2>
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
      <div className=' bg-slate-800 text-white w-full bottom-0 fixed flex justify-between p-6'>
        <p>Copyright © 2023. All rights are reserved. Rifqy Arifani</p>
        <div className=''>
          <a href="https://github.com/rifqyarifani" className=' text-3xl mr-4' target='_blank'><FontAwesomeIcon icon={faGithub} /></a>
          <a href="https://www.linkedin.com/in/rifqyarifani/" className=' text-3xl' target='_blank'><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </div>
  )
}
