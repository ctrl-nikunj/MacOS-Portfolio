import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

const INITIAL_Z_INDEX = 1000;

const useWindowStore = create(
  immer((set) => ({
    windows: {
      finder: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
      resume: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
      photos: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
      safari: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
      contacts: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
      terminal: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
      trash: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
      txtfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
      imgfile: { isOpen: false, zIndex: INITIAL_Z_INDEX, data: null },
    },
    nextZIndex: INITIAL_Z_INDEX + 1,
    openWindow: (windowKey, data = null) =>
      set((state) => {
        const window = state.windows[windowKey];
        if (!window) return;
        if (window.isOpen) return;
        window.isOpen = true;
        window.zIndex = state.nextZIndex;
        window.data = data ?? window.data;
        state.nextZIndex++;
      }),
    closeWindow: (windowKey) =>
      set((state) => {
        const window = state.windows[windowKey];
        if (!window) return;
        if (!window.isOpen) return;
        window.isOpen = false;
        window.data = null;
        window.zIndex = INITIAL_Z_INDEX;
      }),
    focusWindow: (windowKey) =>
      set((state) => {
        const window = state.windows[windowKey];
        if (!window) return;
        if (!window.isOpen) return;
        window.zIndex = state.nextZIndex;
        state.nextZIndex++;
      }),
  }))
);

export default useWindowStore;
