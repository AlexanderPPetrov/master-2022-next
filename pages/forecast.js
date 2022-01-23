import DefaultLayout from "../layouts/DefaultLayout";
import {useEffect} from "react";
import { useDispatch } from 'react-redux';
import { getWeather } from "../redux/actions";
import Weather from "../components/Weather";

function Forecast(props) {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getWeather());
    }, [dispatch]);

    return (
      <DefaultLayout left={<Weather/>} />
    );
  }

export default Forecast;