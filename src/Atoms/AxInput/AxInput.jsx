import React from 'react'

const AxInput = ({ value, setValue, validation, errorMessage }) => {
    const LocalInput = () => {
        return <input value={value} />
    }

    const LocalDiv = () => {
        return <div> {value}</div>
    }

    return (
        <>
            <LocalDiv />
            <LocalInput />
        </>
    )
}
