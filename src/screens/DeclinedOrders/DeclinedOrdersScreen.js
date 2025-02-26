import { View, Text, Modal, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import CustomButton from "../../components/CustomButton";
import CustomInput from "../../components/CustomInput";
import { style } from "./style";
import useDeclinedOrders from "../../hooks/useDeclinedOrders";

export default function DeclinedOrdersScreen() {
  const {
    isModalOpen,
    setIsModalOpen,
    declineReason,
    setDeclineReason,
    param,
    closeModal,
    getDeclineReason,
    rejectedOrders,
  } = useDeclinedOrders();

  return (
    <View style={{ marginTop: 10 }}>
      <FlatList
        data={rejectedOrders}
        style={{ paddingHorizontal: 20 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity style={style.container} activeOpacity={0.5}>
            <Text style={style.label}>{index + 1}</Text>
            <View
              style={{
                flex: 1,
              }}
            >
              <View style={style.topContainer}>
                <View>
                  <Text style={style.title}>{item.name}</Text>
                  <Text style={style.smallTxt}>{item.date}</Text>
                  <Text style={style.smallTxt}>{item.time}</Text>
                </View>
                <Text style={style.status}>{item.status}</Text>
              </View>
              <Text style={style.table}>Table {item.table}</Text>
              <Text style={[style.table, { textAlign: "left" }]}>
                {item.declineReason}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <CustomModal
        visible={isModalOpen}
        closeModal={closeModal}
        declineReason={declineReason}
        setDeclineReason={setDeclineReason}
        getDeclineReason={getDeclineReason}
      />
    </View>
  );
}

const CustomModal = ({
  visible,
  closeModal,
  declineReason,
  setDeclineReason,
  getDeclineReason,
}) => {
  return (
    <Modal visible={visible} onRequestClose={closeModal}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flex: 1,
          backgroundColor: "#00000060",
        }}
      >
        <View
          style={{
            backgroundColor: "#fff",
            paddingVertical: 20,
            paddingHorizontal: 30,
            borderRadius: 10,
          }}
        >
          <Text
            style={{ fontSize: 17, fontWeight: "500", textAlign: "center" }}
          >
            Why do you want to decline the order?
          </Text>
          <CustomInput
            value={declineReason}
            onChangeText={(text) => setDeclineReason(text)}
            multiline={true}
          />
          <CustomButton title="Submit" onPress={getDeclineReason} />
        </View>
      </View>
    </Modal>
  );
};
