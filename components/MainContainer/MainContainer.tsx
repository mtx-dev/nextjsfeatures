import React, { FC } from 'react';
import Header from '../Header/Header';
import styles from '../../styles/Home.module.css'

const MainContainer: FC<React.PropsWithChildren> = ({ children }) => {
  return (
	<main className={styles.main}>
		<Header />
		{children}
	</main>
  )
}


export default  MainContainer;