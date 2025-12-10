import {createWithEqualityFn} from "zustand/traditional";
import {shallow} from "zustand/vanilla/shallow";
import {createJSONStorage, persist} from "zustand/middleware";

import type {T_Store} from "../types";



export const useStore = createWithEqualityFn<T_Store>()(
  persist( (set) => ({

    hideCompleted: false,
    selectedUser: null,

    toggleCompleted: (hideCompleted) => {
      set({ hideCompleted })
    },

    selectUser: (user) => {
      set({ selectedUser: user })
    }


  }),
  {
    name: 'todos-app-store',
    storage: createJSONStorage(() => sessionStorage),
  }),
  shallow
)