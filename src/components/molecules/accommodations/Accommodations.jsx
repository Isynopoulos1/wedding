import React from "react";
import { AccommodationList, MainContainer } from "./Accommodations.styles";
import { getTranslate } from "react-redux-translates";
import { useSelector } from "react-redux";
//IMPORT COMPONENTS
import Line from "@atoms/line/Line";

const Accommodations = () => {
  const translate = useSelector(state => getTranslate(state.localize));

  const accommodations = [
    { href: "https://hostalbedmates.com/", name: "Hostal Bedmates" },
    {
      href: "https://www.leonardo-hotels.es/barcelona/leonardo-hotel-barcelona-gran-via?utm_source=gmb&utm_medium=link_site_gmb&utm_campaign=leonardo-hotel-barcelona-gran-via",
      name: "Leonardo Hotel",
    },
    {
      href: "https://www.hotelparalel.com/es",
      name: "Hotel Paralel",
    },

    {
      href: "https://www.spanish.hostelworld.com/pwa/wds/hosteldetails.php/Diagonal-House/Barcelona/88042?from=2024-10-25&to=2024-10-28&guests=2&origin=microsite",
      name: "Diagonal House Hostel",
    },

    {
      href: "https://hotels.cloudbeds.com/es/reservation/W8ulcX?currency=eur",
      name: "Mambo Tango",
    },
    { href: "https://www.hotel-chi.com/", name: "Hotel Chi" },
    { href: "https://www.hostalsans.com/es", name: "Hostal Sans" },
    {
      href: "https://www.airbnb.es/rooms/53469118?source_impression_id=p3_1720100794_P3t3zeuVHtc-vaGg",
      name: "Chic&Basic Velvet",
    },
    {
      href: "https://valesuites.com/es/",
      name: "Vale Suites",
    },
    {
      href: "https://www.safestay.com/es/venue/safestay-barcelona-passeig-de-gracia/",
      name: "Safestay",
    },
    { href: "https://www.lapalmerabcn.com/", name: "Hostal La Palmera" },
    {
      href: "https://es.hoteles.com/ho684856544/pension-arosa-barcelona-barcelona-espana/",
      name: "Pensión Arosa",
    },
    {
      href: "https://www.cityhotels.es/atenea-calabria-apartaments/",
      name: "Atenea Calabria Apartments",
    },

    {
      href: "https://hostalportugal.com/",
      name: "Hostal Portugal",
    },

    {
      href: "https://www.airbnb.es/rooms/40560911?source_impression_id=p3_1720100830_P3AUokgQLt8A5ULe",
      name: "Hotel Aneto",
    },

    {
      href: "https://www.airbnb.es/rooms/979073?source_impression_id=p3_1720100859_P3uXrbi7L4xnm-RR",
      name: "Departamento en Gracia",
    },
    {
      href: "https://www.airbnb.es/rooms/52144534?source_impression_id=p3_1720100887_P3rTwSXnTx7o9_SI",
      name: "Habitación Eixample",
    },
    {
      href: "https://www.airbnb.es/rooms/1128749157139423981?source_impression_id=p3_1720100920_P33eeWdDgAZLkDMY",
      name: "Habitación en Eixample",
    },
    {
      href: "https://www.airbnb.es/rooms/39741313?source_impression_id=p3_1720100954_P32lPA-vuCsCNB-g",
      name: "Habitación en Barceloneta",
    },
    {
      href: "https://www.airbnb.es/rooms/862939512331509310?source_impression_id=p3_1720100977_P3doT1px0UyJlQK6",
      name: "Departamento Sant Pau",
    },
    {
      href: "https://www.airbnb.es/rooms/14006090?source_impression_id=p3_1720101027_P3rdj1eLm6_KLJw_",
      name: "Estudio Céntrico",
    },
    {
      href: "https://www.airbnb.es/rooms/708574105207333740?source_impression_id=p3_1720101069_P3N7nt3RDRLC5Tmc",
      name: "Habitación Céntrica",
    },
    {
      href: "https://www.airbnb.es/rooms/963075933164660146?source_impression_id=p3_1720101103_P3nD2MxBchpYcrva",
      name: "Habitación Céntrica",
    },
    {
      href: "https://www.airbnb.es/rooms/4691491?source_impression_id=p3_1720101139_P37YB7TMESTdyAhp",
      name: "Barcelona Fifteen",
    },
    {
      href: "https://www.airbnb.es/rooms/588996?source_impression_id=p3_1720101162_P3dpb2bFO4aBWfPL",
      name: "Familiar Eixample",
    },
    {
      href: "https://www.airbnb.es/rooms/654953265157096175?source_impression_id=p3_1720101207_P3UBPnKogS6MXWUR",
      name: "Familiar Céntrico",
    },
    {
      href: "https://www.airbnb.es/rooms/9684383?source_impression_id=p3_1720101263_P3RM7wD40m-PCo03",
      name: "Familiar Gran Via",
    },
  ];

  return (
    <MainContainer>
      <p>{translate("accommodations.text")}</p>
      <AccommodationList>
        {accommodations.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>{item.name}</span>
          </a>
        ))}
      </AccommodationList>
      <Line />
    </MainContainer>
  );
};

export default Accommodations;
