import NewsCard from "@/components/NewsCard";
import PageTitle from "@/components/PageTitle";
import { getDictionary } from "./dictionaries";

const Home = async ({ params: { lang } }) => {
  const dictionbary = await getDictionary(lang);

  return (
    <main className="mt-12">
      <PageTitle dictionbary={dictionbary} />
      <NewsCard />
    </main>
  );
};

export default Home;
