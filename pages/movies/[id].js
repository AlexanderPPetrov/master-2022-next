import { useRouter } from 'next/router'
import DefaultLayout from "../../layouts/DefaultLayout";
import Movie from "../../components/Movie";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getMovieDetails} from "../../redux/actions";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function MovieDetails() {
    const dispatch = useDispatch();
    const movie = useSelector(state => state.selectedMovie);
    const router = useRouter()
    useEffect(() => {
        if(!router.isReady) return;
        const { id } = router.query
        
        dispatch(getMovieDetails(id))
    }, [dispatch, router.isReady]);


    function renderMovie() {
        if(!movie || !Object.keys(movie).length) {
            return null;
        }
        return <Movie movie={movie}/>
    }

    return (
        <DefaultLayout left={renderMovie()} />
    )
}

export const getStaticProps = async ({ locale }) => ({
    props: {
      ...await serverSideTranslations(locale, ['common', 'navbar']),
    },
  })

export const getStaticPaths = async () => {
    return {
        paths: [], //indicates that no page needs be created at build time
        fallback: 'blocking' //indicates the type of fallback
    }
}

export default MovieDetails;