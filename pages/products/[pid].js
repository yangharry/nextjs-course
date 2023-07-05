import { Fragment, useEffect } from 'react';
import path from 'path';
import fs from 'fs/promises';

export default function ProductDetailPage(props) {
  const { loadedProduct } = props;

  //   fallback: true 일 때 사용
  if (!loadedProduct) {
    return <p>Loading...</p>;
  }

  return (
    <Fragment>
      <h1>{loadedProduct.title}</h1>
      <p>{loadedProduct.description}</p>
    </Fragment>
  );
}

async function getData() {
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const jsonDate = await fs.readFile(filePath);
  const data = JSON.parse(jsonDate);

  return data;
}

export async function getStaticProps(context) {
  const { params } = context;

  const productId = params.pid;

  const data = await getData();

  const product = data.products.find((product) => product.id === productId);

  if (!product) {
    return { notFound: true }; // default 404 page.
  }

  return {
    props: {
      loadedProduct: product,
    },
  };
}

export async function getStaticPaths() {
  const data = await getData();

  const ids = data.products.map((product) => product.id);

  const pathsWithParams = ids.map((id) => ({ params: { pid: id } }));
  return {
    paths: pathsWithParams, // 클라이언트가 실행 되기전에 서버에서 실행 되므로 url 의 경로를 알려줘야함, 최적화시 접속자가 많은 페이지
    fallback: true, //사전 생성되지 않은 페이지 전부 기다려서 보여줌, 준비된 페이지만 보여줌: 'false', 데이터 상태 넣어주면 작동: 'true'(로딩화면 구현으로 대체)
  };
}
