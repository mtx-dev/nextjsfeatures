import { GetServerSideProps, NextPage } from 'next';
import Link from 'next/link';
import MainContainer from '../../components/MainContainer/MainContainer'
import styles from '../../styles/Home.module.css';
import { contactType } from '../../types';

type contactsTypeProps = {
	contacts: contactType[],
  }

export const getServerSideProps:GetServerSideProps = async () => {
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/`);
	const data = await response.json();
  
	if (!data) {
	  return {
		notFound: true,
	  }
	}
  
	return {
	  props: { contacts: data },
	}
  };
  
const Ssr:NextPage<contactsTypeProps> = ({ contacts }) => {

	return (
		<MainContainer>
			<h1>SSR</h1>
			<h2>Contacts</h2>
			<div className={styles.routes}>
				<ul>
					{contacts && contacts.map(({ id, name }) => (
						<li key={id}>
						<Link href={`/contacts/${id}`}>{name}</Link>
						</li>
					))}
				</ul>
			</div>
		</MainContainer>
	)
}

export default Ssr;