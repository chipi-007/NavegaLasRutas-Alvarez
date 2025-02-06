export async function getProduct(id){
  const response = fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  return product;
}
export async function getAllProducts(){
  const response = await fetch('https://fakestoreapi.com/products');
  const data = await response.json();
  return data;
}