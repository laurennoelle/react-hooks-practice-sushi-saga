import React, { useState } from 'react'

function SushiWallet({addMoney}) {
    const [wallet, setWallet] = useState(0);

    function handleSubmit(e) {
        e.preventDefault();
        addMoney(wallet);
        setWallet(0)

    }

    return (
        <form onSubmit={handleSubmit}>
            More Money: {""}
            <input
                type="number" 
                value={wallet}
                onChange={(e) => setWallet(parseInt(e.target.value))}
            ></input>
            <button type="submit">Add</button>
        </form>
    );
}

export default SushiWallet