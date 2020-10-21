import React from 'react'
import PatchEvent,{set,unset} from 'part:@sanity/form-builder/patch-event'

function createPatchForm(value) {
    return PatchEvent.from(value === '' ? unset() : set(Number(value)))
}

const formatMoney = Intl.NumberFormat('ID',{
    style:'currency',
    currency:'IDR'
}).format

function PriceInput({type,value,onChange,inputComponent}) {
    return (
        <div>
            <h2>{type.title} - {value ? formatMoney(value) : ""}</h2>
            <p>{type.description}</p>
            <input type={type.name} value={value}
            onChange={event => onChange(createPatchForm(event.target.value))}
            ref={inputComponent}
            />
        </div>
    )
}

export default PriceInput
