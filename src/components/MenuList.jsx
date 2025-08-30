const MenuList = ({ category }) => {
  // This component will be used to display menu items from the JSON data
  // For now, it shows placeholder content that will be replaced with actual data
  const sampleItems = [
    { 
      name: "Pollo a l'ast", 
      price: "10.90€", 
      description: "Nuestro clásico, asado lentamente al fuego con el punto justo de sal y especias." 
    },
    { 
      name: "Medio pollo", 
      price: "5.50€", 
      description: "Ideal para una comida rápida sin renunciar al sabor del auténtico pollo a l’ast." 
    },
    { 
      name: "Conejo a l'ast", 
      price: "15.00€", 
      description: "Carne tierna y jugosa, asada a la perfección, con un sabor inconfundible." 
    },
    { 
      name: "Canelones (6 unidades)", 
      price: "6.50€", 
      description: "Receta casera de toda la vida, rellenos de carne y gratinados con una capa dorada de bechamel." 
    },
    { 
      name: "Codillo a l'ast", 
      price: "5.90€", 
      description: "Codillo sabroso y jugoso, con una piel crujiente que lo hace irresistible." 
    },
  
    { 
      name: "Patatas — Ración Grande (4 per.)", 
      price: "5.90€", 
      description: "Patatas doradas y crujientes, perfectas para compartir en familia o con amigos." 
    },
    { 
      name: "Patatas — Ración Pequeña (2 per.)", 
      price: "3.90€", 
      description: "La guarnición perfecta para acompañar tu pollo a l’ast en su justa medida." 
    },
  
    { 
      name: "All i oli", 
      price: "1.40€", 
      description: "El complemento imprescindible, hecho con ajo y aceite, cremoso y lleno de sabor." 
    },
    { 
      name: "Latas", 
      price: "1.20€", 
      description: "Refrescos bien fríos para acompañar tu comida favorita." 
    },
    { 
      name: "Bolsas", 
      price: "0.10€", 
      description: "Añade una bolsa resistente para llevar tu pedido cómodamente." 
    }
  ]

  return (
    <div className="space-y-4">
      {sampleItems.map((item, index) => (
        <div key={index} className="border-b border-gray-200 pb-4 last:border-b-0">
          <div className="flex justify-between items-start">
            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-600 text-sm mt-1">{item.description}</p>
            </div>
            <span className="text-lg font-bold text-red-600 ml-4">{item.price}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default MenuList
