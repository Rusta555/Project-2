export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit)
}

export const getPagesArray = (totalPages) => {
    let ressult = [];
    for (let i = 0; i < totalPages; i++) {
        ressult.push( i + 1 )
    }
    return ressult;
}