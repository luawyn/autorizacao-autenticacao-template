import axios from "axios";
import React, { useEffect } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

export const CreateTrips = () => {
  useProtectedPage();
  useEffect(() => {
    const body = {
      name: "Ano novo em Mercúrio",
      planet: "Mercúrio",
      date: "31/12/2019",
      description: "Venha passar a virada pertinho do Sol!",
      durationInDays: 7
    };
    axios
      .post(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/luana/trips",
        body,
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
        console.log(err.response);
      });
  }, []);

  return <div>CreateTrips</div>;
};
