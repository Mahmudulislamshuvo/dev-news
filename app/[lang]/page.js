import NewsCard from "@/components/NewsCard";
import PageTitle from "@/components/PageTitle";

const Home = ({ params: { lang } }) => {
  return (
    <main className="mt-12">
      <PageTitle />
      <NewsCard />
    </main>
  );
};

export default Home;
