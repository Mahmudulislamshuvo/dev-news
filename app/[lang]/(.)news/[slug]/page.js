import SingleNews from "@/components/SingleNews";
import { getArticaleBySlugDynamic } from "@/lib/getArticales";
import { getDictionary } from "../../dictionaries";

const InterceptedSingleArtical = async ({ params: { slug, lang } }) => {
  const dictionary = await getDictionary(lang);
  const singleArticaleData = await getArticaleBySlugDynamic(slug);
  if (!singleArticaleData) {
    notFound();
  }

  return (
    <>
      <SingleNews
        singleArticaleData={singleArticaleData}
        dictionary={dictionary}
      />
    </>
  );
};

export default InterceptedSingleArtical;
