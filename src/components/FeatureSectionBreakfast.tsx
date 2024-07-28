import ProductCard from "./ProductCard";

const data=[
    {id:1, img:"https://th.bing.com/th/id/R.f1c356c2f7c9b2f32467301b34b0b9f0?rik=zIaoIKImD2i2NQ&pid=ImgRaw&r=0", name:"Fresh tomatos", price:"$400"},
    {id:2, img:"https://th.bing.com/th/id/OIF.fEu9scEHS1iWmQE9jIIdiQ?w=185&h=185&c=7&r=0&o=5&pid=1.7", name:"Dried Mangoes", price:"$200"},
    {id:3, img:"https://th.bing.com/th/id/OIP.Smz974zjovJt8dZR4TdQcgHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7", name:"Jewel Cranberries", price:"$300"},
    {id:3, img:"https://th.bing.com/th/id/OIP.SQFETdyqnK0kmJGALGTqvgHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7", name:"Almond organic", price:"$100"},
];


const FeatureSectionBreakfast = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
       <h3 className="font-medium text-2xl">Breakfast and Dairy</h3>
       <p className="text-gray-600 mt-2">
        Buy best quality breakfast online from big-basket stop near you
       </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
        
            <button className="feature_btn">Eggs and dairy</button>
            <button className="text-gray-600 hover:text-[#8fbc8f] ">Pizza</button>
            <button className="text-gray-600 hover:text-[#8fbc8f] ">Snacks</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
       <div>
        <img className="w-full h-full object-cover" src="https://th.bing.com/th/id/OIP.O6jCajBneoRBergIkIdUnwHaJG?pid=ImgDet&w=192&h=236&c=7" alt="feature"/>
       </div>
       {data.map((el)=>(
       <ProductCard
       key={el.id}
       img={el.img}
       name={el.name}
       price={el.price}
       />
       ))}
      </div>
    </div>
  );
};

export default FeatureSectionBreakfast;
