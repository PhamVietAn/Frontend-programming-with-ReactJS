import  { Component } from 'react'
import "./Button.css"

export default class Button extends Component {
  render() {
    const buttons = [
        {label: "primary", type: "primary"},
        {label: "secondary", type: "secondary"},
        {label: "success", type: "success"},
        {label: "warning", type: "warning"},
        {label: "danger", type: "danger"},
        {label: "info", type: "info"},
        {label: "light", type: "light"},
        {label: "dark", type: "dark"},
        {label: "link", type: "link"}
    ]
    return (
      <div style={{ textAlign: 'center' }}>
        {buttons.map((btn, index) => (
          <button key={index} className={`btn ${btn.type}`}>
            {btn.label}
          </button>
        ))}
      </div>
    )
  }
}
