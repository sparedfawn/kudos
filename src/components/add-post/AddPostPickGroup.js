import React, { useState } from "react";

import ExpandMoreIcon from "../../icons/expand_more.svg";

const AddPostPickGroup = ({ currentGroupId, handlePickingGroup, groups }) => {
    const [isDropdownOpened, setIsDropdownOpened] = useState(false);

    const handleOpeningDropdown = () => {
        setIsDropdownOpened((prevState) => !prevState);
    };

    const handleChoosingOption = (groupId) => {
        setIsDropdownOpened(false);
        handlePickingGroup(groupId);
    };

    const groupsSelectOptions = groups.map((group) => {
        return (
            <div className="pickable-option" key={group.id} onClick={() => handleChoosingOption(group.id)}>
                <Group group={group} />
            </div>
        );
    });

    const currentGroup = groups.find((group) => group.id === currentGroupId);

    const groupPickerSection = currentGroup ? (
        <Group group={currentGroup} />
    ) : (
        <div className="default-option">Wybierz grupę</div>
    );

    return (
        <>
            <h5 className="section-title">Wybierz grupę</h5>
            <div className="group-picker-head" onClick={handleOpeningDropdown}>
                {groupPickerSection}
                <img src={ExpandMoreIcon} />
            </div>
            {isDropdownOpened && <div className="options-container">{groupsSelectOptions}</div>}
        </>
    );
};

const Group = ({ group }) => {
    return (
        <div className="group">
            <img src={group.icon} />
            <span>{group.name}</span>
        </div>
    );
};

export default AddPostPickGroup;
