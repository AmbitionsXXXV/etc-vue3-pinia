import EtcRequest from "../request"

export function getDetailInfos(houseId) {
    return EtcRequest.get({
        url: "/detail/infos",
        params: {
            houseId,
        },
    })
}
