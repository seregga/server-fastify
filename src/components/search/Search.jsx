import React from 'react'
import s from './Search.module.css'
import searchImg from './../../assets/icons/search.svg'

const Search = ({ insert, setInsert }) => {

    return (
        <section className={s.container}>
            <input type="text" value={insert} onChange={e => setInsert(e.target.value)} />
            {/* <div className={s.searchImg} >
                <svg xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.22 4c10.62 0 19.23 8.42 19.23 18.8 0 4.9-1.92 9.36-5.06 12.7l6.17 6.03a1.4 1.4 0 010 2.04 1.5 1.5 0 01-1.92.15l-.17-.14-6.24-6.1a19.41 19.41 0 01-12 4.12C12.6 41.6 4 33.18 4 22.8S12.6 4 23.22 4zm0 2.9c-8.98 0-16.26 7.12-16.26 15.9 0 8.78 7.28 15.9 16.26 15.9S39.5 31.58 39.5 22.8c0-8.78-7.29-15.9-16.27-15.9z" />
                </svg>
            </div> */}
        </section >
    )
}
export default Search
