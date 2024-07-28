import CategoryCard from "./CategoryCard";

const data=[
    {
      id:0,
      name:"Fresh fruits",
      count:"9 products",
      img:"https://th.bing.com/th?id=OIP.4cCTsrDPqZ8ylOfBLY5y2wHaGL&w=273&h=228&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
    },
    {
        id:1,
        name:"Fresh eggs",
        count:"8 products",
        img:"data:image/jpeg;base64,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",
      },
      {
        id:2,
        name:"Canned goods",
        count:"10 products",
        img:"https://th.bing.com/th?id=OIP.cZDgrjXM-TTsMPsVz97J0gHaFd&w=291&h=214&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      },
      {
        id:3,
        name:"Bread and Bakery",
        count:"12 products",
        img:"https://th.bing.com/th/id/OIP.IEJ0_ks2olgvYJCXVsKF2gHaLH?w=185&h=278&c=7&r=0&o=5&pid=1.7",
      },
      {
        id:4,
        name:"Fish",
        count:"9 products",
        img:"https://th.bing.com/th/id/OIP.baNOs4upCYVTgSLTWizAIwHaFO?pid=ImgDet&w=192&h=135&c=7",
      },
      {
        id:5,
        name:"Eggs and Dairy",
        count:"10 products",
        img:"https://th.bing.com/th/id/OIP.KjnNmzWnyojrGBJXp8Im3wHaGB?w=183&h=149&c=7&r=0&o=5&pid=1.7",
      },
      {
        id:6,
        name:"Soft drinks",
        count:"5 products",
        img:"https://th.bing.com/th/id/OIP.5uAZIBOe4DK4r7KUFnVeIwHaHa?w=185&h=185&c=7&r=0&o=5&pid=1.7",
      },
      {
        id:7,
        name:"Fresh fruits",
        count:"9 products",
        img:"https://th.bing.com/th?id=OIP.4cCTsrDPqZ8ylOfBLY5y2wHaGL&w=273&h=228&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2",
      },
];

const Category = () => {
  return (
    <div className="container pt-16">
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
     {data.map((el)=>(
        <CategoryCard
        key={el.id}
        img={el.img}
        name={el.name}
        count={el.count}
        />
        ))}
      </div>
    </div>
  );
};

export default Category;
