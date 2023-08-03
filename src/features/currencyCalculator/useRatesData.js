import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";


const API_URL = "https://api.exchangerate.host/latest?symbols=PLN,USD,EUR,GBP";

export const useRatesData = () => {

  const [ratesData, setRatesData] = useState({ success: false });

  useEffect(() => {
    const getRates = async () => {
      try {
        const response = await axios.get(API_URL);
        setRatesData({
          date: response.data.date,
          rates: response.data.rates,
          success: response.data.success,
        });
      }
      catch {
        setRatesData({ success: false });
      }
    };

  getRates();
  }, []);

  return ratesData;
};