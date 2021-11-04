import { Box } from '@chakra-ui/react'
import Link from 'next/link'
import { Button, Icon } from '@chakra-ui/react'
import { IoLogoInstagram } from 'react-icons/io5'

const Footer = () => {
  return (
    <>
      <Box align="center" opacity={0.4} fontSize="sm">
        &copy; {new Date().getFullYear()} Made By Asher Kim. All Rights Reserved
        v1.0.0
      </Box>
      <Box align="center" opacity={0.4} fontSize="sm">
        Insfired By
        <Link href="https://instagram.com/craftzdog" target="_blank">
          <Button
            variant="ghost"
            colorScheme="teal"
            leftIcon={<Icon as={IoLogoInstagram} />}
          >
            @craftzdog
          </Button>
        </Link>
      </Box>
    </>
  )
}

export default Footer
