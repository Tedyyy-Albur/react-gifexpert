/*rafc para poder crear el componente de manera rapida y borramos la importacion ya que esta ya esta definida global */

import { useState } from "react"


export const AddCategory = ({ onNewCategory }) => {

    const [inputValue, setinputValue] = useState('')

    /*Aqui se puede destructurar con {taget} en ves de event*/
    const onIputChange = (event) => {

        setinputValue(event.target.value);

    }

    const onSubmit = (event) => {
        /*NO acepta campos vacios*/
        event.preventDefault();
        /**definimos que el formulario no este vacio*/
        if (inputValue.trim().length <= 1) return;

        //setCategories(categories => [inputValue,...categories]);
        onNewCategory(inputValue.trim());
        setinputValue('');


    }
    return (
        <form onSubmit={onSubmit}>
            <input type="text"
                placeholder="Buscar gifs"
                value={inputValue}
                onChange={onIputChange}
            />

        </form>

    )
}




