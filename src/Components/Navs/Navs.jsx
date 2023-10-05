import React from "react";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navs.module.css";
import MainButton from "../Ui/MainButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navs = () => {
  return (
    <nav className=" fixed-top d-flex align-items-center  p-3 pt-4">
      <ul className={`${styles.nav_list} d-flex align-items-center`}>
        <li className={`${styles.brand} me-5`}>
          <img src={logo} alt="logo" className="w-100" />
        </li>
        <div className={`${styles.nav_links} d-flex align-items-center`}>
          <li className="mx-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to={"/"}
              end
            >
              HOME
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.active : undefined
              }
              to={"about"}
            >
              ABOUT
            </NavLink>
          </li>
          <li className="mx-4">
            <NavLink>TOURNAMENT</NavLink>
          </li>
          <li className="mx-4">
            <NavLink>GAMING SHOP</NavLink>
          </li>
          <li className="mx-4">
            <NavLink>NEWS</NavLink>
          </li>
          <li className="mx-4">
            <NavLink>CONTACT</NavLink>
          </li>
        </div>
      </ul>

      <div className="d-flex align-items-center ms-auto mb-3 me-5">
        <Link className={styles.sign_btn}>
          <MainButton />
        </Link>

        <div
          className={`${styles.burger_list} d-flex justify-content-between flex-column mx-3`}
        >
          <span className={styles.half_line}></span>
          <span className={styles.full_line}></span>
          <span className={`${styles.half_line} ms-auto`}></span>
        </div>

        <button className={styles.list}>
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>
    </nav>
  );
};

export default Navs;
