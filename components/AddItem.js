import React from "react";

export default class AddPlayer extends React.Component {
    handleSubmit(e){
        let itemName = e.target.itemName.value;

        e.preventDefault();

        if (itemName) {
            e.target.itemName.value = '';
            // players insert
            // Players.insert({
            //     name: playerName,
            //     score: 0
            // });
        }
    }
    render(){
        return(
            <div className="item">
                <form className="form" onSubmit={this.handleSubmit.bind(this)}>
                    <input className="form__input" type="text" name="itemName" placeholder="Item name"/>
                    <button className="button">Add Item</button>
                </form>
            </div>
        );
    }
}