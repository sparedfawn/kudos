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
        <section>
            <h5>Wybierz grupę</h5>
            <select onChange={handlePickingGroup}>{groupsSelectOptions}</select>
        </section>
    );
};

export default AddPostBottom;
