
import Link from 'next/link';
import Image from 'next/image';
import millify from 'millify';
import {Box, Flex, Text, Avatar, Spacer} from '@chakra-ui/react'
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {FcApprove} from 'react-icons/fc'
import {fetchApi, baseUrl} from '../../utils/fetchApi'
import ImageScrollBar from '../../components/ImageScrollBar';
import DefaultImage from '../../assets/images/default.jpg'

const PropertyDetails = ({propertyDetails:{
	photos, price, rooms, baths, rentFrequency, agency,phoneNumber,
	title, area, isVerified, description, type, purpose, furnishingStatus,
	amenities}}) => {

	// console.log(photos);
	return (
		<Box maxWidth={1000} margin='auto' p={4}>
			{photos && <ImageScrollBar photos={photos} /> }
			<Flex p={2} alignItems='center'  justifyContent='space-between' >
				<Flex alignItems='center'>
					<Box paddingRight={3} color="gray.400" >{isVerified &&<FcApprove/> }</Box>
					<Text fontWeight="bold" fontSize="lg">AED {millify(price)} { rentFrequency && `/${rentFrequency}`}</Text>
				</Flex>

				<Flex ><Text fontSize='sm' fontWeight='bold'>{agency.name}</Text><Avatar size="sm" src={ agency?.logo?.url } /></Flex>
			</Flex>
			<Flex alignItems='center' justifyContent='space-between' p={2} w={240} color='blue.400'	>
				{rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)}sqft <BsGridFill />
			</Flex>
			<Box marginTop={2} p={2} >
				<Text fontSize='lg' fontWeight='bold' marginBottom={2}>{title}</Text>
				<Text lineHeight={2} color='gray.600'>{description}</Text>
			</Box>
			<Flex flexWrap='wrap' transforms='uppercase' justifyContent='space-between'>
				<Flex justifyContent='space-between' width='auto' borderBottom={1} borderColor='gray.400' p={3}>
					<Text paddingRight={3}>Purpose</Text>
					<Text  fontWeight='bold'>{purpose}</Text>
				</Flex>
				<Flex justifyContent='space-between' width='auto'  borderBottom={1} borderColor='gray.400' p={3}>
					<Text paddingRight={3} >Type</Text>
					<Text  fontWeight='bold'>{type}</Text>
				</Flex>
				{ furnishingStatus && (
				<Flex justifyContent='space-between' width='auto' borderBottom={1} borderColor='gray.400' p={3}>
					<Text paddingRight={3}>Furnishing Status</Text>
					<Text fontWeight='bold'>{furnishingStatus}</Text>
				</Flex>
				)}
			</Flex>
			{amenities.length >0 && (
				<>
					<Text fontWeight='bold' fontSize='2xl'>Amenities</Text>
					<Flex flexWrap='wrap'>
						{ amenities.map((item)  => (
							<>
							<Text color ='blue.600' p={1} bg='gray.200' fontSize='l' m={1} marginLeft={3} borderRadius={2} fontWeight='bold'>{item.text}</Text>
							<Text m={1}>-</Text>
							{ item.amenities.map( amenity => (
								<Text color ='blue.400' p={1} bg='gray.200' fontSize='l' m={1} borderRadius={2} key={amenity.text}>{amenity.text}</Text>
							))}
							</>
						)
						)}

					</Flex>
				</>
			)}

		</Box>
	)
}

export default PropertyDetails

export async function getServerSideProps( { params: {id}}) {

	const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`)
	return (
		{ props : {propertyDetails: data} }
	)
}