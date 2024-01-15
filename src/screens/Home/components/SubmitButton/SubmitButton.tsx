import { Button } from "@rneui/base";
import { styles } from "./styles";

export function SubmitButton() {
  return (
    <Button
      title="Enviar"
      iconRight
      iconContainerStyle={styles.iconContainer}
      titleStyle={styles.title}
      buttonStyle={styles.button}
      containerStyle={styles.container}
    />
  );
}
