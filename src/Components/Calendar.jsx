import React, { useContext, useEffect, useState } from "react";
import { CalenderContext } from "../context/CalenderContext";
import Header from "./Header";
import MainContent from "./MainContent";

const Calendar = () => {
  const [data, setData] = useState(null);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { month } = useContext(CalenderContext);
  console.log(month);

  useEffect(() => {
    getData();
  }, [month]);

  const getData = async () => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://v1.igpods.com/api/social_calendar/get/${month}`
      );
      const payload = await res.json();

      setData(payload);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  };

  return (
    <div>
      {data !== null && <Header data={data} loading={loading} error={error} />}
      {data !== null && <MainContent data={data} />}
    </div>
  );
};

export default Calendar;
