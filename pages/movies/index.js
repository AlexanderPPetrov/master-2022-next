import DefaultLayout from "../../layouts/DefaultLayout";
import {useEffect} from "react";
import { useDispatch } from 'react-redux';
import { getMovies } from "../../redux/actions";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import MovieList from "../../components/MovieList";

function Movies(props) {

    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(getMovies());
    }, [dispatch]);

    return (
      <DefaultLayout left={<MovieList/>} />
    );
  }

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'navbar']),
  },
})
export default Movies;