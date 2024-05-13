import React, { ChangeEvent, useState } from 'react';
import { Products } from '../App';
import uuid from 'react-uuid';

interface Props {
  addProduct: (product: Products) => void;
}

const InputBar: React.FC<Props> = ({ addProduct }) => {
  console.log("hi");
  // 원래는 FilterableProductTable에서 emptyProduct를 생성해서
  // InputBar에 props로 전달해줬었는데, 이렇게 하면 확장에 유연하지 못하다는 단점이 있다.
  // 구현체가 아니라 인터페이스를 기반으로 구현하는 것이 바람직하다(객체지향 기본 원칙)
  //  이 구현체를 FilterableProductTable에서 생성해서 내려줄 이유가 없음
  // 응집도 측면에서 InputBar에서 생성하는 것이 맞음
  // (FilterableProductTable에서는 emptyProduct를 사용하지 않기 때문에)

  // <Omit<Products>, 'id'>> -> Products 타입에서 "id" 속성을 제거한 새로운 타입을 생성
  const [newProduct, setNewProduct] = useState<Omit<Products, 'id'>>({
    category: '',
    price: 0,
    stocked: true,
    name: '',
  });

  const handleChange = (
    // value의 타입에 뭐가 추가될지 모르기 때문에
    // string | boolean으로 제한하면 안됨

    // typeof newProduct: newProduct의 타입을 가져옴
    // keyof Omit<Products, 'id'>: Products 타입에서 'id' 속성을 제외한 속성의 키

    // value -> newProduct의 속성 값의 타입
    // label -> newProduct의 속성 키의 타입(category, price, stocked...)
    value: (typeof newProduct)[keyof Omit<Products, 'id'>],
    label: keyof Omit<Products, 'id'>
  ) => {
    console.log(value);
    setNewProduct({ ...newProduct, [label]: value });
  };

  const handleClickProductBtn = () => {
    addProduct({ ...newProduct, id: uuid() });
    setNewProduct({
      category: '',
      price: 0,
      stocked: true,
      name: '',
    });
  };

  return (
    <form>
      <input
        type="text"
        value={newProduct.category}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChange(e.target.value, 'category');
        }}
        placeholder="category..."
      />
      <input
        type="text"
        value={newProduct.price}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChange(Number(e.target.value), 'price');
        }}
        placeholder="price..."
      />
      <label htmlFor="stocked">Is Stocked</label>
      <input
        id="stocked"
        type="checkbox"
        checked={newProduct.stocked}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChange(e.target.checked, 'stocked');
        }}
      />
      <input
        type="text"
        value={newProduct.name}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          handleChange(e.target.value, 'name');
        }}
        placeholder="name..."
      />
      <button onClick={handleClickProductBtn} type="button">
        Add new product
      </button>
    </form>
  );
};

export default InputBar;
