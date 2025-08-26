import { Component } from 'react'

interface State {
    isDarkMode: boolean
}

export default class ThemeSwitcher extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            isDarkMode: false
        }
    }

    render() {
        const { isDarkMode } = this.state;
        
        const lightTheme = {
            backgroundColor: '#ffffff', color: '#000000', height: "300px", display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif', transition: 'all 0.3s ease'
        };

        const darkTheme = {
            backgroundColor: '#333333', color: '#ffffff', height: "300px", display: 'flex', flexDirection: 'column' as const, alignItems: 'center', justifyContent: 'center', fontFamily: 'Arial, sans-serif', transition: 'all 0.3s ease'
        };

        return (
            <div style={isDarkMode ? darkTheme : lightTheme}>
                <h1 style={{ fontSize: '32px', marginBottom: '30px', textAlign: 'center' }}>
                    {isDarkMode ? '🌙 Chế độ Tối đang bật' : '☀️ Chế độ Sáng đang bật'}
                </h1>
                
                <button 
                    onClick={() => this.setState({ isDarkMode: !isDarkMode })}
                    style={{ padding: '12px 24px', fontSize: '16px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '8px', fontWeight: 'bold' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                    Chuyển theme
                </button>
            </div>
        )
    }
}