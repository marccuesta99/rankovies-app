// InputForm.tsx
import React from 'react';

interface InputFormProps {
  isMovie: boolean;
  searchText: string;
  handleInputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({ isMovie, searchText, handleInputChange }) => {

  return (
    <form className='w-full mx-auto flex flex-col items-start'>
      <small className='text-sm text-gray-500 dark:text-gray-100'>
        Enter the {isMovie ? 'movie' : 'TV show'} you're watching or loving right now to reveal its ranking!
      </small>
      <div className='relative z-0 w-full my-5 group'>
        <input
          type='text'
          name='floating_text'
          id='floating_text'
          className='block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-yellow-400 dark:focus:border-yellow-400 focus:outline-none focus:ring-0 focus:border-yellow-400 peer'
          placeholder=' '
          value={searchText}
          onChange={handleInputChange}
          required
        />
        <label
          className='peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-yellow-400 peer-focus:dark:text-yellow-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'
        >
          {isMovie ? 'Movie title' : 'TV Show title'}
        </label>
      </div>
    </form>
  );
};

export default InputForm;