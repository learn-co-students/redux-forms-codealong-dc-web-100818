import React, { Component } from 'react'
import { connect } from 'react-redux'
import addTodo from '../../action/addTodo'

class CreateTodo extends Component {
  constructor(){
    super()
    this.state = {
      text: '',
    }
  }

  handleChange = (event) => {

    this.setState({
      [event.target.name]:event.target.value
    })
  }


  handleSubmit = (event) => {
    event.preventDefault()
    this.props.addTodo(this.state)
  }



  render() {
    return(
      <div>
        Create Todo Component
        <form onSubmit={this.handleSubmit}>
          <p>
          <label>ADD TODO</label>
            <input  name='text' value={this.state.text} type='text' onChange={this.handleChange} />
            </p>
            <input type="submit" />
        </form>
        {this.state.text}
      </div>
    )
  }
}

function mapDispatchToState(dispatch) {
  return {
    addTodo: (formData)=> dispatch(addTodo(formData))
  }
}

export default connect(null, mapDispatchToState)(CreateTodo);
