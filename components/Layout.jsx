import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Layout = ({children}) => {
	return (
		<>
			<Head>
				<title>Brian</title>
			</Head>
			<Box maxWidth={1280} m='auto'>
				<header>
					<Navbar />
				</header>
				<main>
					{children}
				</main>
				<footer>
					<Footer />
				</footer>
			</Box>
		</>
		
	)
};

export default Layout;
