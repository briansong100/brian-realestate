import Link from "next/link";
import {Menu,
  MenuButton,
  MenuList,
  MenuItem,
	IconButton,
	Flex,
	Box,
	Spacer
} from '@chakra-ui/react'

import {FcHome, FcAbout, FcMenu} from 'react-icons/fc'
import { BsSearch } from "react-icons/bs";
import {FiKey} from 'react-icons/fi'

const Navbar =()=>(
	<Flex p={3} borderBottom={1} bg='blue.600'>
		<Box fontSize='3xl' fontWeight='bold' color='white' marginLeft={4}>
			<Link href='/' paddingLeft={2} >Brian Realestate</Link>
		</Box>
		<Spacer />
		<Box>
			<Menu >
				<MenuButton as={IconButton} icon={<FcMenu/>} variant ='outlined' bg='green.300' px={4}
					py={2}
					transition='all 0.2s'
					borderRadius='md'
					borderWidth='1px'
					_hover={{ bg: 'blue.200' }}
					_expanded={{ bg: 'blue.400' }}
					_focus={{ boxShadow: 'outline' }}/>
				<MenuList>
					<Link href='/'><MenuItem icon={<FcHome />}>Home</MenuItem></Link>
					<Link href='/search'><MenuItem icon={<BsSearch />}>Search</MenuItem></Link>
					<Link href='/search?purpose=for-sale'><MenuItem icon={<FcAbout />}>Buy Property</MenuItem></Link>
					<Link href='/search?purpose=for-rent'><MenuItem icon={<FiKey />}>Rent Property</MenuItem></Link>
				</MenuList>
			</Menu>
		</Box>
	</Flex>

)

export default Navbar