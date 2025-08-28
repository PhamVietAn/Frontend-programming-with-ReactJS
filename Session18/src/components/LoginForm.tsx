import { useState, useCallback } from 'react';

export default function LoginForm() {
    const [form, setForm] = useState({ email: '', password: '' });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = useCallback((e: React.FormEvent) => {
        e.preventDefault();
        console.log(form);
    }, [form]);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email</label><br />
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label>Password</label><br />
                <input
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}