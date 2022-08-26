// JSON --> JavaScript Object Notation
const user = {id: 1, name: 'kosia', job: 'actor'}

const str = JSON.stringify(user);
// console.log(str)


const shop = {
    owner: 'alia',
    address: {
        street: 'kochukhet',
        city: 'ranbir',
        country: 'BD'
    },
    products: ['laptop', 'mic', 'monitor', 'keyboard'],
    revenue: 45000,
    isOpen: true,
    isNew: false,
}
console.log(shop)
const shopJson = JSON.stringify(shop)
const shopJsonStr = JSON.parse(shopJson)
console.log(shopJson, shopJsonStr)