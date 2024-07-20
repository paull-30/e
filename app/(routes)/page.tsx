import Billboard from '@/components/billboard';
import ProductList from '@/components/product-list';
import Container from '@/components/ui/container';
import getBillboard from '@/lib/actions/get-billboard';
import getProducts from '@/lib/actions/get-products';

const HomePage = async () => {
  const billboard = await getBillboard('40679c16-8466-4103-8ec7-87d7c76fd945');
  const products = await getProducts({ isFeatured: true });
  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
      </div>
      <div className='flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8'>
        <ProductList title='Featured Products' items={products} />
      </div>
    </Container>
  );
};

export default HomePage;
