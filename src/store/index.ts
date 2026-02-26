import { create } from 'zustand';


export const portfolio = create((set) => {{
   name: 'omar'
   email: 'omraldyb2020@gmail.com'
   setName: (name: string) => set({name: name})
   setEmail: (email: string) => set({email: email})

}})