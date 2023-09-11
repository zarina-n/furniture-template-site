const productsList = [
  {
    name: 'Люстра VODA',
    img: 'voda.jpg',
    description:
      'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
    price: 45000,
    salePrice: 67000,
    id: 1,
    specialOffer: true,
  },
  {
    name: 'Диван RONALD',
    img: 'ronald.jpg',
    description:
      'Модель отличается простотой линий и форм, отсутствием броского декора.',
    price: 156000,
    salePrice: 198000,
    id: 2,
    specialOffer: true,
  },
  {
    name: 'Комод VENT',
    img: 'vent.jpg',
    description:
      'Европейский дуб - отличается особой прочностью и стабильностью.',
    price: 34000,
    salePrice: 45000,
    id: 3,
    specialOffer: true,
  },
  {
    name: 'Кровать TATRAN',
    img: 'tatran.jpg',
    description:
      'Основание из полированной нержавеющей стали, придает оригинальный парящий эффект.',
    price: 120000,
    salePrice: 0,
    id: 4,
    specialOffer: false,
  },
  {
    name: 'Кресло VILORA',
    img: 'vilora.jpg',
    description:
      'Мягкое и уютное, аккуратное и стильное. Упругие подушки сиденья и приятная на ощупь ткань.',
    price: 21000,
    salePrice: 0,
    id: 5,
    specialOffer: false,
  },
  {
    name: 'Стол MENU',
    img: 'menu.jpg',
    description:
      'Для того чтобы трапезничать было приятно, необходим правильный обеденный стол.',
    price: 34000,
    salePrice: 0,
    id: 6,
    specialOffer: false,
  },
  {
    name: 'Кресло ASKESTA',
    img: 'asketa.jpg',
    description:
      'Высокоэластичный пенополиуретан в «начинке» кресла надежен и долговечен',
    price: 68000,
    salePrice: 0,
    id: 7,
    specialOffer: false,
  },
  {
    name: 'Стол NORMAN',
    img: 'norman.jpg',
    description:
      'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки.',
    price: 40000,
    salePrice: 0,
    id: 8,
    specialOffer: false,
  },
  {
    name: 'Диван NASTAN',
    img: 'nastan.jpg',
    description:
      'Модель отличается простотой линий и форм, отсутствием броского декора.',
    price: 80000,
    salePrice: 0,
    id: 9,
    specialOffer: false,
  },
  {
    name: 'Диван ASKETA',
    img: 'asketa_couch.jpg',
    description:
      'Благодаря защелкивающемуся механизму диван легко раскладывается в комфортную кровать.',
    price: 68000,
    salePrice: 0,
    id: 10,
    specialOffer: false,
  },
  {
    name: 'Кресло LUNAR',
    img: 'lunar.jpg',
    description:
      'Прекрасно переносит солнечные лучи, перепады влажности и любые осадки.',
    price: 40000,
    salePrice: 0,
    id: 11,
    specialOffer: false,
  },
  {
    name: 'Шкаф Nastan',
    img: 'nastan_drawer.jpg',
    description:
      'Мебель может быть оснащена разнообразными системами подсветки.',
    price: 80000,
    salePrice: 0,
    id: 12,
    specialOffer: false,
  },
]

const productContent = document.querySelector('.product-content')
const productBoxCatalog = document.querySelector('.product-content_catalog')

const specialOffers = productsList.filter((product) => product.specialOffer)
const catalogItems = productsList.filter((product) => !product.specialOffer)

const getItems = (productBox, products) => {
  products.map((product, i) => {
    if (i < 6) {
      const productItem = document.createElement('div')
      productItem.classList.add('product')

      const productImage = document.createElement('img')
      productImage.src = `./src/img/${product.img}`
      productImage.classList.add('product-img')

      const productName = document.createElement('div')
      productName.classList.add('product-name')
      productName.textContent = product.name

      console.log(productName.textContent)

      const productDescription = document.createElement('p')
      productDescription.classList.add('product-text')
      productDescription.textContent = product.description

      productPriceBox = document.createElement('div')
      productPriceBox.classList.add('product-price_box')

      const productPrice = document.createElement('span')
      productPrice.classList.add('product-price')
      productPrice.textContent = product.price

      const productSalePrice = document.createElement('span')

      if (product.specialOffer) {
        productSalePrice.classList.add('product-price', 'product-price-sale')
        productSalePrice.textContent = product.salePrice
      }

      productPriceBox.append(productPrice)
      productPriceBox.append(productSalePrice)

      productItem.append(productImage)
      productItem.append(productName)
      productItem.append(productDescription)
      productItem.append(productPriceBox)

      productBox.append(productItem)
    }
  })
}

getItems(productContent, specialOffers)
getItems(productBoxCatalog, catalogItems)
