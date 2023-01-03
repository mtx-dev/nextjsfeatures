import { ChangeEventHandler, useState } from 'react';
import { useRouter } from 'next/router'
import Link from 'next/link';
import MainContainer from '../components/MainContainer/MainContainer'
import styles from '../styles/Home.module.css'
import A from '../components/A/A';

export default function Routing() {
	const router = useRouter();
	const [pid, setPid] = useState('888');
	const [all, setAll] = useState('path1/path2');
	const handlePid:ChangeEventHandler<HTMLInputElement> = (e) => {
		setPid(e.target.value)
	}
	const handleAll:ChangeEventHandler<HTMLInputElement> = (e) => {
		setAll(e.target.value)
	}
	return (
		<MainContainer>
			<div className={styles.routes}>
				<ul>
					<li> Static <br/>
						&quot;/routing.tsx &quot; <br/>
						<A href={'/routing'} text={'Routing'}/>
					</li>
					<li> Dynamic single param <br/> 
						&quot;dynamic/[pid].tsx&quot; <br/>
						/dynamic/<input type='text' value={pid} onChange={handlePid}/>
						<Link href={'/dynamic/' + pid}> Go</Link>
					</li>

					<li> Dynamic catch all param <br/> 
						&quot;dynamic2/[...all].tsx&quot;<br/>
						/dynamic2/<input type='text' value={all} onChange={handleAll}/>
						<Link href={'/dynamic2/' + all}> Go</Link>
					</li>

					<li>  Imperatively <br/>
						<button onClick={() => router.push('/')}>
							Click here to router.push(&lsquo;/&lsquo;)
						</button> 	
					</li>
				</ul>
			</div>
		</MainContainer>
	)
}
