import React, { useEffect, useState } from "react";
import { AiFillCaretRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import { SearchCity } from "../../components/SearchCity/SearchCity";
import { SectionHeader } from "../../components/SectionHeader/SectionHeader";
// import services from "../../Data/HelsinkiServicesData";
import { GetWindowDimension } from "../../utils/GetWindowDimension";
import HelsinkiTopicData from "../../Data/HelsinkiTopicData";
import "./style.css";
import { firestore } from "../../utils/firebase.utils";

const City = ({ name }) => {
  // const sorted = services.slice(0, 5);
  const { width } = GetWindowDimension();
  const [loading, setLoading] = useState(true);
  const [collectionA, setCollection] = useState([]);
  const [currentCity, setCurrentCity] = useState({});
  const { services } = currentCity || {};
  const cityName = name.replace("/", "");

  useEffect(() => {
    const unsubscribe = firestore
      .collection("section_live")
      .orderBy("name")
      .onSnapshot((snapshot) => {
        const newCity = snapshot.docs.map((doc) => ({
          // id: doc.id,
          // ...doc.data(),
          ...doc.data()
        }));
        // setCollection(newCity);
        setCurrentCity(newCity.filter((c) => c.name === cityName)[0]);
      });
     return () => unsubscribe();
  }, []);

  // useEffect(() => {
  //   const getCurrentCity = async () => {
  //     const doc = await firestore.collection('section_live').get();
  //     if (!doc.exists) {
  //       setLoading(true);
  //     } else {
  //       // setCurrentCity(doc.data().filter((c) => c.name === cityName)[0]);
  //       console.log(doc.data())
  //       setLoading(false);
  //     }
  //   };
  //   getCurrentCity();
  // }, []);
console.log((currentCity["services"] || []).length)
  return (
    currentCity ? (
    <>
      <section className="helsinki_header">
        <div className="helsinki_header_url">
          <Link to="/">
            <p>Landing Page</p>
          </Link>
          <AiFillCaretRight className="helsinki_header_url_icon" />
          <p>{cityName}</p>
        </div>
        <p id="header_1" style={{...currentCity.title}.style}>{{...currentCity.title}.content}</p>
        <p id="helsinki_header_2" style={{...currentCity.subtitle}.style}>{{...currentCity.subtitle}.content}</p>
        <SearchCity />
        <p id="header_suggestion">
          Maybe <a href="./AboutUs.js">{{...currentCity.placeOne}.text}</a>,{" "}
          <Link to="./helsinki">{{...currentCity.placeTwo}.text}</Link> or
          <a href="Paris">{{...currentCity.placeThree}.text}</a>?
        </p>
      </section>
      <section className="helsinki_services">
        <SectionHeader header="Recommended services to you" />
        <div className="helsinki_services_container">
          {width >= 1100 ? (
            <>
              {(services || []).map((service, index) => (
                <div className="single_service_container">
                  <img
                    alt="service"
                    key={index}
                    src={service.image}
                    className="single_service_icon"
                  />
                  <p className="single_service_name">{service.title}</p>
                </div>
              ))}
            </>
          ) : (
            <>
              {(services || []).map((service, index) => (
                <div className="single_service_container">
                  <img
                    alt="service"
                    key={index}
                    src={service.image}
                    className="single_service_icon"
                  />
                  <p className="single_service_name">{service.title}</p>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
      <section className="helsinki_topics">
        <SectionHeader header="Top Topics to explore" />
        {HelsinkiTopicData.map((topic, index) => (
          <div key={index}>
            <img src={topic.img} alt="topic" />
          </div>
        ))}
      </section>

    </>
    ) : <div>
        <section className="helsinki_header">
        <div className="helsinki_header_url">
          <Link to="/">
            <p>Landing Page</p>
          </Link>
          <AiFillCaretRight className="helsinki_header_url_icon" />
          <p>{cityName}</p>
        </div>
        <p id="header_1" >page not found</p>
        <p id="helsinki_header_2">try another city</p>
      </section>
    </div>
  );
};

export default City;
