import React, { useState, useEffect } from "react";
import SpaceMission from "../graphql";
import styles from './Missions.module.css';

const Missions = () => {
  const [data, setData] = useState([]);

  const loadSpaceMission = async () => {
    const mission = await SpaceMission.getSpaceMission(10);
    setData(mission);
  };

  useEffect(() => {
    loadSpaceMission();
  }, []);

  console.log(data);
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        return (
            <div key={index} className={styles.mission}>
                <img src={item && item.ships[0] && item.ships[0].image ? item.ships[0].image : 'https://media.wired.com/photos/5ed2b8129948303154121fe5/master/pass/Science_SpaceX-Launch-AP_20151700829737.jpg'} alt={item.mission_name}></img>
                <p>{item.mission_name}</p>
                <p>{item.rocket.rocket_name}</p>
                <p>{item.launch_site.site_name_long}</p>
            </div>
        ) 
      })}
    </div>
  );
};

export default Missions;
