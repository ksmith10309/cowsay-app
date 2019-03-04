import React from 'react'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: "",
      input: ""
    }
  }

  static getInitialProps({req, query}) {
    return {
      cowsay: query.cowsay
    }
  }

  handleSelect = event => {
    this.setState({value: event.target.value})
  }

  handleChange = event => {
    this.setState({ input: event.target.value })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    window.location.href = `/?f=${this.state.value}&text=${this.state.input}`
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <select value={this.state.value} onChange={this.handleSelect}>
            <option value="">Cow</option>
            <option value="dragon">Dragon</option>
            <option value="dragon-and-cow">Cow and Dragon</option>
          </select>
          <input
            type="text"
            value={this.state.input}
            onChange={this.handleChange}
            placeholder="Enter text"
          />
          <input type="submit" value="Say" />
        </form>
        <pre>{this.props.cowsay}</pre>
      </div>
    )
  }
}

export default Index
