import EtcRequest from "../request"

export function getHomeHotSuggests() {
    return EtcRequest.get({
        url: "/home/hotSuggests",
    })
}
