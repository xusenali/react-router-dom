import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function Flag() {
    const [allCountries, setAllCountries] = useState([])
    const [loading, setLoading] = useState(true);

    console.log(allCountries);

    useEffect(() => {
        getCountries()
    }, [])

    async function getCountries() {
        try {
            const res = await axios.get('https://ap-countries-api.vercel.app/all?page=1&limit=10');
            setAllCountries(res.data.data);
        } catch (error) {
            console.error("Xatolik:", error);
        } finally {
            setLoading(false);
        }
    }

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
            <div className='flex flex-wrap w-[80%] mx-auto h-max gap-10 my-4' >
                {allCountries.map(item => {
                    return (
                        <Link  key={item.cca2} to={`/country/${item.area}`}> <div className='w-[250px] h-[330px] shadow-lg  rounded'>
                            <img className='w-full h-40' src={item.flags.png} alt="" />
                            <div className='p-5 '>
                                <h1 className='font-[500] text-2xl mb-0.5'>{item.name.common}</h1>
                                <p>Population: {item.population} </p>
                                <p>Region: {item.region}</p>
                                <p>Capital: {item.capital}</p>
                            </div>
                        </div></Link>
                    )
                })
                }
            </div>
        </>
    )
}
export default Flag

