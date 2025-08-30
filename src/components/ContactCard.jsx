import { useState } from 'react'

const ContactCard = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    mensaje: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Formulario enviado:', formData)
    // Aquí iría la lógica para enviar el formulario
    alert('Mensaje enviado correctamente')
    setFormData({ nombre: '', telefono: '', mensaje: '' })
  }

  const handleComoLlegar = () => {
    window.open('https://maps.google.com/?q=79,+Rambla+De+Sant+Jordi,+08291,+Ripollet+(Barcelona)', '_blank')
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Contacto
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Información de Contacto</h3>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Dirección</h4>
                <p className="text-gray-600">
                  79, Rambla De Sant Jordi<br />
                  08291, Ripollet (Barcelona)<br />
                  · 02 km
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-gray-700 mb-2">Teléfono</h4>
                <a
                  href="tel:935940131"
                  className="text-red-600 hover:text-red-700 transition-colors font-medium"
                >
                  935 94 01 31
                </a>
              </div>

              <div>
                <button
                  onClick={handleComoLlegar}
                  className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors font-medium"
                >
                  Cómo llegar
                </button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8">
              <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2992.5!2d2.175!3d41.496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a4a2f7b7b7b7b7%3A0x1234567890abcdef!2sRambla%20De%20Sant%20Jordi%2C%20Ripollet!5e0!3m2!1sen!2ses!4v1234567890123!5m2!1sen!2ses"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">Envíanos un mensaje</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="telefono"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  value={formData.mensaje}
                  onChange={handleInputChange}
                  required
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors font-medium"
              >
                Enviar mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCard
