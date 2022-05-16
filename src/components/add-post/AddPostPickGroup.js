import React from "react";

const AddPostPickGroup = ({ handlePickingGroup, groups }) => {
    const groupsSelectOptions = groups.map((group) => {
        return (
            <option value={group.id} key={group.id}>
                {group.name}
            </option>
        );
    });

    return (
        <>
            <h5>Wybierz grupę</h5>
            <select onChange={handlePickingGroup} defaultValue="default">
                <option disabled value="default">
                    Wybierz grupę
                </option>
                {groupsSelectOptions}
            </select>
        </>
    );
};

export default AddPostPickGroup;
