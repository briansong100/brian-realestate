
import Link from 'next/link';
import Image from 'next/image';
import millify from 'millify';
import {Box, Flex, Text, Avatar} from '@chakra-ui/react'
import {FaBed, FaBath} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {FcApprove} from 'react-icons/fc'

import DefaultImage from '../assets/images/default.jpg'

const  Property = ({property:{externalID, coverPhoto, price, rooms, baths, rentFrequency, title, area, agency, isVerified}}) => {

	return (

		<Link href={`/property/${externalID}`} passHref>
			<Flex flexWrap="wrap" justifyContent="center" cursor="pointer" width={420} p={1} borderRadius={10} >
				<Box p={2} >
					<Image src={ coverPhoto? coverPhoto.url : DefaultImage } alt='house' width={400} height={260} />
				</Box>
				<Box width='full'>
					<Flex p={2} alignItems='center'  justifyContent='space-between' >
						<Flex alignItems='center'>
							<Box paddingRight={3} color="gray.400" >{isVerified &&<FcApprove/> }</Box>
							<Text fontWeight="bold" fontSize="lg">AED {millify(price)} { rentFrequency && `/${rentFrequency}`}</Text>
						</Flex>
						<Box><Avatar size="sm" src={ agency?.logo?.url } /></Box>
					</Flex>
					<Flex alignItems='center' justifyContent='space-between' p={1} w={240} color='blue.400'	>
						{rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)}sqft <BsGridFill />
					</Flex>
					<Text fontSize='lg'>
						{ title.length > 30 ? `${title.substring(0,30)}...`: title}
					</Text>
				</Box>
			</Flex>

		</Link>

	)
};

export default Property;

// "id":2729035
// "ownerID":525726
// "userExternalID":"525726"
// "sourceID":1
// "state":"active"
// "_geoloc":{...}2 items
// "geography":{...}2 items
// "purpose":"for-rent"
// "price":5000
// "product":"hot"
// "productLabel":"default"
// "productScore":1
// "rentFrequency":"monthly"
// "referenceNumber":"676-Ap-R-1026"
// "permitNumber":NULL
// "title":"Studio in Damac Hills | Golf Promenade 3-A"
// "title_l1":"شقة في غولف بروميناد 3A غولف بروميناد 3 غولف بروميناد داماك هيلز 5000 درهم - 5456232"
// "externalID":"5456232"
// "slug":"studio-in-damac-hills-golf-promenade-3-a-5456232"
// "slug_l1":"studio-in-damac-hills-golf-promenade-3-a-5456232"
// "location":[...]6 items
// "category":[...]2 items
// "createdAt":1634458940
// "updatedAt":1642683310
// "reactivatedAt":1640593437.983663
// "rooms":0
// "baths":1
// "area":52.67602368
// "score":100
// "score_l1":62
// "coverPhoto":{...}7 items
// "photoCount":20
// "videoCount":0
// "panoramaCount":0
// "phoneNumber":{...}6 items
// "contactName":"Walter"
// "agency":{...}13 items
// "hash":"747e5ef"
// "keywords":[...]24 items
// "isVerified":true
// "verification":{...}4 items
// "verifiedScore":0
// "completionStatus":"completed"
// "randBoostScore":755
// "randBoostScore_l1":755
// "floorPlanID":NULL
// "furnishingStatus":"furnished"
// "extraFields":{...}2 items
// "type":"property"
// "cityLevelScore":1
// "indyScore":336
// "indyScore_l1":336
// "hasMatchingFloorPlans":false
// "photoIDs":[20 items
// 0:170244921

