import { ChangeEvent, useState } from "react"

type AddItemProps = {
    onAddingItem: Function;
}

export function AddItem({onAddingItem}:AddItemProps) {
    const [ item, setItem ] = useState('')

    function itemHandler(e:ChangeEvent<HTMLInputElement>) {
        setItem(e.target.value)
    }

    function submitHandler(e:ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        onAddingItem(item);
        setItem('')
    }

    return (
        <form onSubmit={submitHandler}>
            <input onChange={itemHandler} type="text" value={item} />
            <input type="submit" value="Add Item" />
        </form>
    )
}