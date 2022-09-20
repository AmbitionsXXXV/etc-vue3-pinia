import EtcRequest from "../request"

export function getDetailInfos(houseId) {
    return EtcRequest({
        url: "/detail/infos",
        params: {
            houseId,
        },
    })
}
