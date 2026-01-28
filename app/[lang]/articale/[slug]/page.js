import { getArticaleBySlug } from "@/lib/getArticales";

const SingleArticale = ({ params: { slug } }) => {
  const singleArticaleData = getArticaleBySlug(slug);

  console.log(singleArticaleData);

  return <div>SingleArticale</div>;
};

export default SingleArticale;
