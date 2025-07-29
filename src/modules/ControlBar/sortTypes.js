export const sortTypes = {
    price_asc: (a, b) => { return (a.discont_price ? a.discont_price : a.price) - (b.discont_price ? b.discont_price : b.price) },
    price_desc: (a, b) => { return (b.discont_price ? b.discont_price : b.price) - (a.discont_price ? a.discont_price : a.price) },
    newest: (a, b) => { return new Date(b.updatedAt) - new Date(a.updatedAt) },
    default: (a, b) => { return a.id - b.id },
}