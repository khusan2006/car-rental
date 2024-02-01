import { BookFormData } from "@/lib/types";
import { ReactNode, createContext, useContext, useState } from "react"
type ContextType = {
  payload: BookFormData | object,
  setPayload:  React.Dispatch<React.SetStateAction<object | FormData>>
}
const bookCarContext = createContext<ContextType | null>(null);

const BookCarProvider = ({children}: {children: ReactNode}) => {
  const [payload, setPayload] = useState<FormData | object >({})
  const intialValues = {
    payload, 
    setPayload
  }
  return (
    <bookCarContext.Provider value={intialValues}>
       {children}
    </bookCarContext.Provider>
  )
}

export default BookCarProvider;
export const useBookCarContext = (): ContextType => {
  const context = useContext(bookCarContext);
  if(!context) {
    throw new Error('useMyContext must be used within a MyProvider');
  }
  return context
}