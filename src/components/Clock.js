import React from 'react'
import PropTypes from 'prop-types'

class Clock extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: new Date().toLocaleTimeString(),
      color: ''
    }
  }
  
  componentDidMount() {
    setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() })
    },1000)
  }
  
  render() {
    const {color} = this.props;
    return (
        <div>
          <div style={{display:'block', width:'200px', 
          height:'100px', backgroundColor:`${color}`, borderRadius: '20%', position:'relative', margin:'0'}}>
            <div style={{display:'block', width:'170px', 
            height:'30px', backgroundColor:'white', position: 'absolute', top: '34%', 
            left: '8%', borderRadius: '2px'}}>
            </div>
              <span style={{position: 'absolute', top:'40%', left: '30%'}}>{this.state.time}</span>
          </div>
        </div>
      )
  }
}

Clock.propTypes = {
  color: PropTypes.string.isRequired,
}

Clock.defaultProps = {
  color: "red"
}


export default Clock;