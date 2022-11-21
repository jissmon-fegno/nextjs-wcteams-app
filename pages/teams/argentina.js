import Link from 'next/link'
import React from 'react'
import style from './Argentina.module.scss';

export default function Argentina() {
  return (
    <div>
        <h2  className={style.title}>
            Argentina Squad
        </h2>
        <ul>
            <li>
               Messi
               <button
                className={style.btn}
                style={{marginLeft: '1rem'}}
               >
                    <Link 
                        href={'/profiles/argentina/messi'}
                        style={{color: '#000'}}
                    >
                        View Profile
                    </Link>
                </button>
            </li>
            <li>
               DiMaria
               <button
                style={{marginLeft: '1rem'}}
               >
                    <Link
                        href={'/profiles/argentina/dimaria'}
                    >
                        View Profile
                    </Link>
                </button>
            </li>
        </ul>
    </div>
  )
}
