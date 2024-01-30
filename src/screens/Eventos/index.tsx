import { View, Text } from "react-native";
import { styles } from "./styles";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BtnNavToAgendamento } from "../../components/BtnNavToAgendamento";
import DraggableFlatList from "react-native-draggable-flatlist";
import { CustomDialog } from "../../components/CustomDialog";
import { ListaEventosVazia } from "../../components/ListaEventosVazia";
import ItemLista from "../../components/ListaEventos";
import { ViewController } from "./ViewController";

export interface EventosProps {
  route: {
    params: {
      eventData: {
        index: any;
        nameEvent: string;
        dateEvent: string;
        participants: string[];
      };
    };
  };
}

export function Eventos({ route }: EventosProps | any) {
  const {
    refFlatList,
    openDialog,
    confirmRemoveEvent,
    eventList,
    handleDeleteEvent,
    ConfirmDelete,
    setOpenDialog,
    setEventList,
    setConfirmRemoveEvent
  } = ViewController({ route });

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

      <CustomDialog
        isVisible={openDialog}
        onBackdropPress={() => {
          setOpenDialog(false);
        }}
        buttonText="Não"
        onConfirm={() => {
          ConfirmDelete();
          setOpenDialog(false);
        }}
        onConfirmYes={() => {
          setConfirmRemoveEvent({ value: false, index: null });
        }}
      >
        <Text style={styles.textDialog}>Remover Evento?</Text>
      </CustomDialog>

      <View style={styles.containerApp2}>
        <DraggableFlatList
          ref={refFlatList}
          data={eventList}
          ListEmptyComponent={<ListaEventosVazia />}
          keyExtractor={(item, index) => index.toString()}
          onDragEnd={({ data }) => {
            setEventList(data);
          }}
          renderItem={({ item, index, drag }: any) => (
            <ItemLista
              item={item}
              index={index}
              drag={drag}
              handleDeleteEvent={handleDeleteEvent}
            />
          )}
        />
        <BtnNavToAgendamento />
      </View>

    </GestureHandlerRootView>
  );
}
