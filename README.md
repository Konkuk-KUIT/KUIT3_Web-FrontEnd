# 6주차 코드 리뷰

## 1. `InputBar` 컴포넌트에 product props를 내려주는 이유?
비어있는 product 객체를 생성하고 이를 사용해서 값을 채워주려고 만든 것 같은데, 이렇게 하면 확장에 유연하지 못한다.

구현체가 아니라 인터페이스를 기반으로 구현하는 것이 바람직하다(객체지향 기본 원칙)

그리고 이 구현체를 FilterableProductTable에서 생성해서 내려줄 이유가 없어보인다. 응집도 측면에서 InputBar에서 생성하는 것이 맞음. (FilterableProductTable에서는 emptyProduct를 사용하지 않기 때문에)

## 2. Products -> Product가 맞음

Products[] -> 제품들들?

```typescript
export interface Products {
  id: number;
  category: string;
  price: string;
  stocked: boolean;
  name: string;
}
```

## 3. 확장에 유연하지 않음2

AS-IS
```typescript
  const handleChange = (value: string | boolean, label: keyof Products) => {
    setNewProduct({ ...newProduct, [label]: value });
  };
```

TO-BE
```typescript
  const handleChange = (
    value: (typeof newProduct)[keyof Omit<Products, "id">],
    label: keyof Omit<Products, "id">
  ) => {
    setNewProduct({ ...newProduct, [label]: value });
  };
```

value의 타입에 뭐가 추가될지 모르기 때문에 `string | boolean`으로 제한하면 안됨

상품수가 추가될 수도 있고 object가 추가될 수도 있음

## 4. price는 number가 맞는거 같아요

이거 제가 2기 때는 string으로 했었는데 되돌아보니 얘는 number가 맞네요ㅈㅅ

## 5. ProductTable 리팩토링

기존 코드에서는

```html
<tbody>{rows}</tbody>
```

rows 라는 변수에 ReactElement가 배열로 들어가있는데, view와 logic이 혼재되어 있어서 어떤 역할을 하는지 예측하기 어렵다

```html
<tbody>
{groupedProductsByCategory.map((productCategory) => {
    return (
    <Fragment key={productCategory.category}>
        <ProductCategoryRow category={productCategory.category} />
        {productCategory.products.map((product) => (
        <ProductRow key={product.id} product={product} />
        ))}
    </Fragment>
    );
})}
</tbody>
```

이와 같이 각 렌더 함수(return문) 위에서는 컴포넌트에 전달해줄 데이터를 가공하고 렌더 함수 안에서는 오로지 뷰와 관련된 코드를 작성한다

AS-IS에서는 rows가 어떻게 구성되어 있는지 코드를 보고 알기 어렵다

그리고 products를 검색어(filterText)와 재고 여부(inStockOnly)로 필터링하는 것과 카테고리로 그룹화하는 것을 분리했다

```typescript
  const filteredProducts = products.filter(
    (product) =>
      (!inStockOnly || product.stocked) &&
      product.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const groupedProductsByCategory = Object.values(
    filteredProducts.reduce((acc, product) => {
      acc[product.category] = acc[product.category] || {
        category: product.category,
        products: [],
      };
      acc[product.category].products.push(product);
      return acc;
    }, {} as { [category: string]: GroupedProducts })
  ).map((group) => ({
    category: group.category,
    products: group.products,
  }));
```

groupedProductsByCategory가 처음 보기에는 알아보기 힘들 수는 있는데 더 나은 방법을 생각해내지 못했음ㅈㅅ

