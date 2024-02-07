import { getPagesByUrlName } from '@/app/lib/data.service';
import styles from './page.module.css';
import Image from 'next/image';
import Qandas from '@/components/boilerplate/qandas/qandas';

const Page = ({ params }) => {
  console.log(params);
  const page = getPagesByUrlName(params.page);
  console.log(page);

  const heroImage = {
    path: page.image[0].path,
    alt: page.image[0].alt,
  };

  let themeCls = styles[page.theme];
  console.log(themeCls);

  return (
    <div className={`${styles.container} ${themeCls}`}>
      <p>Params: {params.page}</p>
      <h1>Title: {page.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: page.content }}></div>
      <div>
        <Image src={heroImage.path} alt={heroImage.alt} width={100} height={100} />
      </div>
      <div>
        {page.image.map((image, index) => (
          <Image key={index} src={image.path} alt={image.alt} width={100} height={100} />
        ))}
      </div>
      <div>
        <Qandas />
      </div>
    </div>
  );
};
export default Page;
