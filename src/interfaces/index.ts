import React, { ReactNode } from 'react'
import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Link,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure,
  BoxProps,
  FlexProps,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
  FiBell,
  FiChevronDown,
} from 'react-icons/fi'
import { IconType } from 'react-icons'
import { ReactText } from 'react'

export type LinkItemProps = {
  name: string
  icon: IconType
}

export interface NavItemProps extends FlexProps {
  icon: IconType
  children: ReactText
}

export interface SidebarProps extends BoxProps {
  onClose: () => void
}

export interface MobileProps extends FlexProps {
  onOpen: () => void
}
