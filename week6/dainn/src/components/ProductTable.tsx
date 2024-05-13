import { useState } from 'react';
import React, { Fragment } from 'react';
import { Products } from '../App';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';
import FilterableProductTable from './FilterableProductTable';

// GroupedProducts interface 추가
interface GroupedProducts {
  category: string;
  products: Products[];
}

interface Props {
  products: Products[];
  filterText: string;
  inStockOnly: boolean;
  filterableDeleteProduct: (deleteId: string) => void;
}


const ProductTable: React.FC<Props> = ({
  products,
  filterText,
  inStockOnly,
  filterableDeleteProduct
}) => {

  console.log("productTable");

  // const deleteId = (number) => {
  //   setNumber(number);
  // }

  // rows와 lastCategory는 사용하지 않으므로 선언x

  // 기존에는 filteredProducts 하나만 있었는데
  // filterdProducts -> filteredProducts와 groupedProductsByCategory로 분리

  // filteredProducts는 필터링만 하는 함수
  // inStockOnly -> 재고 여부 | filterText -> 검색어
  let filteredProducts = products.filter(
    (product) =>
      (!inStockOnly || product.stocked) &&
      product.name.toLowerCase().includes(filterText.toLowerCase())
  );

  let deletedProducts = filteredProducts;

  const deleteProduct = (deleteId: string) => {
    console.log("deletedID: ",deleteId);
    console.log(products.length);
    filterableDeleteProduct(deleteId);
   


  };


  // groupedProductsByCategory는 위의 filteredProducts에서 필터링된 제품들을
  // 카테고리를 기준으로 그룹화해주는 함수

  // Object.values -> 특정 객체를 대상으로 value값들만 뽑아서 배열로 반환하는 메서드
  const groupedProductsByCategory = Object.values(
    
    // acc: 누적값, product: 현재 처리 중인 상품
    filteredProducts.reduce((acc, product) => {
      const { category } = product;
      
      // acc 객체에 category 속성이 이미 있는지 확인
      // category 속성이 없다면, 새로운 { category, products: [] } 객체를 생성하여 acc[category]에 할당
      acc[category] = acc[category] || { category, products: [] };

      // 현재 처리 중인 상품 product를 해당 카테고리의 products 배열에 추가
      acc[category].products.push(product);
      console.log("herere");
      return acc;

      // reduce 함수의 두 번째 인자는 acc의 초기값
      // -> 빈 객체 {}를 acc의 초기값으로 설정하고
      // 이 객체의 타입을 { [category: string]: GroupedProducts }로 지정
      // 각 카테고리 이름을 키로 가지고, 그 값으로 GroupedProducts 타입의 객체를 가지는 객체를 의미
    }, {} as { [category: string]: GroupedProducts })
    
  );


  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {/* 원래는 rows 라는 변수에 ReactElement가 배열로 들어가있었다.
       -> view와 logic이 혼재되어 있어서 어떤 역할을 하는지 예측하기 어렵다 
       
       각 렌더 함수(return문) 위에서는 컴포넌트에 전달해줄 데이터를 가공하고
       렌더 함수 안에서는 오로지 뷰와 관련된 코드를 작성하는 것으로 수정
       */}
        {groupedProductsByCategory.map((productCategory) => {
          return (
            <Fragment key={productCategory.category}>
              <ProductCategoryRow category={productCategory.category} />
              {productCategory.products.map((product) => (
                <ProductRow key={product.id} product={product} deleteProduct={deleteProduct} />
              ))}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
