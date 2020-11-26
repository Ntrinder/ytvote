export interface YTResponse {
    items: Array<Items>
}

export interface Items {
    id: {
        videoId: string
    }
}