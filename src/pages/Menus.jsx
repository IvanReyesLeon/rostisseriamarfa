const Menus = () => {
  const menus = [
    {
      id: 1,
      name: "Pollo a l'ast",
      price: "10.90€",
      description: "Nuestro clásico, asado lentamente al fuego con el punto justo de sal.",
      items: ["Pollo entero a l'ast"],
      image: "/images/home/photo1.webp"
    },
    {
      id: 2,
      name: "Medio pollo",
      price: "5.50€",
      description: "La ración justa si no quieres el pollo entero, igual de sabroso.",
      items: ["Medio pollo a l'ast"],
      image: "/images/home/photo2.webp"
    },
    {
      id: 3,
      name: "Conejo a l'ast",
      price: "15.00€",
      description: "Carne tierna y jugosa, asada a la perfección con el sabor de siempre.",
      items: ["Conejo a l'ast entero"],
      image: "/images/home/photo3.webp"
    },
    {
      id: 4,
      name: "Canelones (6 unidades)",
      price: "6.50€",
      description: "Receta casera de toda la vida, rellenos de carne y gratinados al horno.",
      items: ["6 canelones caseros"],
      image: "/images/home/photo5.webp"
    },
    {
      id: 5,
      name: "Codillo a l'ast",
      price: "5.90€",
      description: "Un codillo jugoso con piel crujiente, hecho al punto.",
      items: ["Codillo a l'ast"],
      image: "/images/home/photo6.webp"
    },
    {
      id: 6,
      name: "Patatas Ración Grande (4 per.)",
      price: "5.90€",
      description: "Patatas doradas y crujientes, pensadas para compartir.",
      items: ["Ración grande de patatas"],
      image: "/images/home/photo2.webp"
    },
    {
      id: 7,
      name: "Patatas Ración Pequeña (2 per.)",
      price: "3.90€",
      description: "Patatas con el mismo sabor, en formato perfecto para dos.",
      items: ["Ración pequeña de patatas"],
      image: "/images/home/photo7.webp"
    },
    {
      id: 8,
      name: "All i oli",
      price: "1.40€",
      description: "El complemento imprescindible para acompañar tu pollo o tus patatas.",
      items: ["Tarrina de all i oli"],
      image: "/images/home/photo8.webp"
    },
    {
      id: 9,
      name: "Latas",
      price: "1.20€",
      description: "Refrescos bien fríos para acompañar tu comida favorita.",
      items: ["Lata de bebida"],
      image: "/images/home/photo9.webp"
    },
    {
      id: 10,
      name: "Bolsas",
      price: "0.10€",
      description: "Bolsa resistente para llevar tu pedido cómodamente.",
      items: ["Bolsa de transporte"],
      image: "/images/home/photo10.webp"
    }
  ]

  return (
    <div className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">
          Nuestra Carta
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {menus.map((menu) => (
            <div
              key={menu.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
            >
              <img
                src={menu.image}
                alt={menu.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">
                    {menu.name}
                  </h2>
                  <span className="text-2xl font-bold text-red-600">
                    {menu.price}
                  </span>
                </div>

                <p className="text-gray-600 mb-4">{menu.description}</p>

                <div className="mb-6">
                  <h3 className="font-semibold text-gray-700 mb-2">Incluye:</h3>
                  <ul className="space-y-1">
                    {menu.items.map((item, index) => (
                      <li
                        key={index}
                        className="text-sm text-gray-600 flex items-center"
                      >
                        <span className="w-2 h-2 bg-red-600 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition-colors font-medium">
                  Añadir al pedido
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Menus
