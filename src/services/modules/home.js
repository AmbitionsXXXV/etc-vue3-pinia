import EtcRequest from "../request"

export function getHomeHotSuggests() {
    return EtcRequest.get({
        url: "/home/hotSuggests",
    })
}

export function getHomeCategories() {
    return EtcRequest.get({
        url: "/home/categories",
    })
}

export function getHomeHouselist(currentPage) {
    return EtcRequest.get({
        url: "/home/houselist",
        params: {
            page: currentPage,
        },
    })
}
