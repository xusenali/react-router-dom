import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function Single() {
  const { id } = useParams()
  const [getCountry, setGetCountry] = useState(null)
  const [loading, setLoading] = useState(true)
  console.log(getCountry);

  useEffect(() => {
    async function getCountries() {
      try {
        const res = await axios.get('https://ap-countries-api.vercel.app/all?page=1&limit=10');
        const bayroq = res.data.data.find(item => item.area.toString() === id)
        setGetCountry(bayroq)
      } catch (error) {
        console.error("Xatolik:", error);
      } finally {
        setLoading(false);
      }
    }

    getCountries()
  }, [id])

  if (loading) {
    return (
      <div className="fixed inset-0 bg-gray-300 bg-opacity-10 flex items-center justify-center z-50">
        <div className="text-black text-8xl font-semibold">
          Yuklanmoqda...
        </div>
      </div>

    )
  }
  return (
    <>
      <div className='w-[80%] h-150 mx-auto my-3  p-5'>
        <Link to='/country'> <h1 className='w-full'> {'<--'} Back </h1></Link>
        <div className='flex w-full h-full  justify-center items-center gap-20'>
          <img className='h-100 w-100 object-contain' src={getCountry.flags.png} alt="" />
          <div className='flex w-130 h-50  gap-10'>
            <ul className='flex flex-col gap-1'>
              <h1 className='text-2xl '>{getCountry.name.common}</h1>
              <p>Native Name: {Object.values(getCountry.name.nativeName || {})[0]?.common || "No data"}</p>

              <p>Population: {getCountry.population}</p>
              <p>Region: {getCountry.region}</p>
              <p>Sub Region: {getCountry.subregion}</p>
              <p>Capital: {getCountry.capital}</p>
              <ul className='flex gap-5'>
                <li className='flex gap-2'>
                  Borders:
                  {getCountry.borders?.length > 0
                    ? getCountry.borders.map((border, i) => <span key={i}>{border}</span>)
                    : " No borders"}
                </li>

              </ul>
            </ul>
            <ul className='flex flex-col gap-2 mt-20'>
              <li>Top Level Domain:  {getCountry.fifa}</li>
              <li>
                Currencies: {Object.values(getCountry.currencies || {})[0]?.name || "No data"}
              </li>

              <li>
                Languages: {Object.values(getCountry.languages || {}).join(', ') || "No data"}
              </li>

            </ul>
          </div>
        </div>

      </div>
    </>
  )
}

export default Single
