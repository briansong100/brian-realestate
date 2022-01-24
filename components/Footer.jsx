import {Box, Flex} from '@chakra-ui/react'

const Footer =()=>(
	<Flex justifyContent='space-around' alignItems='center' color='white.600' borderTop={3} bg='blue.600'>
		<Box textAlign='center'  fontSize='lg' textColor='white'fontWeight='bold' m={3} >
			Brian Realestate Inc.  
		</Box> 
		<Box color='white.600'   fontSize='lg' textColor='white'>
			regis100@gmail.com
		</Box>
	</Flex>
)

export default Footer