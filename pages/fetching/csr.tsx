import Link from 'next/link';
import { useEffect, useState } from 'react';
import MainContainer from '../../components/MainContainer/MainContainer'
import styles from '../../styles/Home.module.css'

const Csr = () => {
	const [contacts, setContacts] = useState([]);

	useEffect ( () => {
		const getContacts = async () => {
			const response = await fetch('https://jsonplaceholder.typicode.com/users');
			const data = await response.json();
			setContacts(data);
		}

		getContacts();
	}, [])
  
	return (
		<MainContainer>
			<h1>CSR</h1>
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

export default Csr;