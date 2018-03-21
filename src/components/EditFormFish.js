import React from "react";


class EditFormFish extends React.Component {
    handleChange = event => {
        const updateFish = {
            ...this.props.fish,
            [event.currentTarget.name]: event.currentTarget.value
        };
        this.props.updateFish(this.props.index, updateFish);
    };

    render () {
        const {name, price, image, status, desc} = {...this.props.fish};
        return (
            <div className="fish-edit">
                <input
                    type="text"
                    name="name"
                    value={name}
                    onChange={this.handleChange}/>
                <input
                    type="text"
                    name="price"
                    value={price}
                    onChange={this.handleChange}/>
                <select
                    name="status"
                    value={status}
                    onChange={this.handleChange}>
                    <option value="available">Fresh!</option>
                    <option value="unavailable">Sold Out!</option>
                </select>
                <textarea
                    name="desc"
                    value={desc}
                    onChange={this.handleChange}>
                </textarea>
                <input
                    type="text"
                    name="image"
                    value={image}
                    onChange={this.handleChange}/>
                <button onClick={() =>{this.props.deleteFish(this.props.index)}}>Remove Fish form</button>
            </div>
        );
    }
}

export default EditFormFish;