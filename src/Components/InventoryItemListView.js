import React from "react";

function InventoryItemListView(inventory) {
    const showRecord = (item) => {
        // Change to record view for this item
        return null;
    }

    return (<div id={inventory.id} class="inventory-list">
        <div>{inventory.name}</div>
        <div>{inventory.location}</div>
        <div>{inventory.dueDate}</div>
        <div className={"checkmark " + inventory.isComplete ? "complete" : "incomplete"}></div>
        <div>{inventory.assignedTo}</div>
        {inventory.items.map(item => {
            return (<div id={item.id} className="inventory-item" onclick={showRecord(item)}>
                <div>{item.name}</div>
                <div>{item.numberOfItems}</div>
                <div className={"checkmark " + item.isComplete ? "complete" : "incomplete"}></div>
            </div>);
        })};
    </div>)
}

export default InventoryItemListView;