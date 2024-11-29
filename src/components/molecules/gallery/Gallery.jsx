
import React, { useState } from "react";
//IMPORT STYLES
import {
  MainContainer,
  GalleryItem,
  GalleryImage,
  FullScreenModal,
  FullScreenImage,
  CloseButton
} from "./Gallery.styles";
//IMPORT COMPONENTS
import Line from "@atoms/line/Line";

const Gallery = () => {

  // //HOOKS
  const [open, setOpen] = useState (false);
  const [selectedImage, setSelectedImage] = useState (null);

  //IMAGES ARRAY
  const images = [
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0715_wyQ_R8myJ.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0172_hsT_mfBc3.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0668_fHhxdNBOE.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0103_hT_0bK_vd.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0794_msTPmrFDu.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0025_Cp7XBPnGN.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0018_KQg1fysy-.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0124_hUq-TIgWw.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0675_twzbLD4Aa.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0158_eBu-CeM8U.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0426_70af4JfwU.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0367_fy-tp1BXms.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0770_tKnF-IDRdL.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0387%20(1)_jiIgjGsJS.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0672%20(1)_PMnCb3RfrA.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0634%20(1)_42z72v974.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0461_8Tm7vA_SU.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0638_wnlTULCZlw.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0450_2iM0Fem78.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0827_tGhUt6li3.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0823_rONlccc85.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0819_xn2Wc90nL.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0831_eVLSu5yCW.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0592%20(1)_p406PIXLGT.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0708_ihG0th3iUo.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0354_010zbd6uR.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0800_w5YRZ4DcIb.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0844_KgM4cUV0t.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0883_ozhlbuEUa.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0874_7KvgTU7ID.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0877_jXxGwueJve.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0981%20(1)_K2lu6N7Aq.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0973_yUHEVEUdP.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1063_AOqioW2y2Q.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0964_7cB-8On3A.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0933%20(1)_n1ZaqRFzQ.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0945_I_D6vdlFE.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1029%20(1)_rqZcd6h0R.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1008_BLK0t2I6p.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0942_Ai1CwsS4S.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0319_gS3j6DJgm.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1229_YWJhM3xxsc.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1225_3ZP2JTE6j.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1247_d_EKruTR-j.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1240_esr4nPGks.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1253%20(1)_3-BPQ3CMj.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1267_r63pxcGyW.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1279_-QJZvVRgL.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1094_aRuc1lh9d.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1082_vOZ0tkh1r.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1181_UaWEm7dlc.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1188_qL3JwtF77X.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1143_fQmf6q1Rp.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1293_JHJ_DkG2F.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1313-copy-0_v0STiMcET6.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1313_GG9EnAHMR3.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1301%20(1)_W9I7oASAv1.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1340_Yqy6rnNE3.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1345%20(1)_bxvBn6ONr.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1333_4Byb4Q1ac.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1329_5cJj72q4N.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1382_oFN04ZBmL.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1418_-L7J0GEyRg.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1493_HHjhji0_6.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1484_IuPWdshQ5T.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1559%20(1)_aZiY7VmgM.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1450_7KAibHO9f.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1701_Ino11fLCP.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1601_OTcY8wwBK.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1665_mtUWMeUVd.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2123_JFB3zcGg4.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2131__ljWAn9L5.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2129_Cqv8hYqZv.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2132_kb_fc5sI2s.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2127_aiUc2wWyB.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2125_VsJRQT9Jg.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2134_9IY7qNSTI-.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2136_YiKl_dk2j.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2138_PQ3UJASlq.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2144_HKRFW7R8d.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2145_JjDLZl1Ef.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1799_-ikHYnTqf.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1887_0uaWR4Qzov.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1814_v1q32MnhA8.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1897_Ia_twO3XQ.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1868_Tr9F4iacq.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1952_NDCM1owhic.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1967_eSudZICgE.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1958_tuB7vgzYb.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1959_3rj8QfW1O.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1966_WetOB_q4js.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1897_D1TjbtN7r.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1909_CX66kr9UB.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1811_zj4RlE4HN.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2060_6xv1mhQ07.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2021_ntfkY7Z3y.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1995_xJ9UIXKFg.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2052_GiwwiD0ux.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1788%20(1)_-Ra2rceLW.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2096_j9iWywl1B.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2080_4VglhsIKi.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2167_O47dbqNyK.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2167_O47dbqNyK.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2162_85z02c2_l.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2208%20(1)_dWBw-UdlA.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2182_-jmVsbSL3.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2162_0C11McWYq.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2175_4Mp29gfDXs.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2148_mdMaOFtrtC.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0324_JQ-91nCWT.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0362_wkgMMRyUW.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2214_hkIgz0a41.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2245_5yr8Z583e.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2268_dvqkEEdOM.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2275_ri0-w-nAb.jpg?',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1795_83qElVUci.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2301_Ib10ubw16.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2309_dMyu2bfrL.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2322_pEXKVt64C.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2326_8ECvf0Yek.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2336_JYDLQOQ84.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2523_mQjpjLbu6.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2488_ktFKDOZzU.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2395_FWgRSDAYK.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2452_N2eFAwVYK.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2470_KePiVymc0.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2539_PwCfZTxeP.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2437_GDmRMGN54.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2455_iKMHqKEwV.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2567_CbMOhPp8iN.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2555_9_GTFYquE.jpg',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2419_6NB6snpmi.jpg'
  
  ];

  //HANDLE IMAGE CLICK
const handleClick = (image) => {
  setSelectedImage(image);
  setOpen(true);
};
// HANDLE MODAL CLOSE
const handleClose = (image) => {
  setSelectedImage(null);
  setOpen(false);
}

  return (
    <MainContainer id="gallery">
     {images.map((image, index) => (
     <GalleryItem key={index} onClick={() => handleClick(image)}>
      <GalleryImage 
        src={`${image}?tr=w-300,h-300,q-60,f-auto`} alt={`Foto ${index + 1}`} loading="lazy"/>
     </GalleryItem>
     ))}
      {/* Fullscreen Modal */}
      {open && (
        <FullScreenModal onClick={handleClose}>
          <CloseButton onClick={handleClose}> <span className="material-symbols-outlined">close_small</span></CloseButton>
          <FullScreenImage src={selectedImage} alt="Selected" />
        </FullScreenModal>
      )}

      <Line />
    </MainContainer>
    
  )
}

export default Gallery