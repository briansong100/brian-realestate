import { useContext } from "react";
import Image from "next/image";
import {Box, Icon, Flex} from '@chakra-ui/react'

import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

const LeftArrow =()=>{
	const {scrollPrev} = useContext(VisibilityContext)
	return (
		<Flex alignItems='center' justifyContent='center' marginRight={1}>
			<Icon
				as ={FaArrowAltCircleLeft}
				onClick={()=>scrollPrev()}
				fontSize='2xl'
				cursor='pointer'
			/>
		</Flex>
	)
}

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginLeft='1'>
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize='2xl'
        cursor='pointer'
        d={['none','none','none','block']}
    />
    </Flex>
  );
}

const ImageScrollBar =({photos}) =>(

	<ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow} style={{ overflow: 'hidden' }} >
		{photos.map( photo=>(
			<Box itemId={photo.id} w={950}  overflow='hidden' p={1} > 
				<Image  src={photo.url} placeholder='blur' blurDataURL={photo.url} 
					width={1050} height={500} 
					sizes="(max-width:500px) 384w, (max-width:1023px) 640w, 1090w"
					alt="property"
					alignSelf ='center'
					/>
			</Box>
		))}
	</ScrollMenu>
)

export default ImageScrollBar