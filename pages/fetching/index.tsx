import Link from 'next/link';
import MainContainer from '../../components/MainContainer/MainContainer'
import styles from '../../styles/Home.module.css'

export default function Fetching() {
  return (
	<MainContainer>
		<div className={styles.routes}>
			<h2 className={styles.fetching}>  
				<Link href={'/fetching/ssr'} className={styles.card}>
					SSR <span className={styles.arrow}>&#8594;</span>
				</Link>
			</h2>
			<h2 className={styles.fetching}>  
				<Link href={'/fetching/ssg'} className={styles.card}>
					SSG <span className={styles.arrow}>&#8594;</span>
				</Link>
			</h2>
			<h2 className={styles.fetching}>  
				<Link href={'/fetching/isr'} className={styles.card}>
					ISR <span className={styles.arrow}>&#8594;</span>
				</Link>
			</h2>
			<h2 className={styles.fetching}>  
				<Link href={'/fetching/csr'} className={styles.card}>
					CSR <span className={styles.arrow}>&#8594;</span>
				</Link>
			</h2>

		</div>
	</MainContainer>
  )
}
