import axios from "axios";
import React, { useEffect } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

export const TripDetails = () => {
  useProtectedPage();
  useEffect(() => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana/trip/FAtNsyHPJyhVZnSDjdlr",
        {
          headers: {
            auth: localStorage.getItem("token")
          }
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>TripDetails</div>;
};
