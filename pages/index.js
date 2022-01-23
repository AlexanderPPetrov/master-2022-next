import FeaturedImage from "../components/FeaturedImage";
import DefaultLayout from "../layouts/DefaultLayout";
import LoginForm from "../components/LoginForm";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

function Home(props) {
  return (
    <DefaultLayout 
      left={<FeaturedImage/>}
      right={<LoginForm/>}/>
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'navbar']),
  },
})
export default Home;
