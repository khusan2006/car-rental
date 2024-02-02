import { ReactNode, createContext, useContext, useState } from "react"
import { ContextType } from "@/lib/types";
const bookCarContext = createContext<ContextType | null>(null);

const BookCarProvider = ({children}: {children: ReactNode}) => {
  const [payload, setPayload] = useState<FormData | object >({})
 const [isAlertOpen, setIsAlertOpen] = useState<boolean>(false)

  const intialValues = {
    payload, 
    setPayload,
    isAlertOpen,
    setIsAlertOpen
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