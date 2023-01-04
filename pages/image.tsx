import Image from 'next/image';
import MainContainer from '../components/MainContainer/MainContainer';
import nextjsCover from '../public/nextjs-cover.jpg';
import styles from '../styles/Home.module.css';
import placeholder from '../public/data_load.svg';

export default function ImagePage() {

	return (
		<MainContainer>
			<h1>{"<Image>"}</h1>
			<h3>Image with blur placeholder</h3>
			<div>
				<Image 
					src={nextjsCover}
					alt='space'
					width={500}
					height={300}
					placeholder='blur'
				/>
			</div>
			<div className={styles.distance}> distance </div>
			<h3>Image with lazy loading</h3>
			<div>
				<Image 
					src={'https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/11/optimise-image-in-next-js.jpg?q=50&fit=contain&w=1140&h=&dpr=1.5'}
					alt='space'
					width={500}
					height={300}
				/>
			</div>
		</MainContainer>
	)
}
