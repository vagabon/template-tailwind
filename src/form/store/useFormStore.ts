import { FormDto } from "module/auth/login/component/form/LoginForm";
import { create } from "zustand";

export interface IFormStoreProps {
  forms: Record<string, FormDto>;
  setForm: (values: FormDto) => void;
}

export const useFormStore = create<IFormStoreProps>((set) => ({
  forms: {},
  setForm: (values) =>
    set((state) => ({
      ...state,
      forms: {
        ...state.forms,
        ...values,
      },
    })),
}));
