import Link from "next/link";
import { FC } from 'react'

interface Props {
	href:string;
	text:string;
}
const A: FC<Props> = ({ href, text }) => {
  return (
	<Link href={href} legacyBehavior>
		<a style={{ color: 'blue',  textDecoration: 'underline'}}>{text}</a>
	</Link>
  )
}

export default A;
