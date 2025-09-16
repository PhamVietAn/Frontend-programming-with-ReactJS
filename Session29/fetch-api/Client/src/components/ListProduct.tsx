import { useEffect } from "react";

function getAllProduct() {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(data => {
        console.log(data);
    });
}

export default function ListProduct() {
  useEffect(() => {
    getAllProduct();
  }, []);

  return (
    <>
    </>
  );
}
