"use client";
import { useState } from "react";
import Modal from "./Modal";
import SingleArticale from "./SingleArticale";
import { useRouter } from "next/navigation";

const SingleNews = ({ singleArticaleData }) => {
  const router = useRouter();
  const [isLoginModalOpen, setLoginModalOpen] = useState(true);

  const handleCloseModal = () => {
    setLoginModalOpen(false);
    router.back();
  };

  return (
    <>
      <Modal isOpen={isLoginModalOpen} onClose={() => handleCloseModal()}>
        <SingleArticale singleArticaleData={singleArticaleData} />
      </Modal>
    </>
  );
};

export default SingleNews;
