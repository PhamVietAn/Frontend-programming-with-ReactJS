import { Component } from 'react'

interface State {
    name: string, email: string, age: number, error: string, submitted: boolean, submittedData: { name: string, email: string, age: number } | null
}

export default class Ex5 extends Component<object, State> {
    constructor(props: object) {
        super(props);
        this.state = {
            name: '', email: '', age: 0, error: '', submitted: false, submittedData: null
        }
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const { name, value } = e.target;
        this.setState({ ...this.state, [name]: name === 'age' ? Number(value) : value, error: '' });
    }

    handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        const { name, email, age } = this.state;

        if (!email.includes('@')) {
            this.setState({ error: 'Email không hợp lệ', submitted: false });
            return;
        }

        if (age < 0) {
            this.setState({ error: 'Tuổi không được âm', submitted: false });
            return;
        }

        this.setState({ error: '', submitted: true, submittedData: { name, email, age } });
    }

    handleClearAll = (): void => {
        this.setState({ name: '', email: '', age: 0, error: '', submitted: false, submittedData: null });
    }

    render() {
        const { name, email, age, error, submitted, submittedData } = this.state;

        return (
            <div style={{ padding: '20px', maxWidth: '400px', margin: '0 auto', backgroundColor: '#242424' }}>
                <div style={{ backgroundColor: 'white', padding: '30px', borderRadius: '10px' }}>
                    <h1 style={{ fontSize: '24px', marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        📋 Nhập thông tin người dùng
                    </h1>
                    
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" name="name" placeholder='Họ tên' value={name} onChange={this.handleChange} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: 'none', borderRadius: '5px', backgroundColor: '#00e5ff', fontSize: '16px', color: '#333', boxSizing: 'border-box' }} />
                        
                        <input type="text" name="email" placeholder='Email' value={email} onChange={this.handleChange} style={{ width: '100%', padding: '12px', marginBottom: '15px', border: 'none', borderRadius: '5px', backgroundColor: '#00e5ff', fontSize: '16px', color: '#333', boxSizing: 'border-box' }} />
                        
                        <input type="number" name="age" placeholder='Tuổi' value={age === 0 ? '' : age} onChange={this.handleChange} style={{ width: '100%', padding: '12px', marginBottom: '20px', border: 'none', borderRadius: '5px', backgroundColor: '#00e5ff', fontSize: '16px', color: '#333', boxSizing: 'border-box' }} />
                        
                        <div style={{ display: 'flex', gap: '10px' , justifyContent: "space-between"}}>
                            <button type="submit" style={{ padding: '12px 24px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>Gửi</button>
                            <button type="button" onClick={this.handleClearAll} style={{ padding: '12px 24px', backgroundColor: '#2196f3', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>Xóa tất cả</button>
                        </div>
                    </form>

                    {error && (
                        <div style={{ marginTop: '15px', display: 'flex', justifyContent: 'center', gap: '5px', color: '#f44336'}}>
                            ⚠️ {error}
                        </div>
                    )}

                    {submitted && submittedData && !error && (
                        <div style={{ marginTop: '20px', padding: '20px', backgroundColor: '#e3f2fd', borderRadius: '5px', borderLeft: '4px solid #2196f3' }}>
                            <h3 style={{ margin: '0 0 15px 0', display: 'flex', alignItems: 'center', gap: '8px', color: '#1976d2' }}>✅ Thông tin đã nhập:</h3>
                            <div style={{ lineHeight: '1.8', fontSize: '16px' }}>
                                <div><strong>Họ tên:</strong> {submittedData.name}</div>
                                <div><strong>Email:</strong> {submittedData.email}</div>
                                <div><strong>Tuổi:</strong> {submittedData.age}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}