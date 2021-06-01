import React from 'react';

const Subjects = ({ subjects }) => {
    return (
        <div>
            {
                subjects.map(
                    (subject) => (
                        <div key={subject["id"]} className="row border p-5 text-center">
                            <div className="card shadow-sm">
                                <h1 className="text-danger p-1">{subject["id"]}</h1>
                                <h2>{subject["object_class"]}</h2>
                                <p className="p-2 w-2">{subject["special_containment_procedures"]}</p>
                                <p className="p-2 w-2">{subject["description"]}</p>
                            </div>
                        </div>
                    )
                )
            }
        </div>
    )
};

export default Subjects