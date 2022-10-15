import React from "react";
import "./ButtonPage.css";
import ButtonOne from "../Components/ButtonOne";
import ButtonTwo from "../Components/ButtonTwo";
import ButtonThree from "../Components/ButtonThree";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCreditCard,
  faPen,
  faFileCircleCheck,
  faCirclePause,
  faCalculator,
  faMobileScreen,
  faCircleXmark,
  faArrowLeft,
  faDollarSign,
  faMoneyBill,
} from "@fortawesome/free-solid-svg-icons";

export default function ButtonPage() {
  return (
    <div className="Home">
      <br></br>
      <ButtonOne
        value={
          <>
            <FontAwesomeIcon icon={faCreditCard} /> CARD
          </>
        }
      />{" "}
      <ButtonOne
        value={
          <>
            <FontAwesomeIcon icon={faPen} /> QUOTATION
          </>
        }
      />{" "}
      <ButtonOne
        value={
          <>
            <FontAwesomeIcon icon={faFileCircleCheck} /> CREDIT
          </>
        }
      />
      <br />
      <br />
      <ButtonTwo
        variant="success"
        value={
          <>
            <FontAwesomeIcon icon={faDollarSign} /> CASH
          </>
        }
      />{" "}
      <ButtonTwo
        variant="danger"
        value={
          <>
            <FontAwesomeIcon icon={faMoneyBill} /> PAY
          </>
        }
      />
      <br />
      <br />
      <ButtonThree
        value={
          <>
            <FontAwesomeIcon icon={faCirclePause} />
          </>
        }
      />{" "}
      <ButtonThree
        value={
          <>
            <FontAwesomeIcon icon={faCalculator} />
          </>
        }
      />{" "}
      <ButtonThree
        value={
          <>
            <FontAwesomeIcon icon={faMobileScreen} />
          </>
        }
      />{" "}
      <ButtonThree
        value={
          <>
            <FontAwesomeIcon icon={faCircleXmark} />
          </>
        }
      />{" "}
      <ButtonThree
        value={
          <>
            <FontAwesomeIcon icon={faArrowLeft} />
          </>
        }
      />
    </div>
  );
}
