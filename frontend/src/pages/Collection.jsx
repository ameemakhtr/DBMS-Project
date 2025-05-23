import React, { useContext, useState, useEffect } from 'react'
import { ShopContext } from '../context/ShopeContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subcategory, setSubcategory] = useState([]);
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleSubCategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setSubcategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubcategory((prev) => [...prev, e.target.value]);
    }
  };


  const applyFilter = () => {
    let productsCopy = products.slice();

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category))
    }

    if (subcategory.length > 0) {
      productsCopy = productsCopy.filter(item => subcategory.includes(item.subcategory))
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = () => {
    let filterProductCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(filterProductCopy.sort((a,b) => (a.price - b.price)));
        break;

      case 'high-low':
        setFilterProducts(filterProductCopy.sort((a,b) => (b.price - a.price)))
        break;
      
        default:
          applyFilter();
          break;
    }
  }

  useEffect(() => {
    applyFilter();
  }, [category, subcategory, search, showSearch, products])

  useEffect(() => {
    sortProduct();
  },[sortType])

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter Options */}
      <div className="min-w-60">
        <p onClick={() => setShowFilter(!showFilter)} className="my-2 text-xl flex items-center cursor-pointer gap-2">
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`} >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Medicine'} onChange={toggleCategory} />Medicine
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Equipment'} onChange={toggleCategory} /> Equipment
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Health & Wellness'} onChange={toggleCategory} /> Health & Wellness
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'PPE'} onChange={toggleCategory} /> PPE
            </p>
          </div>
        </div>
        {/* SubCategory Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`} >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Derma'} onChange={toggleSubCategory} />Derma
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Cardiac'} onChange={toggleSubCategory} /> Cardiac
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Respiratory'} onChange={toggleSubCategory} />Respiratory
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'BP Monitors'} onChange={toggleSubCategory} />BP Monitors
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Diabetes Apparatus'} onChange={toggleSubCategory} />Diabetes Apparatus
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Mobility Equipments'} onChange={toggleSubCategory} />Mobility Equipments
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Multivitamins'} onChange={toggleSubCategory} />Multivitamins
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Face Mask'} onChange={toggleSubCategory} />Face Mask
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Disposable Gown'} onChange={toggleSubCategory} />Disposable Gown
            </p>
            <p className="flex gap-2">
              <input type="checkbox" className="w-3" value={'Others'} onChange={toggleSubCategory} />Others
            </p>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'PRODUCTS'} />
          {/* Product Sort */}
          <select onChange={(e)=>setSortType(e.target.value)} className="border-2 border-gray-300 text-sm px-2">
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem key={index} name={item.name} id={item._id} price={item.price} image={item.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;

