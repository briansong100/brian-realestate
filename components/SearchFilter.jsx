import { useEffect, useState} from 'react'
import {Flex, Box, Select, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import {MdCancel} from 'react-icons/md'
import {filterData } from '../utils/filterData'
import Noresult from '../assets/images/Noresult.webp'
import {fetchApi, baseUrl} from '../utils/fetchApi'

const SearchFilter =()=>{

	const [filters, setFilters] =useState(filterData)

  const [searchTerm, setSearchTerm] = useState('');
  const [locationData, setLocationData] = useState();
  const [showLocations, setShowLocations] = useState(false);
  const [loading, setLoading] = useState(false);

	const router = useRouter()
	const {query} = router

	const searchProperties =(filteredData) =>{
		const path = router.pathname
		// const {query}  = router
		if (filteredData.purpose ==='for-sale') {
			delete query?.rentFrequency
		}
		Object.assign(query, filteredData)
		console.log(query);
		router.push( {pathname:path, query})
	}
	useEffect(() => {
    if (searchTerm !== '') {
      const fetchData = async () => {
        setLoading(true);
        const data = await fetchApi(`${baseUrl}/auto-complete?query=${searchTerm}`);
        setLoading(false);
        setLocationData(data?.hits);
      };

      fetchData();
    }
  }, [searchTerm]);
	return (
		<>
			<Flex bg="gray.100" p={4} justifyContent='center' flexWrap='wrap'>
				{filters.map( (filter) =>(
				<Box key={filter.queryName} marginTop={2}>
					{/* <Text marginLeft={4} marginTop={4} w={40}>{filter.placeholder}</Text> */}
					<Select 
						onChange={ (e)=> searchProperties({ [filter.queryName]:e.target.value })}
						placeholder={filter.placeholder}
						w="40"	
						p={2}
						paddingTop={0}
						isDisabled ={ (filter.queryName === 'rentFrequency' && query['purpose'] === 'for-sale')}	
						defaultValue={query[filter.queryName]}
					>
						{filter.items.map( item =><option value={item.value} key={item.value} >{item.name}</option>)}
					</Select>
				</Box>		
				))}
				<Flex flexDir='column' justifyContent='flex-start'>
					<Button 
						onClick={() => setShowLocations(!showLocations)} 
						border='1px' w={280} 
						borderColor='gray.400' 
						p={2} 
						marginTop={2} 
						marginLeft={4} 
					>
						Search Location
					</Button>
					{showLocations && (
					<Flex flexDir='column' pos='relative' m={2} p={2}>
						<Input
							placeholder='Type Here'
							value={searchTerm}
							w={280}
							focusBorderColor='gray.300'
							onChange={(e) => setSearchTerm(e.target.value)}
						/>
						{searchTerm !== '' && (
						<Icon
							as={MdCancel}
							pos='absolute'
							cursor='pointer'
							right='5'
							top='5'
							zIndex='100'
							onClick={() => setSearchTerm('')}
						/>
						)}
						{loading && <Spinner margin='auto' marginTop='3' />}
						{showLocations && (
						<Box height='auto' maxHeight={300} overflow='auto' w={275}>
							{locationData?.map((location) => (
							<Box
								key={location.id}
								onClick={() => {
									searchProperties({ locationExternalIDs: location.externalID });
									setShowLocations(false);
									setSearchTerm(location.name);
								}}
							>
								<Text cursor='pointer' bg='gray.200' p='2' borderBottom='1px' borderColor='gray.100' >
									{location.name}
								</Text>
							</Box>
							))}
							{!loading && !locationData?.length && (
							<Flex justifyContent='center' alignItems='center' flexDir='column' marginTop='5' marginBottom='5' >
								{/* <Image src={Noresult} /> */}
								<Text fontSize='xl' marginTop='3'>
									Waiting to search!
								</Text>
							</Flex>
							)}
						</Box>
						)}
					</Flex>
					)}
				</Flex>
			</Flex>
		</>


	)
}

export default SearchFilter