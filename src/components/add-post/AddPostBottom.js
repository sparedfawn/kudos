import React from "react";

const AddPostBottom = ({ handlePickingGroup, groups }) => {
    const groupsSelectOptions = groups.map((group) => {
        return (
            <option value={group.id} key={group.id}>
                {group.name}
            </option>
        );
    });

    return (
        <div>
            <h5>Wybierz grupę</h5>
            <select onChange={handlePickingGroup}>
                <option disabled selected value>
                    Wybierz grupę
                </option>
                {groupsSelectOptions}
            </select>
        </div>
    );
};

export default AddPostBottom;
