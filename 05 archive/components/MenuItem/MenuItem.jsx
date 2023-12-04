'use client'

import styles from '../MenuItem/MenuItem.module.css'

const MenuItem = (props) =>{


    return(
    <div className={`${styles.collections} collection with-header`}>
        {props.children}
    </div>
    )
}

export default MenuItem