import React from 'react';
import {ItemCount} from '../ItemCount';

const limitStock= 5;

export const ItemListContainer= () =>{

    const onAdd = (number) => number === 0 ? alert(`No puedes agregar ${number} unidades al carrito`) : alert(`Agregaste ${number} unidades al carrito`)

    return <div>Component List here
        <div class="container-fluid">
        <ItemCount stock={limitStock} initial={1} onAdd= {onAdd} />

        </div>
    </div>

} 