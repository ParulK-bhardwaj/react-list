const data = require('./data.json');

const allCategories = data.map(obj => obj.category)

const categoriesSet = new Set(allCategories)
const categoriesUnique = Array.from(categoriesSet)

const categoriesWithCount = allCategories.reduce((obj, cat) => {
    if (cat in obj) {
        obj[cat] += 1
    } else {
        obj[cat] = 1
    }
    return obj}, 
    {}
)

const categoryNamesAndCounts = categoriesUnique.map(name => ({
    category: name,
    count: categoriesWithCount[name]
}))


module.exports =  { data, allCategories, categoriesUnique, categoriesWithCount, categoryNamesAndCounts };