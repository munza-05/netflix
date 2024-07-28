import ProductCard from "./ProductCard";

const data=[
    {id:1, img:"https://th.bing.com/th/id/OIP.-1yRP-VYkmb4zFR8zZAxNwHaHa?pid=ImgDet&w=192&h=192&c=7", name:"Crunchy Crisps", price:"$400"},
    {id:2, img:"https://th.bing.com/th/id/OIF.fEu9scEHS1iWmQE9jIIdiQ?w=185&h=185&c=7&r=0&o=5&pid=1.7", name:"Jewel Cranberries", price:"$200"},
    {id:3, img:"https://th.bing.com/th/id/OIP.Smz974zjovJt8dZR4TdQcgHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7", name:"Jewel Cranberries", price:"$300"},
    {id:3, img:"https://th.bing.com/th/id/OIP.SQFETdyqnK0kmJGALGTqvgHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7", name:"Almond organic", price:"$100"},
];


const FeatureSectionFruits = () => {
  return (
    <div className="container pt-16">
      <div className="lg:flex justify-between items-center">
        <div>
       <h3 className="font-medium text-2xl">Fruits and Vegetables</h3>
       <p className="text-gray-600 mt-2">
        Buy farm fresh fruits and vegetables from onlline store at the best prices
       </p>
        </div>
        <div className="space-x-4 mt-8 lg:mt-0">
            <button className="feature_btn">Fruits</button>
            <button className="text-gray-600 hover:text-[#8fbc8f] ">Vegetables</button>
            <button className="text-gray-600 hover:text-[#8fbc8f] ">Bread and Bakery</button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 pt-8 gap-2">
       <div>
        <img className="w-full h-full object-cover" src="https://img.freepik.com/premium-photo/close-up-beautiful-black-woman-ai-generated-watercolor-illustration_740668-628.jpg" alt="feature"/>
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

export default FeatureSectionFruits;
