import { GetServerSideProps } from 'next';
import dataProvider from '@refinedev/simple-rest';
import { GetListResponse, useTable } from '@refinedev/core';
import ProductCards from '@components/ProductCards';

interface IProduct {
	id: number;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}
type ItemProp = {
	products: GetListResponse<IProduct>;
};

const ProductList: React.FC<ItemProp> = ({ products }) => {
	const { tableQueryResult } = useTable<IProduct>({
		resource: 'products',
		queryOptions: {
			initialData: products,
		},
	});

	return (
		<div className='grid grid-cols-4 gap-6 px-24 my-8'>
			{tableQueryResult.data?.data.map((product) => {
				return <ProductCards key={product.id} title={product.title} category={product.category} description={product.description} cardImage={product.image} price={product.price} />;
			})}
		</div>
	);
};

export default ProductList;

export const getServerSideProps: GetServerSideProps = async (context) => {
	const data = await dataProvider('https://fakestoreapi.com').getList<IProduct>({
		resource: 'products',
	});
	return {
		props: { products: data },
	};
};
