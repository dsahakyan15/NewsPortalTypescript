import React, { useState } from 'react'
import { searchAutoItem } from "../App/App.interface"
import { SearchAutoProps } from './SearchAuto.interface'
import styles from './SearchAuto.module.css'

const SearchAuto: React.FC<SearchAutoProps> = ({ searchAutocomplite }) => {
    const [searchArr, setSearchArr] = useState(searchAutocomplite)

    const handleChange = (e: any) => {
        if (e.target.value) {

            const ReTemp = searchArr.filter((item) => {

                if (item.text.toLowerCase().includes(e.target.value.toLowerCase())) {
                    return true
                }
            })
            console.log(ReTemp)
            setSearchArr(ReTemp)
        }

    }


    return (
        <div className={styles.search}>
            <div className={styles.form}>
                <div className={styles.formInput}>
                    <input type="text" onInput={handleChange} />
                </div>
                <div className={styles.formBtn}>
                    Search
                </div>
            </div>
            <div className={styles.searchList}>
                {

                    searchAutocomplite.map((item: searchAutoItem, id) => {
                        return <div className={styles.SearchListItem} key={id}>{item.text}</div>
                    })
                }
            </div>
        </div>
    )
}


export default SearchAuto