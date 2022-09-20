import EtcRequest from "../request"

export function getCityAll() {
    return EtcRequest.get({
        url: "/city/all",
    })
}
