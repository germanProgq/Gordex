import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchProducts } from '../../../token/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import ProductItem from '../ProductSeperate';
import '../styles/styleMobile.css'
import '../styles/styleDesktop.css'

const groupProducts = (products, groupSize) => {
  const groups = [];
  for (let i = 0; i < products.length; i += groupSize) {
    groups.push(products.slice(i, i + groupSize));
  }
  return groups;
};

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const query = searchParams.get('query');

  useEffect(() => {
    const fetchResults = async () => {
      if (query) {
        try {
          setLoading(true);
          const data = await SearchProducts(query);

          setResults(Array.isArray(data) ? data : data.products || []);
        } catch (err) {
          setError('Failed to fetch search results');
        } finally {
          setLoading(false);
        }
      }
    };

    fetchResults();
  }, [query]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const groupedResults = groupProducts(results, 5);

  return (
    <div>
      {groupedResults.length > 0 ? (
        groupedResults.map((group, index) => (
          <div key={index} className={style.go__container}>
            <Swiper modules={[FreeMode]} slidesPerView={'auto'} spaceBetween={10} freeMode={true}>
              {group.map((product) => (
                <SwiperSlide key={product.id} style={{ width: 'auto' }}>
                  <ProductItem
                    name={product.name}
                    price={product.price}
                    images={{ main: product.mainImage, others: product.otherImages }}
                    description={product.description}
                    shipping={product.shipping}
                    brand={product.brand}
                    config={product.config}
                    colors={product.colors}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        ))
      ) : (
        <p>No results found for "{query}"</p>
      )}
    </div>
  );
};

export default SearchResults;
