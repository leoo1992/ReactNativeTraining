import { Button } from "@rneui/base";

export function SubmitButton() {
  return (
    <Button
      title="Enviar"
      iconRight
      iconContainerStyle={{ marginLeft: 10 }}
      titleStyle={{ fontWeight: "700" }}
      buttonStyle={{
        backgroundColor: "#50Cf69",
        borderColor: "#fff",
        borderWidth: 2,
        borderRadius: 30,
      }}
      containerStyle={{
        flex: 1,
      }}
    />
  );
}
