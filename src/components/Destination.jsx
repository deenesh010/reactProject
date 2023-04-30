import React from "react";
import "./DestinationStyle.css";
import DestinationData from "./DestinationData";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Expore your Dream Desination</p>
      <DestinationData
        className="first-des-rev"
        heading="kathmandu,Nepal"
        text="Kathmandu, Nepal's capital, is set in a valley surrounded by the
        Himalayan mountains. At the heart of the old city’s mazelike alleys is
        Durbar Square, which becomes frenetic during Indra Jatra, a religious
        festival featuring masked dances. Many of the city's historic sites
        were damaged or destroyed by a 2015 earthquake. Durbar Square's
        palace, Hanuman Dhoka, and Kasthamandap, a wooden Hindu temple, are
        being rebuilt."
        img1="https://admin.buddhaair.com/upload/blog/mainimage/1574327436_bCB0U_1566982540-dvsvz-pashupatinath.webp"
        img2="https://www.nepal-travel-guide.com/wp-content/uploads/2020/05/chandragiri-hills.png"
      />
      <DestinationData
        className="first-des"
        heading="Sindhuli,Nepal"
        text="Sindhuli District, a part of the Bagmati Province, is one of the seventy-seven districts of Nepal, a landlocked country of South Asia. The district, with Sindhulimadhi Kamalamai as its district headquarters and covers an area of 2,491 km². As per the 2011 census, Sindhuli District has a population of 296,192."
        img1="https://sindhulinepal.files.wordpress.com/2017/08/sindhuli-madi.jpg"
        img2="https://dor.gov.np/uploads/ckfiles/images/1.jpg"
      />
    </div>
  );
};

export default Destination;
