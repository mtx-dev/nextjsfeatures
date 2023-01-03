import { GetStaticProps, GetStaticPropsContext, NextPage } from "next";
import { ParsedUrlQuery } from "querystring";
import ContactInfo from "../../components/ContactInfo/ContactInfo";
import MainContainer from "../../components/MainContainer/MainContainer";
import { contactType } from "../../types";

type contactTypeProps = {
    contact: contactType,
}

interface Params extends ParsedUrlQuery {
	id: string;
}
  

export const getStaticPaths = async () => {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/');
	const data = await response.json() as contactType[];

	const paths = data.map(({ id }) => ({
		params: { id: id.toString() },
	}))

	return {
		paths,
		fallback: false,
	}
}

export const getStaticProps: GetStaticProps<contactTypeProps, Params> = async (context) =>{
	const { id } = context.params!;
	const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
	const data = await response.json() as contactType;

	if (!data) {
		return {
		  notFound: true,
		}
	  }
	
	return {
		props: { contact: data },
	}	
} 

const Contact:NextPage<contactTypeProps> = ({ contact }) => (
	<MainContainer>
	  <ContactInfo contact={contact} />
	</MainContainer>
  );
  
export default Contact;