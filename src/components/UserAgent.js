import React, { useEffect, useState } from "react";


function UserAgent() {
    let user_agent = navigator.userAgent
    const url = `https://api.apicagent.com/?ua=${user_agent}`

    const filters = ["adventurer", "croodles", "female", "human", "identicon", "big-smile", "bottts", "avataaars", "jdenticon", "gridy", "micah"]

    const [agent, setAgent] = useState(null)
    const [filter, setFilter] = useState(filters[0])
    const [imgURL, setImgURL] = useState("");
    const [seed, setSeed] = useState(null)

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setAgent(data))
    }, [url])

    const handleFilterChange = (event) => {
        setSeed(agent.os.name)
        setFilter(event.target.value)

        setImgURL(
            `https://avatars.dicebear.com/api/${event.target.value}/${seed}.svg`
        );
    };

    if (agent) {
        return (
            <div className="container">
                <div>
                    <h3 className="main--header">Operating System: {agent.os.name}</h3>
                    <div className="text--box">
                        <pre className="header-top">Select a sprite here:  </pre>
                        <select onChange={handleFilterChange} >
                            {filters.map((value, index) => (
                                <option value={value} key={index}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    </div>

                    {imgURL && (
                        <div className="image-container">
                            <img className="card" src={imgURL} alt="Generated Avatar" />
                        </div>
                    )}
                </div>
            </div>
        )
    }
    return (<div></div>)
}

export default UserAgent