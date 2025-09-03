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
    window.open('https://maps.app.goo.gl/pK3PySsvm4qXnsbV6', '_blank')
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-800">
          Contacto
        </h2>

        <div className="flex justify-center">
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
            <div className="mt-8 ">
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
        </div>
      </div>
    </section>
  )
}

export default ContactCard
