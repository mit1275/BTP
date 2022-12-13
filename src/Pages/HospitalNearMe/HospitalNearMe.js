import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function HospitalNearMe() {
  const [locations, setLocations] = useState([]);
  const [category, setCategory] = useState("healthcare.hospital");
  const [lat, setLat] = useState(41.878968);
  const [lng, setLng] = useState(-87.770231);

  useEffect(() => {
    try {
      fetch(
        `https://api.geoapify.com/v2/places?categories=${category}&filter=circle:${lng},${lat},5000&limit=100&apiKey=${process.env.REACT_APP_MAPS_API}`,
        {
          method: "GET",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          setLocations(data.features);
          if (data.features.length > 0) {
            toast.success(`Found ${data.features.length} results`);
          } else {
            toast("No result found", {
              icon: "😞",
            });
          }
          console.log(data.features);
        })
        .catch((error) => {
          const message =
            error.response && error.response.data.message
              ? error.response.data.message
              : error.message;
          console.log(error);
          toast.error("Somthing Went Wrong");
        });
    } catch (e) {
      console.log(e);
    }
  }, []);

  return <div>HospitalNearMe</div>;
}
