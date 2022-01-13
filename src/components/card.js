import React from 'react'

class Card extends React.Component {

    render() {
        return(
            <div class="card mb-3">
                <div class="card-header">{this.props.title}</div>
                    <div class="card-body">
                        {this.props.children}
                    </div>                
            </div>
        )
    }
}

export default Card