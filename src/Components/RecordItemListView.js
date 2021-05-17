import React from "react";

function RecordItemListView(item) {
    const hideRecord = () => {
        // Change to record view for this item
        return null;
    }

    return (<div id={item.ref} class="record-list">
        <div>{item.description}</div>
        <div>{item.finalCount}</div>
        {item.counts.map(count => {
            return (<div id={count.id} className="inventory-item">
                <div>{count.value}</div>
                <div>{count.date}</div>
                <div>{count.user}</div>
            </div>);
        })};
    </div>)
}

export default RecordItemListView;