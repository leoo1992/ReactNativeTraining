import { InputNameEvent } from "../../components/InputNameEvent/InputNameEvent";
import { InputDateEvent } from "../../components/InputDateEvent/InputDateEvent";
import { InputParticipante } from "../../components/Participant/Input/InputParticipante";

export const InputsUnificados = ({
  onAddEvent,
  onAddDate,
  onAddParticipant,
  clearInput,
  inputRef,
  onSubmitEditing,
}: any) => {
  const handleAddEvent = (EventNome: any) => {
    onAddEvent(EventNome);
  };

  const handleAddEventDate = (EventDate: any) => {
    onAddDate(EventDate);
  };

  const handleAddParticipant = (participantNome: any) => {
    onAddParticipant(participantNome);
  };

  return (
    <>
      <InputNameEvent
        onAddEvent={handleAddEvent}
        clearInput={clearInput}
        inputRef={inputRef}
        onSubmitEditing={onSubmitEditing}
      />
      <InputDateEvent
        onAddDate={handleAddEventDate}
        onSubmitEditing={onSubmitEditing}
      />
      <InputParticipante
        onAdd={handleAddParticipant}
        onSubmitEditing={onSubmitEditing}
      />
    </>
  );
};
