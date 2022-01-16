import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import '../IndexPrincipal/CssIndex/iPadCss.css';
import '../IndexPrincipal/CssIndex/pcCss.css';

const Reporte = () => {

const [startDate, setStartDate] = useState(new Date());
  return (
    <div id="Fecha">
    <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
    <button id="Buscar">BUSCAR</button>
    </div>
  );
};

export default Reporte;

