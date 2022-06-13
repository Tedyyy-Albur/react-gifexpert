import { useState } from 'react';
import { AddCategory } from "./components/AddCategory";
import { GridGif } from './components/GridGif';

export const GifExpertsApp = () => {
    /*Aqui se usa el usestate para mantener el estado de la aplicacion.*/

    const [categories, setCategories] = useState(['one punch']);

    const onAddCategory = (newCategory) => {
        /*Aqui conoces si ya esta incluido dentro del arreglo*/
        if(categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);

    }

    return (
        <>
            <div>GifExpertsApp</div>

            <AddCategory
                //setCategories={setCategories}
                onNewCategory={onAddCategory}
            />
                {
                    categories.map((category) => (
                    <GridGif 
                    key={category}
                    category={category}/>))
                }
            

        </>

    )
}
