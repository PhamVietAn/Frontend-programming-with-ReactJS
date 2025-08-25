import { Component } from 'react'

interface State {
    count: number
}

export default class Counter extends Component<object, State> {
    private intervalId: number | null = null;

    constructor(props: object) {
        super(props);
        this.state = {
            count: 0
        };
    }

    componentDidMount(): void {
        this.intervalId = setInterval(() => {
            this.setState((prevState) => ({ count: prevState.count === 10 ? 0 : prevState.count + 1 }));
        }, 1000);
    }

    componentWillUnmount(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    render() {
        return (
            <div style={{marginTop: '50px'}}>
                <h2>Đếm số: {this.state.count}</h2>
            </div>
        )
  }
}
