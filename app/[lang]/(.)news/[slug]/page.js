import SingleNews from "@/components/SingleNews";
import { getArticaleBySlugDynamic } from "@/lib/getArticales";

const InterceptedSingleArtical = async ({ params: { slug } }) => {
  const singleArticaleData = await getArticaleBySlugDynamic(slug);
  if (!singleArticaleData) {
    notFound();
  }

  return (
    <>
      <SingleNews singleArticaleData={singleArticaleData} />
    </>
  );
};

export default InterceptedSingleArtical;
