import React, { useState } from "react";
import { useRoute } from "@react-navigation/native";
import { orders } from "../fakers";

const useDeclinedOrders = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [declineReason, setDeclineReason] = useState("");

  const route = useRoute();
  const param = route.params.param;
  const closeModal = () => setIsModalOpen(false);
  const getDeclineReason = () => {
    console.log(declineReason);
    setIsModalOpen(false);
  };

  const rejectedOrders = orders.filter((item) => item.status === "rejected");

  return {
    isModalOpen,
    setIsModalOpen,
    declineReason,
    setDeclineReason,
    param,
    closeModal,
    getDeclineReason,
    rejectedOrders,
  };
};

export default useDeclinedOrders;
