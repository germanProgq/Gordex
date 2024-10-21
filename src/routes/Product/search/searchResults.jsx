import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { SearchProducts } from '../../../token/api';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import ProductCard from '../../../components/ProductCard/ProductCard';
import style from '../styles/style.module.css';

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
          console.log(data);
          setResults(data);
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

  // Group results into arrays of 5 products each
  const groupedResults = groupProducts(results, 5);

  return (
    <div>
      {groupedResults.length > 0 ? (
        groupedResults.map((group, index) => (
          <div key={index} className={style.go__container}>
            <Swiper modules={[FreeMode]} slidesPerView={'auto'} spaceBetween={10} freeMode={true}>
              {group.map((product) => (
                <SwiperSlide key={product.id} style={{ width: 'auto' }}>
                  <ProductCard product={product} />
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
