import { Component } from 'react'

interface State {
    subject: string[];
}

export default class SubjectList extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            subject: ["Toán", "văn", "Anh", "Hoá", "Sinh"]
        }
    }
  render() {
    return (
      <div style={{width: "350px", margin:"auto", backgroundColor: "#242424", color: "white", padding: "20px", borderRadius: "10px"}}>
          <div style={{textAlign: "center"}}>
            <h1>📚Danh sách môn học</h1>
            <div >
                {this.state.subject.map((sub, index) => (
                    <div key={index} style={{width: "100%", borderRadius: "5px", backgroundColor: "#e0f7fa", padding: "10px 0px", margin: "10px 0px", color: "#3379ab"}}>{sub}</div>
                ))}
            </div>
          </div>
      </div>
    )
  }
}
