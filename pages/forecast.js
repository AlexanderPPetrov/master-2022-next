import DefaultLayout from "../layouts/DefaultLayout";
import {useEffect} from "react";
import { useDispatch } from 'react-redux';
import { getWeather } from "../redux/actions";
import Weather from "../components/Weather";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function Forecast(props) {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getWeather());
    }, [dispatch]);

    return (
      <DefaultLayout left={<Weather/>} />
    );
  }

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'navbar']),
  },
})
export default Forecast;