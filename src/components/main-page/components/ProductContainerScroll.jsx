import ProductCard from './ProductCard'
export default function ProductContainer({title ="title"}) {
  return (
    <div className="container">
      <h5>{title}</h5>
      <div className="scrollable-row">
        <div className="row flex-nowrap scroll-res">
          <div className="col-lg-3 col-md-6 col-sm-6 pb-2"><ProductCard productName="Product 1" imagePath="https://images.unsplash.com/photo-1675516490928-e8fdfdf65ca8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGVjb21tZXJjZXxlbnwwfDB8MHx8fDA%3D" /></div>
          <div className="col-lg-3 col-md-6 col-sm-6 pb-2"><ProductCard productName="Product 2" imagePath="https://images.unsplash.com/photo-1618381297523-e6c0ab13a5b2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGVjb21tZXJjZXxlbnwwfDB8MHx8fDA%3D" /></div>
          <div className="col-lg-3 col-md-6 col-sm-6 pb-2"><ProductCard productName="Product 3" imagePath="https://images.unsplash.com/photo-1683148754073-cfa906017a10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGVjb21tZXJjZXxlbnwwfDB8MHx8fDA%3D" /></div>
          <div className="col-lg-3 col-md-6 col-sm-6 pb-2"><ProductCard productName="Product 4" imagePath="https://images.unsplash.com/photo-1558234200-3efd43232f08?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGVjb21tZXJjZXxlbnwwfDB8MHx8fDA%3D" /></div>
        </div>
      </div>
      <hr />
    </div>
  )
}
