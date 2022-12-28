//** React Imports
import { useContext } from "react"

// ** Store & Actions
import { IntlContext } from "/@src/utility/context/Internationalization"

export const useTrans = (key) => {
  const { plainText } = useContext(IntlContext)

  return plainText(key)
}
