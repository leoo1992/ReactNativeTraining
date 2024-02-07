import { useFocusEffect } from "@react-navigation/native";
import { useState, useRef, useEffect, useCallback } from "react";
import { useNavigation } from "@react-navigation/native";

export function ViewController() {
  const [v1, setV1] = useState(false);
  const [v2, setV2] = useState(false);
  const [v3, setV3] = useState(false);
  const [v4, setV4] = useState(false);
  const [v5, setV5] = useState(false);
  const [delParticipant, setDelParticipant] = useState(false);
  const [participantDel, setParticipantDel] = useState<string | null>(null);
  const [clearInputRef, setClearInputRef] = useState(false);
  const [participant, setParticipant] = useState<string[]>([]);
  const [nameEvent, setNameEvent] = useState<string>("");

  const inputRefNameEvent = useRef<any>(null);

  const navigation = useNavigation();

  const dataAtual = new Date();
  function formatarData(data: Date) {
    const dia = String(data.getDate()).padStart(2, "0");
    const mes = String(data.getMonth() + 1).padStart(2, "0");
    const ano = data.getFullYear();

    return `${dia}-${mes}-${ano}`;
  }
  const dataFormatada = formatarData(dataAtual);
  const [dateEvent, setDateEvent] = useState<string>(dataFormatada);

  const Dialog1 = () => setV1(!v1);
  const Dialog2 = () => setV2(!v2);
  const Dialog3 = () => setV3(!v3);
  const Dialog4 = () => {
    setV3(false);
    setV4(!v4);
  };
  const Dialog5 = () => setV5(!v5);

  const closeDialog3 = () => {
    setV3(false);
  };

  const resetParticipantDel = () => {
    setParticipantDel(null);
  };

  const handleConfirmRemove = () => {
    if (participantDel) {
      Dialog3();
      removeParticipant();
    }
  };

  function AddParticipant(participantNome: string) {
    const participantNomeRetificado = participantNome.toLowerCase();
    const participantNomeRetificadoII = participantNome.toUpperCase();

    if (participant.includes(participantNomeRetificado || participantNomeRetificadoII)) {
      return Dialog1();
    }

    if (!participant) {
      return Dialog5();
    }

    if (
      participantNome === null ||
      participantNome === undefined ||
      participantNome.trim() === ""
    ) {
      return Dialog5();
    }

    setParticipant((prevState) => [...prevState, participantNome]);
    Dialog2();
  }

  function handleAddEvent(EventNome: string) {
    setNameEvent(EventNome);
  }

  function handleAddEventDate(EventDate: string) {
    setDateEvent(EventDate);
  }

  const removeParticipant = () => {
    if (participantDel) {
      setParticipant((prevState) =>
        prevState.filter((nome) => nome !== participantDel)
      );
      Dialog4();
      setParticipantDel(null);
    }
  };

  const clearEventNameInput = () => {
    setClearInputRef(true);
    inputRefNameEvent.current?.clear();
    setNameEvent("");
  };

  const handleSubmitForm = ({
    index,
    participant,
    nameEvent,
    dateEvent,
  }: any) => {
    const eventData = {
      index,
      nameEvent,
      dateEvent,
      participants: participant,
    };

    navigation.navigate("Eventos", { eventData });

    setParticipant([]);
    setDateEvent(dataFormatada);
    setClearInputRef(false);
  };

  useEffect(() => {
    if (delParticipant) {
      removeParticipant();
      setDelParticipant(false);
    }

    if (clearInputRef) {
      clearEventNameInput();
    }
  }, [delParticipant, clearInputRef, participant]);

  useFocusEffect(
    useCallback(() => {
      setParticipant([]);
      setNameEvent("");
      setDateEvent(dataFormatada);
      setDelParticipant(false);
      setParticipantDel(null);
      setClearInputRef(false);
      setV1(false);
      setV2(false);
      setV3(false);
      setV4(false);
      setV5(false);
    }, [])
  );

  return {
    v1,
    v2,
    v3,
    v4,
    v5,
    Dialog1,
    Dialog2,
    Dialog3,
    Dialog4,
    Dialog5,
    closeDialog3,
    resetParticipantDel,
    handleConfirmRemove,
    AddParticipant,
    handleAddEvent,
    handleAddEventDate,
    removeParticipant,
    clearEventNameInput,
    handleSubmitForm,
    inputRefNameEvent,
    participant,
    nameEvent,
    dateEvent,
    clearInputRef,
    delParticipant,
    setDelParticipant,
    setParticipantDel,
  };
}
