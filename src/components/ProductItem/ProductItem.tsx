import Button from '../Button';
import style from './ProductItem.module.scss';

const ProductItem = ({ className, product, onAdd }: any) => {
  const onAddHandLen = () => {
    onAdd(product);
  };

  return (
    <div className={style.item}>
      <div className={'product ' + className}>
        <div className={' img'} />
        <div className={'title'}>{product.title}</div>
        <div className={'description'}>{product.description}</div>
        <div className={' price'}>
          <span>
            Стоимость: <b>{product.price}</b>
          </span>
        </div>
        <Button
          className={'add-btn'}
          onClick={onAddHandLen}
          name='Добавить в корзину'
        />
      </div>
    </div>
  );
};

export default ProductItem;
