import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Reporte = () => {

  const [startDate, setStartDate] = useState(new Date());
  return (
    <div id="Fecha">
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    </div>
  );
};
export default Reporte;

