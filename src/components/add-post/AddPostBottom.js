import React, { useState, useEffect } from "react";

const AddPostBottom = () => {
    const [groupsData, setGroupsData] = useState([]);

    useEffect(() => {
        const groupsJsonData = require("../../data/groups.json");
        setGroupsData(groupsJsonData);
    }, []);

    const groupsSelectOptions = groupsData.map((group) => {
        const iconPath = `../../icons/groups/${group.icon}`;
        return (
            <option value={group.id} key={group.id}>
                {group.name}
            </option>
        );
    });

    return (
        <section>
            <h5>Wybierz grupę</h5>
            <div>
                <select>{groupsSelectOptions}</select>
                <button>Opublikuj</button>
            </div>
        </section>
    );
};

export default AddPostBottom;
