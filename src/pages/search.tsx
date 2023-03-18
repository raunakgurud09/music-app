import Router, { useRouter } from 'next/router';
import React from 'react';

import { ProductList, ProductListSkeleton } from '@/components/products';
import { SearchFilter, SearchCategory, SearchBar } from '@/components/search';
import useSearch from '@/hooks/useSearch';
import styles from '@/styles/Search.module.css';
import Container from '@/components/core/Layouts/Container';

const Search = () => {
  const { query, pathname } = useRouter();
  const router = useRouter();
  const category = query.category as string;
  const keyword = query.keyword as string;
  const sort = query.sort as string;

  const { data, error, isLoading } = useSearch({ category, keyword, sort });
  const products = data || [];

  const handleTabChange = (selected: string) => {
    Router.push({ pathname, query: { ...query, category: selected } });
  };

  const handleFilterChange = (selected: string) => {
    Router.push({ pathname, query: { ...query, sort: selected } });
  };

  const handleSearchSubmit = (searchText: string) => {
    Router.push(`/search?keyword=${searchText}`);
  };

  if (isLoading) {
    return (
      <>
        <Container>
          <div className={styles.searchBarContainer}>
            <SearchBar
              onSubmit={handleSearchSubmit}
              style={{ width: '100%' }}
              isFocus
            />
          </div>
          <div className={styles.sortContainer}>
            <SearchCategory active={category} onChangeTab={handleTabChange} />
            <SearchFilter handleChange={handleFilterChange} active={sort} />
          </div>
          <ProductListSkeleton number={12} />
        </Container>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Container>
          <p>Cannot search product at this moment. Please try again</p>
        </Container>
      </>
    );
  }

  return (
    <>
      <Container>
        {products.length ? (
          <>
            <div className={styles.searchBarContainer}>
              <SearchBar
                onSubmit={handleSearchSubmit}
                style={{ width: '100%' }}
                isFocus
              />
            </div>
            <div className={styles.sortContainer}>
              <SearchCategory active={category} onChangeTab={handleTabChange} />
              <SearchFilter handleChange={handleFilterChange} active={sort} />
            </div>
            <ProductList products={products} />
          </>
        ) : (
          <div className={styles.message}>No products found.</div>
        )}
      </Container>
    </>
  );
};

export default Search;
