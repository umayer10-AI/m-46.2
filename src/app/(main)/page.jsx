import { redirect } from 'next/navigation';

const id = '01'

const page = () => {
  return (
    redirect(`/cart/${id}`)
  );
};

export default page;