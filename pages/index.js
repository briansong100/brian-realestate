import Link from "next/link"
import Image from "next/image"
import { Flex, Box, Text, Button } from "@chakra-ui/react"
import { baseUrl, fetchApi } from "../utils/fetchApi"
import Property from "../components/Property"

const Banner =({purpose,title1,title2, desc1, desc2, linkname, buttonText, imageUrl}) =>(
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m={50} bg='gray.100' p={6} borderRadius={10}>
    <Image src={imageUrl} width={550} height={380} alt="banner image" ></Image>
    <Box p={3} w='auto'>
      <Text color="gray.500" fontSize="sm"  fontWeight="medium" >{purpose}</Text>
      <Text fontSize="3xl"  fontWeight="bold" >{title1} {title2}</Text>
      <Text fontSize="lg"  paddingTop={3} paddingBottom={3} color="gray.700" >{desc1} {desc2}</Text>
      <Button fontSize="xl" bg='gray.300'>
        <Link href={linkname} >{buttonText}</Link>
      </Button>
    </Box>
  </Flex>
)
export default function Home({ propertyForRent, propertyForSale}) {
  // console.log(propertyForRent);

  return (
    <Box>
      <Banner 
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Apatments, Villas, Homes"
        desc2="and more"
        buttonText="Expore Renting"
        linkname ="/search?purpose=for-rent"
        imageUrl='http://bayut-production.s3.eu-central-1.amazonaws.com/image/172697779/a397e5b1b3c74b89bccaf7113f70a01d'
      />
      <Flex flexWrap="wrap" justifyContent='center' >
        {propertyForRent.map(property => <Property property={property} key={property.id} /> )}
      </Flex>
      <Banner 
        purpose="BUY A HOME"
        title1="Find, Buy & Own Your "
        title2="Dream Home"
        desc1="Explore Apatments, Villas, Homes"
        desc2="and more"
        buttonText="Expore Buying"
        linkname ="/search?purpose=for-sale"
        imageUrl='https://bayut-production.s3.eu-central-1.amazonaws.com/image/179272391/5bb94ffb8f824c1aa91d835e5d270863'
      />
      <Flex flexWrap="wrap" justifyContent='center'>
        {propertyForSale.map(property => <Property property={property} key={property.id} /> )}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`)
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`)

  return {
    props: {
      propertyForRent: propertyForRent?.hits,
      propertyForSale: propertyForSale?.hits
    }
  }
}