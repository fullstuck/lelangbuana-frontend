import React, { Component } from 'react'
import { Collapse, ListGroup, ListGroupItem } from 'reactstrap'

import PropTypes from 'prop-types'
// import { connect } from 'react-redux'

class Categories extends Component {
    static get propTypes() {
        return {
            children: PropTypes.any,
            name: PropTypes.string,
            categories: PropTypes.string
        }
    }

    state = {
        collapse:false
    }

    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
        this.createCategory=this.createCategory.bind(this)
        this.state = { 
            collapse: false
        }
    }

    toggle() {
        this.setState({ collapse: !this.state.collapse})
    }

    createCategory(item){
        return <ListGroupItem action>{item}</ListGroupItem>
    }

    render() {
        let itemCategory = this.props.categories
        let listCategories = itemCategory.map(this.createCategory)
        return (
            <div>
                <ListGroup>
                    <ListGroupItem onClick={this.toggle} action>{this.props.name}</ListGroupItem>
                    <Collapse isOpen={this.state.collapse}>
                        <ListGroup action >
                            {listCategories}
                        </ListGroup>
                    </Collapse>
                </ListGroup>
            </div>
        )
    }
}

export default Categories