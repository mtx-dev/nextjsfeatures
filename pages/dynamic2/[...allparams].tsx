import { useRouter } from 'next/router'
import MainContainer from '../../components/MainContainer/MainContainer'
import styles from '../../styles/Home.module.css'

const Post = () => {
	const router = useRouter()
	const { allparams } = router.query;

	return (
		<MainContainer>
			<div className={styles.routes}>
				<p>Queries params :</p>
				<ul>
					{allparams && Array.isArray(allparams) && allparams.map(
						(element: any, index: number) => 
							<li key={index}>{'[' + index + '] = ' + element}</li> )
					}
				</ul>
			</div>
		</MainContainer>
	)
}

export default Post