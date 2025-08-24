import { Component } from 'react'

interface State {
  productCode: string;
  productName: string;
  price: number;
  quantity: number;
}

export default class Ex05 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      productCode: '',
      productName: '',
      price: 0,
      quantity: 1
    };
  }

handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
  const { name, value } = e.target;
  this.setState({
    ...this.state,
    [name]: name === 'price' || name === 'quantity' ? Number(value) : value
  } as Pick<State, keyof State>);
}

handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
  e.preventDefault();
  
  const product = {
    productCode: this.state.productCode,
    productName: this.state.productName,
    price: this.state.price,
    quantity: this.state.quantity
  };
  
  console.log(product);
}

  render() {
    return (
      <div style={{ width: '320px', padding: '20px', border: '1px solid #ccc', borderRadius: '8px' }}>
        <h2 style={{ textAlign: 'center' }}>Thêm mới sản phẩm</h2>
        <form onSubmit={this.handleSubmit}>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="productCode">Mã sản phẩm</label>
            <br />
            <input
              type="text"
              id="productCode"
              name="productCode"
              value={this.state.productCode}
              onChange={this.handleInputChange}
              style={{ width: '95%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="productName">Tên sản phẩm</label>
            <input
              type="text"
              id="productName"
              name="productName"
              value={this.state.productName}
              onChange={this.handleInputChange}
              style={{ width: '95%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="price">Giá</label>
            <input
              type="text"
              id="price"
              name="price"
              value={this.state.price}
              onChange={this.handleInputChange}
              style={{ width: '95%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="quantity">Số lượng</label>
            <input
              type="number"
              id="quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={this.handleInputChange}
              style={{ width: '95%', padding: '8px', marginTop: '5px', border: '1px solid #ccc', borderRadius: '4px' }}
            >
            </input>
          </div>

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              backgroundColor: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              fontSize: '16px',
              cursor: 'pointer'
            }}
          >
            Đăng ký
          </button>
        </form>
      </div>
    )
  }
}