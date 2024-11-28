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