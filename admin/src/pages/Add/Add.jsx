/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = ({url}) => {
  const [image, setImage] = useState(null);
  const [data, setData] = useState({
    name: '',
    description: '', // Changed from desc to description
    price: '',
    category: 'Salad'
  });

  const onChangeHandler = (event) => {
    const { name, value, files } = event.target;
    if (name === 'image') {
      setImage(files[0]);
    } else {
      setData(prevData => ({ ...prevData, [name]: value }));
    }
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('price', Number(data.price));
    formData.append('category', data.category);
    formData.append('image', image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.success) {
        setData({
          name: '',
          description: '', 
          price: '',
          category: 'Salad'
        });
        setImage(null);
        document.getElementById('image').value = null;  
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      alert('Failed to add food: Server error');
    }
  };

  return (
    <div className='add'>
      <form className='flex-col' onSubmit={onSubmitHandler}>
        <div className='add-img-upload flex-col'>
          <p>Upload Image</p>
          <label htmlFor='image'>
            <img src={image ? URL.createObjectURL(image) : assets.upload_area} alt='' />
          </label>
          <input
            type='file'
            id='image'
            name='image'
            hidden
            required
            onChange={onChangeHandler}
          />
        </div>
        <div className='add-product-name flex-col'>
          <p>Product Name</p>
          <input
            onChange={onChangeHandler}
            value={data.name}
            type='text'
            name='name'
            placeholder='Type here...'
          />
        </div>
        <div className='add-product-desc flex-col'>
          <p>Product Description</p>
          <textarea
            onChange={onChangeHandler}
            value={data.description} // Changed from desc to description
            name='description' // Changed from desc to description
            rows={6}
            placeholder='Write Content Here...'
            required
          ></textarea>
        </div>
        <div className='add-category-price'>
          <div className='add-category flex-col'>
            <p>Product Category</p>
            <select name='category' value={data.category} onChange={onChangeHandler}>
              <option value='Salad'>Salad</option>
              <option value='Rolls'>Rolls</option>
              <option value='Deserts'>Deserts</option>
              <option value='Sandwich'>Sandwich</option>
              <option value='Cake'>Cake</option>
              <option value='Pure Veg'>Pure Veg</option>
              <option value='Pasta'>Pasta</option>
              <option value='Noodles'>Noodles</option>
            </select>
          </div>
          <div className='add-price flex-col'>
            <p>Product Price</p>
            <input onChange={onChangeHandler} value={data.price} type='number' name='price' placeholder='$100' />
          </div>
        </div>
        <button type='submit' className='add-btn'>ADD</button>
      </form>
    </div>
  );
};

export default Add;
