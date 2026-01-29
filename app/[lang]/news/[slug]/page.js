import SingleArticale from "@/components/SingleArticale";
import { getArticaleBySlugDynamic } from "@/lib/getArticales";
import { notFound } from "next/navigation";

const SingleArticalePage = async ({ params: { slug } }) => {
  const singleArticaleData = await getArticaleBySlugDynamic(slug);

  if (!singleArticaleData) {
    notFound();
  }

  return (
    <>
      <SingleArticale singleArticaleData={singleArticaleData} />
    </>
  );
};

export default SingleArticalePage;
