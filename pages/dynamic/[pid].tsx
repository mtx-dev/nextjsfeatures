import { useRouter } from 'next/router'
import MainContainer from '../../components/MainContainer/MainContainer'
import styles from '../../styles/Home.module.css'

const Post = () => {
	const router = useRouter()
	const { pid } = router.query

	return (
		<MainContainer>
			<div className={styles.routes}>
				<p>Post pid: {pid}</p>
			</div>
		</MainContainer>
	)
}

export default Post