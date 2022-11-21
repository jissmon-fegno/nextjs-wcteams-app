import Link from 'next/link'
import React from 'react'

export default function Argentina() {
  return (
    <div>
        <h2>
            Argentina Squad
        </h2>
        <ul>
            <li>
               Messi
               <button
                style={{marginLeft: '1rem'}}
               >
                    View Profile
                </button>
            </li>
            <li>
               DiMaria
               <button
                style={{marginLeft: '1rem'}}
               >
                    View Profile
                </button>
            </li>
        </ul>
    </div>
  )
}
