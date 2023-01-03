import { Inter } from '@next/font/google'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Header() {
  return (
	<div className={styles.grid}>
		<Link href={'/'} className={styles.card}>
			<h2 className={inter.className}>
				Home <span>-&gt;</span>
			</h2>
		</Link>

		<Link href={'/routing'} className={styles.card}>
			<h2 className={inter.className}>
			 Routing <span>-&gt;</span>
			</h2>
		</Link>

		<Link href={'/fetching'} className={styles.card}>
			<h2 className={inter.className}>
			 Data fetching <span>-&gt;</span>
			</h2>
		</Link>

		<a
			href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
			className={styles.card}
			rel="noopener noreferrer"
		>
			<h2 className={inter.className}>
			Templates <span>-&gt;</span>
			</h2>

		</a>

	</div>
  )
}
