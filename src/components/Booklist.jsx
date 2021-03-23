// import React from "react";
import React, { useState, useEffect } from "react";

const Booklist = props => {
    const [bookData, setBookData] = useState(null);
    useEffect(() => {
        const result = props.getData?.(props.language).then(response => setBookData(response));
    }, [props])

    return (
        <div>
            <ul>
                {
                    bookData === null
                        ? <p>now loading...</p>
                        : bookData.data.items.map((x, index) => <li key={index}>{x.volumeInfo.title}<br></br>{x.volumeInfo.description}<br></br>{x.volumeInfo.publishedDate}</li>)

                }
            </ul>
        </div >
    );
};
export default Booklist;