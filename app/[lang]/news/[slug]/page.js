import SingleArticale from "@/components/SingleArticale";
import { getArticaleBySlugDynamic } from "@/lib/getArticales";
import { notFound } from "next/navigation";
import { getDictionary } from "../../dictionaries";

const SingleArticalePage = async ({ params: { slug, lang } }) => {
  const singleArticaleData = await getArticaleBySlugDynamic(slug);
  const dictionary = await getDictionary(lang);

  console.log(dictionary);

  console.log(dictionary);

  if (!singleArticaleData) {
    notFound();
  }

  return (
    <>
      <SingleArticale
        singleArticaleData={singleArticaleData}
        dictionary={dictionary}
      />
    </>
  );
};

export default SingleArticalePage;
