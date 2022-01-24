import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { Flex, Box, Input, Text, Icon} from '@chakra-ui/react'
import {BsFilter} from 'react-icons/bs'
import Noresult from '../assets/images/Noresult.webp'
import SearchFilter from "../components/SearchFilter";
import Property from "../components/Property";
import {fetchApi, baseUrl} from '../utils/fetchApi'


const Search =({properties}) => {

	// console.log(properties);
	const [searchFilters, setSearchFilters] =useState(true)

	const router =useRouter()

	return (
		<Box marginTop={2}>
			<Flex
				cursor='pointer'
				bg='gray.100'		
				borderBottom={1}
				borderColor='gray.100'
				p={2}
				fontWeight='bold'
				fontSize='lg'
				justifyContent='center'
				alignItems='center'
				onClick={()=>setSearchFilters( (prev)=>!prev)}
			>
				<Text >Search Properties By Filter</Text>
				<Icon paddingLeft={4} w={12} h={6} as={BsFilter} color='blue.600'/>
			</Flex>
			{ searchFilters && <SearchFilter />}
			<Text fontSize='2xl' p={2} fontWeight='bold' align='center'>
				Proprerty {router.query.purpose}
			</Text>

			<Flex flexWrap='wrap' justifyContent='center'  >
				{properties.map(property =>( <Property key={property.id} property={property} />))}
			</Flex>
			{properties.length === 0 && (
			<Flex flexDirection='column' justifyContent='flex-start' alignItems='center'  marginTop={5} marginBottom ={5}  >
				<Image src={Noresult} alt='No result' />
			</Flex>	
			)}
		</Box>
	)
}

export default Search

export async function getServerSideProps({query}) {

   const purpose = query.purpose || 'for-rent';
	 const rentFrequency = query.rentFrequency || 'yearly';
	 const minPrice = query.minPrice || '0';
	 const maxPrice = query.maxPrice || '1000000';
	 const roomsMin = query.roomsMin || '0';
	 const bathsMin = query.bathsMin || '0';
	 const sort = query.sort || 'price-desc';
	 const areaMax = query.areaMax || '35000';
	 const locationExternalIDs = query.locationExternalIDs || '5002';
	 const categoryExternalID = query.categoryExternalID || '4';
 
	 const data = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`);
 
  return {
    props: {
      properties: data?.hits
    }
  }
}