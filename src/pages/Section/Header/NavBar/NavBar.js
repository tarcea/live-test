import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import { BsSearch } from "react-icons/bs";
import { RiArrowDropDownFill } from "react-icons/ri";
import { ReactComponent as Logo } from "../../../../assets/Section/Header/Logo.svg";
import WeatherIcon from "../../../../assets/Section/Header/weather-icon.svg";
import { GetWindowDimension } from "../../../../utils/GetWindowDimension";
import NavigationMobile from "./NavigationMobile";
import axios from "axios";
import { apiKey, cityID } from "../../../../constants/index";

const NavBar = ({ pathname }) => {
  const { width } = GetWindowDimension();
  const [scroll, setScroll] = useState(false);
  const [weather, setWeather] = useState("");
  const [visited, setVisited] = useState(JSON.parse(localStorage.getItem('visited')) || []);
 
  const handleScroll = () => {
    if (window.pageYOffset > 60) return setScroll(true);
    setScroll(false);
  };

  // const checkCityHandler = () => {
  //   const currentCity = document.querySelector("#city-name").textContent;
  //   const subCity = document.querySelectorAll('.cities');
  //   console.log(currentCity);
  //   console.log(subCity);
  //   if (currentCity && subCity) {
  //     for (let city of subCity) {
  //       if (city.textContent === currentCity) {
  //         console.log(city.textContent);
  //         setActive(true);
  //       } else setActive(false);
  //     }
  //   }
  // }
  const recentVisited = (array, item, length) => {
      // let unique = [...new Set(array)];
      let transform = []
      if (item !== '/') {
          transform = array.unshift(item) > length ? array.pop() : null;
      }
      let unique = [...new Set(transform)];
      return unique;
    };
    

  useEffect(() => {
    recentVisited(visited, pathname, 4);
    localStorage.setItem("visited",JSON.stringify([...new Set(visited)]))
  },[]);
console.log(visited)
  const currentTemp = () => {
    let key = apiKey;
    let id = cityID;
    const temperature = document.querySelector("#temp");
    if (temperature) {
      axios
        .get(
          "http://api.openweathermap.org/data/2.5/weather?id=" +
            id +
            "&appid=" +
            key +
            "&units=metric"
        )
        .then((data) => {
          const temp = Math.ceil(data.data.main.temp);
          setWeather(temp);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    currentTemp();
    // checkCityHandler();
    window.addEventListener("scroll", handleScroll);
  }, []);

  const navStyle = () => {
    if (scroll) {
      return {
        backgroundColor: "rgba(128, 128, 128, 0.6)",
        scrollBehavior:"smooth"
      };
    }
  };

  const DesktopNav = () => (
    <div className={styles.nav} style={navStyle()}>
      <a className={styles.logoContainer} href="#">
        <Logo className={styles.logo} />
      </a>
      <div className={styles.right}>
        <li className={styles.dest}>
          Destinations
          <IconContext.Provider value={{ className: "dropdown" }}>
            <RiArrowDropDownFill />
          </IconContext.Provider>
          <nav className={styles.destination}>
            <ul>
              <p className={styles.recently}>Recently:</p>
              {[...new Set(visited)].map((city) => {
                const recent = city.replace('/', '');
                if (recent !== '') {
                  return (
                    <Link to={city}>
                      <li>{recent}</li>
                    </Link>
                  )
                }
              })}
            </ul>

            <ul>
              <p>All destinations:</p>
            </ul>

            <ul>
              <li>Helsinki</li>
              <li>Rome</li>
              <li>Stockholm</li>
              <li>London</li>
            </ul>

            <ul>
              <li>Oslo</li>
              <li>Amsterdam</li>
              <li>Copenhagen</li>
              <li>San Francisco</li>
            </ul>

            <ul>
              <li>Norway</li>
              <li>Tampere</li>
              <li>Budapest</li>
              <li>Los Angeles</li>
            </ul>

            <ul>
              <li>Jakarta</li>
              <li>Salatiga</li>
              <li>Kiev</li>
              <li>Berlin</li>
            </ul>
          </nav>
        </li>

        <li className={styles.service}>
          Services
          <IconContext.Provider value={{ className: "dropdown" }}>
            <RiArrowDropDownFill />
          </IconContext.Provider>
          <nav className={styles.destination}>
            <ul>
              <div>
                <IconContext.Provider value={{ className: "bs-search" }}>
                  <BsSearch className={styles.search} />
                </IconContext.Provider>
                <input type="text" placeholder="Search for services here..." />
              </div>

              <p className={styles.recently}>Recently:</p>
              <li>Flight</li>
              <li>Hotel</li>
            </ul>

            <ul>
              <p>All services:</p>
            </ul>

            <ul>
              <li>Event</li>
              <li>Restaurant</li>
            </ul>

            <ul>
              <li>Transportation</li>
              <li>Job</li>
              <li>Flight</li>
            </ul>
          </nav>
        </li>

        <li className={styles.topic}>
          Topics
          <IconContext.Provider value={{ className: "dropdown" }}>
            <RiArrowDropDownFill />
          </IconContext.Provider>
          <nav className={styles.destination}>
            <ul>
              <p className={styles.recently}>Recently:</p>
              <li>Rome</li>
              <li>Stockholm</li>
            </ul>

            <ul>
              <p>All topics:</p>
            </ul>

            <ul>
              <li>Decisive facts</li>
              <li>Documentation</li>
              <li>Accomodation</li>
              <li>Transportation</li>
            </ul>

            <ul>
              <li>Career guide</li>
              <li>To-do list</li>
              <li>Health</li>
              <li>Internet</li>
            </ul>

            <ul>
              <li>Banking</li>
              <li>Education</li>
              <li>Shopping</li>
              <li>Food</li>
            </ul>

            <ul>
              <li>Culture</li>
              <li>Events</li>
              <li>Attactions</li>
              <li>Entertainment</li>
            </ul>

            <ul>
              <li>Social life</li>
              <li>Sports</li>
              <li>Tourism</li>
            </ul>
          </nav>
        </li>

        <Link to="/pricing" className="navigation_link" id="link_pricing">
          Pricing
        </Link>
      </div>
      <div className={styles.option}>
        <button className={styles.ownCityBtn}>Own your own city section</button>
      </div>

      <div className={styles.options} className={styles.left}>
        <div className={styles.optionItems}>
          <img src={WeatherIcon} alt="weather" className={styles.weatherIcon} />
          <span className={styles.weatherText}>
            <p className={styles.temperature} id="temp">
              {weather}
            </p>
            <p>&#8451;</p>
          </span>

          <div className={styles.loginBtn}>
          <a
          type="button"
          className="navigation_button"
          id="button_login"
          href="https://globuzzer.mn.co/sign_in"
        >
          Login
        </a>
          </div>
          <Link to="/signup">
            <button className={styles.signUpBtn}>Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
  return <>{width > 1100 ? <DesktopNav /> : <NavigationMobile />}</>;
};

export default NavBar;
