import React from "react";
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/select/MySelect";


const PostFilter = ({filter, setFilter}) => {

    return (
        <div>
        <MyInput
          value={filter.query}
          onChange={e => setFilter ({...filter, query: e.target.value})}
          placeholder="Axtarish..."            
        />
        <MySelect
          value={filter.sort}
          onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
          defaultValue="Siralama"
          options={[
            {value: 'title', name: 'Adlandirma'},
            {value: 'body', name: 'Tesvir'},
          ]}
        />
      </div>
    );
};
export default PostFilter; 