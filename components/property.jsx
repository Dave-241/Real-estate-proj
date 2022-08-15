import Link from 'next/link'
import Image from 'next/image'
import {Flex, Box , Text ,Button, Avatar } from '@chakra-ui/react'
import {Failed , FaBath, FaBed} from 'react-icons/fa'
import {BsGridFill} from 'react-icons/bs'
import {GoVerified} from 'react-icons/go'
import millify from 'millify'
import DefaultImage from '../assets/house.jpg'

const Property = (props)=> {
    const {property} = props
    const { price, coverPhoto, rentFrequency, rooms , title, baths, area, agency, isVerified, externalID} = property
    console.log(externalID);
  return ( <>{ 
      Property ? ( <Link href={`/property/${externalID}`}>
       <a>
       <Flex flexWrap='wrap' w='350px' p='5' justifyContent='center' cursor='pointer' alignItems='center'>
        <Box>
            <Image src={coverPhoto ? coverPhoto.url : DefaultImage} alt='house' width='400' height='260' />
        </Box>
        <Box w='full'>
            <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
                <Flex alignItems='center'>
                    <Box paddingRight='3' color='green.400'>{isVerified  && <GoVerified />}</Box>
                    <Text fontWeight='bold' fontSize='lg'>AED {millify(price)} {rentFrequency && `/${rentFrequency}`}</Text>
                </Flex>
                <Box>
                    <Avatar size='sm' src={agency?.logo?.url} />
                
                </Box>
            </Flex>
            <Flex alighItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400' >
                {rooms} <FaBed/> | {baths} <FaBath/> | {millify(area)} sqft <BsGridFill/>
            </Flex>
            <Text fontSize='lg' >
                {title.length > 30 ? `${title.substring(0,30)}...` : title}
            </Text>
         </Box>
       </Flex>
       </a>
    </Link>): <h1>hi</h1>
  } </>)

}


export default Property

