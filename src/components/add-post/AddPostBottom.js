import React from "react";

const AddPostBottom = ({ groups }) => {
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
            <div>
                <select>{groupsSelectOptions}</select>
                <button>Opublikuj</button>
            </div>
        </section>
    );
};

export default AddPostBottom;
