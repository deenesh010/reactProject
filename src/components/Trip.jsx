import React from "react";
import "./TripStyles.css";
import TripData from "./TripData";

const Trip = () => {
  const img1 =
    "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/73/33/5f.jpg";
  const img2 =
    "https://www.altitudehimalaya.com/media/files/Blog/Travel-Guides/Mustang-Nepal/Mustang-of-Nepal.png";
  const img3 =
    "https://himalayantrekkers.com/uploads/posts/April2022/Things-to-do-in-lumbini.jpg";
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations.</p>
      <div className="trip-card">
        <TripData
          image={img1}
          heading="Trip in Pokhara"
          text="Pokhara is a city on Phewa Lake, in central Nepal. It’s known as a gateway to the Annapurna Circuit, a popular trail in the Himalayas. Tal Barahi Temple, a 2-story pagoda, sits on an island in the lake. On the eastern shore, the Lakeside district has yoga centers and restaurants. In the city’s south, the International Mountain Museum has exhibits on the history of mountaineering and the people of the Himalayas"
        />
        <TripData
          image={img2}
          heading="Trip in Mustang"
          text="Mustang District is one of the eleven districts of Gandaki Province and one of seventy-seven districts of Nepal which was a Kingdom of Lo-Manthang that joined the Federation of Nepal in 2008 after abolition of the Shah dynasty. It covers an area of 3,573 km² and has a population of 13,452."
        />
        <TripData
          image={img3}
          heading="Trip in Lumbini"
          text="Lumbinī is a Buddhist pilgrimage site in the Rupandehi District of Lumbini Province in Nepal. It is the place where, according to Buddhist tradition, Queen Mahamayadevi gave birth to Siddhartha Gautama at around 566 BCE. "
        />
      </div>
    </div>
  );
};

export default Trip;
