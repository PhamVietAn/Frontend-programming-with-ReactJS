import { Component } from 'react'

interface Props {
  onPageChange: (page: number) => void;
}

export default class Bai05_pagination extends Component<Props> {
  render() {
    
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'end', 
        alignItems: 'center',
        marginTop: '20px'
      }}>
        <button
          style={{
            padding: '8px 12px',
            margin: '0 2px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            borderRadius: '50%'
          }}
        >
          &lt;
        </button>
        
        <button
          style={{
            padding: '8px 12px',
            margin: '0 2px',
            border: '1px solid #ddd',
            backgroundColor: '#007bff',
            color: 'white',
            borderRadius: '50%'
          }}
        >
          1
        </button>
        
        <button
          style={{
            padding: '8px 12px',
            margin: '0 2px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '50%'
          }}
        >
          2
        </button>
        
        <button
          style={{
            padding: '8px 12px',
            margin: '0 2px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '50%'
          }}
        >
          3
        </button>
        
        <button
          style={{
            padding: '8px 12px',
            margin: '0 2px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            color: 'black',
            borderRadius: '50%'
          }}
        >
          4
        </button>
        
        <button
          style={{
            padding: '8px 12px',
            margin: '0 2px',
            border: '1px solid #ddd',
            backgroundColor: 'white',
            borderRadius: '50%'
          }}
        >
          &gt;
        </button>
      </div>
    )
  }
}