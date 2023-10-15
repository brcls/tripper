import {
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import { ParamListBase, RouteProp } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Header from "../../components/Header";
import Button from "../../ui/Button";
import { RootStackParamList } from "../../../App";

interface IPasswordSignUp {
  route: RouteProp<RootStackParamList, "PasswordSignUp">;
  navigation: StackNavigationProp<ParamListBase>;
}

const PasswordSignUp = ({ navigation, route }: IPasswordSignUp) => {
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  const verifyFields = () => {
    if (!password) return true;
    if (!confirmPassword) return true;
    if (password === confirmPassword) return false;

    return true;
  };

  const handleNext = () => {
    const email = route.params?.email;
    const number = route.params?.number;
    const username = route.params?.username;

    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header
          leftButtonProps={{
            icon: "chevron-left",
            navigation: () => navigation.goBack(),
          }}
        />
        <View style={styles.formContainer}>
          <View style={styles.textContainer}>
            <Text style={styles.title}>Senha</Text>
          </View>
          <TextInput
            focusable
            style={styles.input}
            placeholder="Senha"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
          <TextInput
            focusable
            style={styles.input}
            placeholder="Confirme a senha"
            secureTextEntry={true}
            onChangeText={(text) => setConfirmPassword(text)}
            value={confirmPassword}
          />
          <Button
            disabled={verifyFields()}
            onPress={handleNext}
            text="Finalizar cadastro"
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default PasswordSignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    paddingTop: "30%",
  },
  formContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
    gap: 10,
  },
  textContainer: {
    width: "90%",
    textAlign: "left",
  },
  title: {
    fontSize: 40,
    fontWeight: "900",
    marginBottom: 10,
  },
  formText: {
    fontSize: 25,
    fontWeight: "300",
    marginBottom: 30,
  },
  input: {
    width: "90%",
    height: 40,
    borderColor: "rgb(193, 193, 193)",
    borderWidth: 1,
    borderRadius: 5,
    padding: 8,
  },
});
