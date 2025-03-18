type EventType = {
  status: boolean;
  message?: string;
}

interface NewEventProps{
  action: string;
  event: EventType; 
}

export const useNewEvent = ({action, event}: NewEventProps): void => {
  const e = new CustomEvent(action, { detail: event })
  document.dispatchEvent(e);
}
