const Menus = () => {
  const menus = [
    {
      id: 1,
      name: "Menú 1",
      price: "45€",
      description: "Ideal para familias pequeñas o reuniones con amigos.",
      items: ["2 pollos a l’ast, 2 raciones de patatas grandes, 2 bandejas de canelones caseros, 3 tarrinas de all i oli."],
      image: "/images/home/menu1.jpg"
    },
    {
      id: 2,
      name: "Menú 2",
      price: "55€",
      description: "Perfecto para compartir en grupo.",
      items: ["3 pollos a l’ast, 2 raciones de patatas grandes, 2 bandejas de canelones caseros, 3 tarrinas de all i oli."],
      image: "/images/home/menu2.jpg"
    },
    {
      id: 3,
      name: "Menú 3",
      price: "70€",
      description: "Carne tierna y jugosa, asada a la perfección con el sabor de siempre.",
      items: ["4 pollos a l’ast, 3 raciones de patatas grandes, 2 bandejas de canelones caseros, 3 tarrinas de all i oli."],
      image: "/images/home/menu3.jpg"
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
