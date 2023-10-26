import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useModeSwitch = create(
  persist<{mode: string, updateMode: (newMode: string) => any}>((set) => ({
    mode: "light",
    updateMode: (newMode: string) => set({ mode: newMode })
  }), {
    name: "mode-state"
  })
)