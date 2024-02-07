import { useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import style from './ProductList.module.scss';
import { useTelegram } from '../../hooks/useTelegram';

const products = [
  {
    id: '1',
    title: 'Джинсы',
    price: 5000,
    description: 'Синего цвета, прямые',
  },
  {
    id: '2',
    title: 'Куртк',
    price: 12000,
    description: 'Зеленого цвета, теплая',
  },
  {
    id: '3',
    title: 'Джинсы 2',
    price: 5000,
    description: 'Синего цвета, прямые',
  },
  {
    id: '4',
    title: 'Куртк 8',
    price: 122,
    description: 'Зеленого цвета, теплая',
  },
  {
    id: '5',
    title: 'Джинсы 3',
    price: 5000,
    description: 'Синего цвета, прямые',
  },
  {
    id: '6',
    title: 'Куртк 7',
    price: 600,
    description: 'Зеленого цвета, теплая',
  },
  {
    id: '7',
    title: 'Джинсы 4',
    price: 5500,
    description: 'Синего цвета, прямые',
  },
  {
    id: '8',
    title: 'Куртка 5',
    price: 12000,
    description: 'Зеленого цвета, теплая',
  },
];

const getTotalPrice = (items: any) => {
  return items.reduce((acc: any, item: any) => {
    return (acc += item.price);
  }, 0);
};

const ProductList = () => {
  const [addedItems, setAddedItems] = useState([]);
  const { tg } = useTelegram();

  const onAdd = (product: any) => {
    const alreadyAdded = addedItems.find((item: any) => item.id === product.id);
    let newItems: any = [];

    if (alreadyAdded) {
      newItems = addedItems.filter((item: any) => item.id !== product.id);
    } else {
      newItems = [...addedItems, product];
    }

    setAddedItems(newItems);

    if (newItems.length === 0) {
      tg.MainButton.hide();
    } else {
      tg.MainButton.show();
      tg.MainButton.setParams({
        text: `Buy ${getTotalPrice(newItems)}`,
      });
    }
  };

  return (
    <div className={style.products}>
      {products.map((item: any, index: any) => (
        <ProductItem
          product={item}
          onAdd={onAdd}
          className={style.product__item}
        />
      ))}
    </div>
  );
};

export default ProductList;
