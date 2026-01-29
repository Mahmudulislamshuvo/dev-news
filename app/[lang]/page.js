import NewsCard from "@/components/NewsCard";
import PageTitle from "@/components/PageTitle";
import { getDictionary } from "./dictionaries";

const Home = ({ params: { lang } }) => {
  const dictionbary = getDictionary(lang);
  return (
    <main className="mt-12">
      <PageTitle dictionary={dictionbary} />
      <NewsCard />
    </main>
  );
};

export default Home;
