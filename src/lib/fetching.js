export const getCategories = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories")
    return res.json()
}