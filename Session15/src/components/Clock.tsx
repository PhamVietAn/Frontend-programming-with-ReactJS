import { Component } from 'react'

interface State {
    currentTime: string;
}

export default class Clock extends Component<object, State> {
    private intervalId: number | null = null;

    constructor(props: object) {
        super(props);
        this.state = {
            currentTime: this.getCurrentTime()
        };
    }

    getCurrentTime = (): string => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours} : ${minutes} : ${seconds}`;
    }

    componentDidMount(): void {
        this.intervalId = setInterval(() => {
            this.setState({ currentTime: this.getCurrentTime() });
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
                <h3>Thời gian hiện tại: {this.state.currentTime}</h3>
            </div>
        )
    }
}
