import React from 'react'
//IMPORT STYLES
import {
  MainContainer,
  GalleryItem,
  GalleryImage
} from "./Gallery.styles";
//IMPORT COMPONENTS
import Line from "@atoms/line/Line";

const Gallery = () => {
  const images = [
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0715_wyQ_R8myJ.jpg?updatedAt=1732722239784',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0172_hsT_mfBc3.jpg?updatedAt=1732722067987',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0668_fHhxdNBOE.jpg?updatedAt=1732722067923',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0103_hT_0bK_vd.jpg?updatedAt=1732722808430',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0794_msTPmrFDu.jpg?updatedAt=1732724498148',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0025_Cp7XBPnGN.jpg?updatedAt=1732722809349',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0018_KQg1fysy-.jpg?updatedAt=1732722810209',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0124_hUq-TIgWw.jpg?updatedAt=1732722810186',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0675_twzbLD4Aa.jpg?updatedAt=1732722239185',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0158_eBu-CeM8U.jpg?updatedAt=1732722810834',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0426_70af4JfwU.jpg?updatedAt=1732723403473',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0367_fy-tp1BXms.jpg?updatedAt=1732723404385',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0770_tKnF-IDRdL.jpg?updatedAt=1732724497926',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0387%20(1)_jiIgjGsJS.jpg?updatedAt=1732723404375',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0672%20(1)_PMnCb3RfrA.jpg?updatedAt=1732723610423',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0634%20(1)_42z72v974.jpg?updatedAt=1732723610070',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0461_8Tm7vA_SU.jpg?updatedAt=1732790217821',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0638_wnlTULCZlw.jpg?updatedAt=1732790217875',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0450_2iM0Fem78.jpg?updatedAt=1732722068963',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0827_tGhUt6li3.jpg?updatedAt=1732722240251',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0823_rONlccc85.jpg?updatedAt=1732724497938',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0819_xn2Wc90nL.jpg?updatedAt=1732790422846',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0831_eVLSu5yCW.jpg?updatedAt=1732724497519',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0592%20(1)_p406PIXLGT.jpg?updatedAt=1732723610489',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0708_ihG0th3iUo.jpg?updatedAt=1732723613759',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0354_010zbd6uR.jpg?updatedAt=1732790218068',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0800_w5YRZ4DcIb.jpg?updatedAt=1732724497980',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0844_KgM4cUV0t.jpg?updatedAt=1732724497968',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0883_ozhlbuEUa.jpg?updatedAt=1732790219248',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0874_7KvgTU7ID.jpg?updatedAt=1732790217951',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0877_jXxGwueJve.jpg?updatedAt=1732790217948',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0981%20(1)_K2lu6N7Aq.jpg?updatedAt=1732725706423',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0973_yUHEVEUdP.jpg?updatedAt=1732725706182',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1063_AOqioW2y2Q.jpg?updatedAt=1732725706351',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0964_7cB-8On3A.jpg?updatedAt=1732725706148',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0933%20(1)_n1ZaqRFzQ.jpg?updatedAt=1732725706152',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0945_I_D6vdlFE.jpg?updatedAt=1732725706051',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1029%20(1)_rqZcd6h0R.jpg?updatedAt=1732721092400',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1008_BLK0t2I6p.jpg?updatedAt=1732725706044',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0942_Ai1CwsS4S.jpg?updatedAt=1732725705397',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0319_gS3j6DJgm.jpg?updatedAt=1732790217347',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1229_YWJhM3xxsc.jpg?updatedAt=1732727226738',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1225_3ZP2JTE6j.jpg?updatedAt=1732727226719',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1247_d_EKruTR-j.jpg?updatedAt=1732727226715',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1240_esr4nPGks.jpg?updatedAt=1732721092454',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1253%20(1)_3-BPQ3CMj.jpg?updatedAt=1732727226740',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1267_r63pxcGyW.jpg?updatedAt=1732727388147',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1279_-QJZvVRgL.jpg?updatedAt=1732727388198',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1094_aRuc1lh9d.jpg?updatedAt=1732727226743',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1082_vOZ0tkh1r.jpg?updatedAt=1732727226389',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1181_UaWEm7dlc.jpg?updatedAt=1732727226482',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1188_qL3JwtF77X.jpg?updatedAt=1732727226568',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1143_fQmf6q1Rp.jpg?updatedAt=1732721092992',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1293_JHJ_DkG2F.jpg?updatedAt=1732727388622',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1313-copy-0_v0STiMcET6.jpg?updatedAt=1732727388626',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1313_GG9EnAHMR3.jpg?updatedAt=1732727388612',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1301%20(1)_W9I7oASAv1.jpg?updatedAt=1732727388658',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1340_Yqy6rnNE3.jpg?updatedAt=1732727388390',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1345%20(1)_bxvBn6ONr.jpg?updatedAt=1732727388085',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1333_4Byb4Q1ac.jpg?updatedAt=1732722240167',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1329_5cJj72q4N.jpg?updatedAt=1732721118673',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1382_oFN04ZBmL.jpg?updatedAt=1732721293793',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1418_-L7J0GEyRg.jpg?updatedAt=1732721293878',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1493_HHjhji0_6.jpg?updatedAt=1732721294589',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1484_IuPWdshQ5T.jpg?updatedAt=1732721294773',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1559%20(1)_aZiY7VmgM.jpg?updatedAt=1732721294260',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1450_7KAibHO9f.jpg?updatedAt=1732721294678',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1701_Ino11fLCP.jpg?updatedAt=1732721682998',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1601_OTcY8wwBK.jpg?updatedAt=1732721683052',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/Captura%20de%20pantalla%202024-11-27%20a%20las%2017.17.30_R29e2P5JM.png?updatedAt=1732727185346',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1665_mtUWMeUVd.jpg?updatedAt=1732727690512',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2123_JFB3zcGg4.jpg?updatedAt=1732731950660',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2131__ljWAn9L5.jpg?updatedAt=1732731950595',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2129_Cqv8hYqZv.jpg?updatedAt=1732731949718',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2132_kb_fc5sI2s.jpg?updatedAt=1732731949640',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2127_aiUc2wWyB.jpg?updatedAt=1732731950686',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2125_VsJRQT9Jg.jpg?updatedAt=1732731950742',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2134_9IY7qNSTI-.jpg?updatedAt=1732731950752',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2136_YiKl_dk2j.jpg?updatedAt=1732731951012',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2138_PQ3UJASlq.jpg?updatedAt=1732732159942',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2144_HKRFW7R8d.jpg?updatedAt=1732732159548',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2145_JjDLZl1Ef.jpg?updatedAt=1732732159671',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1799_-ikHYnTqf.jpg?updatedAt=1732731337467',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1887_0uaWR4Qzov.jpg?updatedAt=1732731336946',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1814_v1q32MnhA8.jpg?updatedAt=1732731337306',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1897_Ia_twO3XQ.jpg?updatedAt=1732731336692',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1868_Tr9F4iacq.jpg?updatedAt=1732731336600',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1952_NDCM1owhic.jpg?updatedAt=1732731576696',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1967_eSudZICgE.jpg?updatedAt=1732731576772',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1958_tuB7vgzYb.jpg?updatedAt=1732731576795',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1959_3rj8QfW1O.jpg?updatedAt=1732731576806',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1966_WetOB_q4js.jpg?updatedAt=1732731576819',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1897_D1TjbtN7r.jpg?updatedAt=1732731575121',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1909_CX66kr9UB.jpg?updatedAt=1732731575001',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1811_zj4RlE4HN.jpg?updatedAt=1732731337220',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2060_6xv1mhQ07.jpg?updatedAt=1732731948357',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2021_ntfkY7Z3y.jpg?updatedAt=1732731576507',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1995_xJ9UIXKFg.jpg?updatedAt=1732731576767',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2052_GiwwiD0ux.jpg?updatedAt=1732731577171',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1788%20(1)_-Ra2rceLW.jpg?updatedAt=1732727691087',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2096_j9iWywl1B.jpg?updatedAt=1732721946915',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2080_4VglhsIKi.jpg?updatedAt=1732721946219',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2167_O47dbqNyK.jpg?updatedAt=1732721945731',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2167_O47dbqNyK.jpg?updatedAt=1732721945731',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2162_85z02c2_l.jpg?updatedAt=1732721947175',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2208%20(1)_dWBw-UdlA.jpg?updatedAt=1732732159950',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2182_-jmVsbSL3.jpg?updatedAt=1732732160055',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2162_0C11McWYq.jpg?updatedAt=1732732160523',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2175_4Mp29gfDXs.jpg?updatedAt=1732732160569',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2148_mdMaOFtrtC.jpg?updatedAt=1732732160367',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0324_JQ-91nCWT.jpg?updatedAt=1732794430217',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF0362_wkgMMRyUW.jpg?updatedAt=1732794430901',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2214_hkIgz0a41.jpg?updatedAt=1732732160320',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2245_5yr8Z583e.jpg?updatedAt=1732732160104',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2268_dvqkEEdOM.jpg?updatedAt=1732732161939',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2275_ri0-w-nAb.jpg?updatedAt=1732794430694',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF1795_83qElVUci.jpg?updatedAt=1732731337558',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2301_Ib10ubw16.jpg?updatedAt=1732795768080',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2309_dMyu2bfrL.jpg?updatedAt=1732795229470',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2322_pEXKVt64C.jpg?updatedAt=1732795229369',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2326_8ECvf0Yek.jpg?updatedAt=1732795229400',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2336_JYDLQOQ84.jpg?updatedAt=1732795229341',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2523_mQjpjLbu6.jpg?updatedAt=1732732485763',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2488_ktFKDOZzU.jpg?updatedAt=1732732486239',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2395_FWgRSDAYK.jpg?updatedAt=1732795229533',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2452_N2eFAwVYK.jpg?updatedAt=1732794780168',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2470_KePiVymc0.jpg?updatedAt=1732794793610',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2539_PwCfZTxeP.jpg?updatedAt=1732732485671',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2437_GDmRMGN54.jpg?updatedAt=1732732486084',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2455_iKMHqKEwV.jpg?updatedAt=1732732486384',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2567_CbMOhPp8iN.jpg?updatedAt=1732732486308',
    'https://ik.imagekit.io/ppayaz/iselalarcon/isela&erwan/wedding-pics/DSCF2555_9_GTFYquE.jpg?updatedAt=1732732486384',
  
  ]
  return (
    <MainContainer id="gallery">
     {images.map((image, index) => (
      //TODO to add modal hook
     <GalleryItem key={index}>
      <GalleryImage 
        src={`${image}?f-auto`} alt={`Foto ${index + 1}`} loading="lazy"/>
     </GalleryItem>
     ) )}
      <Line />
    </MainContainer>
    
  )
}

export default Gallery