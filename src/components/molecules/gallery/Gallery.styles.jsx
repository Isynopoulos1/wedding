import { contentW } from "@utils";
import styled from "styled-components";

//MAIN CONTAINER
export const MainContainer = styled.section`
  margin: 0 auto;
  width: 100%;
  max-width: ${contentW.desktop};
  display: flex;
  flex-wrap: wrap; 
  justify-content: space-evenly;
  gap: 15px;   
`;
//GALLERY CONTAINER
export const GalleryItem = styled.div`
  width: 300px;
  height: 300px;
  object-fit: cover;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;
//GALLERY IMAGES
export const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  
`;
//FULLSCREEN MODAL
export const FullScreenModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const FullScreenImage = styled.img`
  max-width: 90%;
  max-height: 90%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: white;
  font-size: 24px;
  cursor: pointer;
`;