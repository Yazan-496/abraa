import { API } from "@utils"
import { _autoLogin } from "@modules/user/"
//************************************//
export const _getAppSettings = (callback, ability) => {
  return (dispatch) => {
    API.get("/setting/all")
      .then(function ({ data }) {
        // data.app.date_format = phpToMomentFormat(data.app.date_format)
        // data.app.time_format = phpToMomentFormat(data.app.time_format)
        // data.app.datetime_format = phpToMomentFormat(data.app.datetime_format)
        dispatch({ type: "APP_SETTINGS", data })
        _autoLogin(dispatch, ability, callback)
      })
      .catch(function (res) {})
  }
}
