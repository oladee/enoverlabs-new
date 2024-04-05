import {useState } from "react"
import { FramerSidebar, FramerSidebarPanel, SideBarBabies, StyledHeader, Toggleview, TopNavbabies } from "../Utils/styled/header/header.styled";
import enoverLogo from '../assets/enovLogo.png'
import { GiHamburgerMenu as MenuIcon } from "react-icons/gi";
import { AnimatePresence, motion } from "framer-motion";
import { useClickAway } from "@uidotdev/usehooks";
import { MdClose as CloseIcon } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { PrimaryButton } from "../Utils/styled/Buttons";

const Header = ()=> {
  const [isOpen, setIsOpen] = useState(false)
  const ref = useClickAway(() => {
    setIsOpen(false);
  });

  const toggle = ()=> setIsOpen(!isOpen)
  return(<StyledHeader>
    <NavLink to="/">
    <img src={enoverLogo} alt="EnoverLab Logo"/>
    </NavLink>

    <TopNavbabies>
      <div>
        
      </div>
      {Menulist.map(menu => <MenuItems link={menu.linkto}>{menu.linkName}</MenuItems>)}
    </TopNavbabies>

    <Toggleview display>
      <PrimaryButton Text='Contact Us'/>
    </Toggleview>

    <MenuToggle tog={toggle} open={isOpen}/>
    <AnimatePresence mode="wait" initial={false} >
    {isOpen && (<>
    <FramerSidebar  {...framerSidebarBackground}>
    </FramerSidebar>
    <FramerSidebarPanel {...framerSidebarPanel} ref={ref}>
      <CloseIcon size="3rem" onClick={toggle} />
      <SideBarBabies>
      {Menulist.map((menu, index) => <MenuItems onClick={toggle} 
      link={menu.linkto}>
        {<motion.span {...framerText(index)}>
        {menu.linkName}
        </motion.span>}
        </MenuItems>)}
      </SideBarBabies>
      <motion.span {...framerText(3)}>
      <PrimaryButton Text='Contact Us'/>
      </motion.span>
    </FramerSidebarPanel>

    </>) }
    </AnimatePresence>
    
  </StyledHeader>)
}

export default Header

const MenuItems = ({link,children, onClick})=>{
  return(<NavLink onClick={onClick} to={link} style={({isActive})=>{return {
    fontWeight : isActive ? 700 : 400
  }}}>
    {children}
  </NavLink>)

}

const MenuToggle = ({tog, open})=>{
  return(<Toggleview onClick={tog}>
     <MenuIcon size = "3rem"/>
  </Toggleview>)
}


const Menulist = [
  {
    linkName : 'Blog',
    linkto : '/blog',
  },
  {
    linkName : 'Free Resources',
    linkto : '/resources',
  },
]



const framerSidebarBackground = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0, transition: { delay: 0.2 } },
  transition: { duration: 0.3 },
}

const framerSidebarPanel = {
  initial: { x: '100%' },
  animate: { x: 0 },
  exit: { x: '100%' },
  transition: { duration: 0.3 },
}

const framerText = delay => {
  return {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: {
      delay: 0.5 + delay / 10,
    },
  }
}