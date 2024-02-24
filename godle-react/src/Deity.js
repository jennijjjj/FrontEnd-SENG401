import React from "react";

const Deity = ({ deity, setDeity }) => {
    const reset = () => {
        setDeity(undefined);
    }

    return <>
        {deity ? <p>{deity.name}</p> : <p>Deity error</p>}
        <button onClick={reset}>Reset</button>
    </>
}

export default Deity;