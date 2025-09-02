const MenuList = ({ category }) => {
  // This component will be used to display menu items from the JSON data
  // For now, it shows placeholder content that will be replaced with actual data
  const sampleItems = [
    { 
      name: "Pollo a l'ast", 
      price: "10.90€", 
      description: "Nuestro producto estrella desde 1989. Cocinado lentamente durante 4 horas en máquina rotativa y aderezado con una mezcla exclusiva de especias que elaboramos nosotros mismos. Jugoso, aromático y con el sabor tradicional que nos identifica." 
    },
    { 
      name: "Medio pollo", 
      price: "5.50€", 
      description: "Ideal para una comida rápida sin renunciar al sabor del auténtico pollo a l’ast." 
    },
    { 
      name: "Conejo a l'ast", 
      price: "15.00€", 
      description: "Asado durante 2 horas con el sazonado . Una opción ligera, tierna y llena de sabor." 
    },
    { 
      name: "Canelones (6 unidades)", 
      price: "6.50€", 
      description: "Rellenos de carne, cubiertos con una bechamel suave y gratinados al punto justo. Una receta tradicional hecha en casa que conquista por su sabor." 
    },
    { 
      name: "Codillo a l'ast", 
      price: "5.90€", 
      description: "Cocinado lentamente durante  4 horas y sazonado. Una carne tierna y jugosa que se deshace al primer bocado." 
    },
  
    { 
      name: "Patatas — Ración Grande (4 per.)", 
      price: "5.90€", 
      description: "El acompañamiento favorito de nuestros clientes. Fritas con mimo, sazonadas puestas en la máquina de pollos, donde se impregnan de su jugo para un sabor único.4 personas aprox." 
    },
    { 
      name: "Patatas — Ración Pequeña (2 per.)", 
      price: "3.90€", 
      description: "El acompañamiento favorito de nuestros clientes. Fritas con mimo, sazonadas puestas en la máquina de pollos, donde se impregnan de su jugo para un sabor único.2 personas aprox." 
    },
  
    { 
      name: "All i oli", 
      price: "1.40€", 
      description: "Nuestro inconfundible toque: un all i oli potente y cremoso, elaborado al estilo tradicional. El acompañamiento que no puede faltar." 
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
