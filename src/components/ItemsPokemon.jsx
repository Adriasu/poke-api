import { ShoppingBag } from 'lucide-react'
import React from 'react'

const ItemsPokemon = ({nameItem}) => {
  return (
    <li className="flex gap-2 items-center">
        <ShoppingBag/> {nameItem.item.name}
    </li>
  )
}

export default ItemsPokemon
