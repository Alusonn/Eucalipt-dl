import { Provider } from "react-redux"
import { BrowserRouter } from "react-router-dom"
import { AppRouter } from "./router/AppRouter"


export const EucaliptoApp = () => {
  return (
    <Provider store={store}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
    </Provider>
  )
}