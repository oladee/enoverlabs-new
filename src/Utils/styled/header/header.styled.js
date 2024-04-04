import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledHeader = styled.header`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1.5rem;
  color: ${(props) => props.theme.color.bodyText};
  img {
    width: 140px;
  }
  @media (min-width: 1024px) {
    padding: 4rem 9.6rem 0px 9.6rem;
    img {
      width: 225px;
    }
  }
`;

export const Toggleview = styled.div`
  display: ${(props) => (props.display ? "none" : "block")};
  @media (min-width: 1024px) {
    display: ${(props) => (props.display ? "block" : "none")};
  }
`;

export const TopNavbabies = styled.nav`
  display: none;
  font-size: 1.6rem;
  a {
    &:hover {
      color: #0088ff;
    }
  }
  @media (min-width: 1024px) {
    display: flex;
    gap: 60px;
  }
`;
export const SideBarBabies = styled(TopNavbabies)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FramerSidebar = styled(motion.div)`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 40;
  background-color: rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4px);
`;
export const FramerSidebarPanel = styled(motion.div)`
  position: fixed;
  display: flex;
  flex-direction: column;
  padding: 10px 15px;
  bottom: 0;
  right: 0;
  top: 0;
  z-index: 50;
  width: 250px;
  height: 100%;
  max-width: 250px;
  border-radius: 5px;
  background-color: ${(props) => props.theme.color.quaternary};
  border-left: 2px solid ${(props) => props.theme.color.tertiary};
`;
