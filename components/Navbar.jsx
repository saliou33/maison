import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p="2" borderBottom="1" borderColor="gray.100">
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Link href="/" paddingLeft="2">
        Maison
      </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400" />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<FcHome />} href="/">
              Home
            </MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch />} href="/">
              Seach
            </MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<FcAbout />} href="/">
              Buy Property
            </MenuItem>
          </Link>
          <Link href="/search?pupose=for-rent" passHref>
            <MenuItem icon={<FiKey />} href="/">
              Rent Property
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
