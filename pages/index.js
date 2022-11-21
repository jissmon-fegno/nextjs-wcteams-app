import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className='title'>World Cup 2022</h1>
      <h2>Teams</h2>
      <nav>
      <li>
          <Link
            href={'/teams/argentina'}
          >
            Argentina
          </Link>
        </li>
        <li>
          <Link
            href={'/teams/brazil'}
          >
            Brazil
          </Link>
        </li>
        <li>
          <Link
            href={'/teams/germany'}
          >
            Germany
          </Link>
        </li>
      </nav>
    </div>
  )
}
