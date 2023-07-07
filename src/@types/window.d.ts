export {}

declare global {
  export interface Window {
    my_modal_1: {
      showModal: () => void
      close: () => void
    }
    my_modal_2: {
      showModal: () => void
      close: () => void
    }
  }
}
