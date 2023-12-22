import React from "react";
import { Form, Button, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

const ContactoForm = () => {
  // Creamos una instancia del hook useForm
  const {
    register, // Función para registrar los campos del formulario
    handleSubmit, // Función para manejar el envío del formulario
    formState: { errors }, // Objeto que contiene los errores de validación
  } = useForm();

  // Función que se ejecuta al enviar el formulario
  const onSubmit = (data) => {
    // data es un objeto que contiene los valores de los campos
    console.log(data);
  };

  return (
    <div className="container form-consulta">
      <h1 className="text-center">Envianos tu consulta</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo de nombre */}
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            // Registramos el campo con su nombre y sus reglas de validación
            {...register("nombre", {
              required: "El nombre es obligatorio",
              maxLength: {
                value: 20,
                message: "El nombre no puede tener más de 20 caracteres",
              },
            })}
          />
          {/* Mostramos el mensaje de error si hay alguno */}
          {errors.nombre && (
            <Form.Text className="text-danger">
              {errors.nombre.message}
            </Form.Text>
          )}
        </Form.Group>
        {/* Campo de email */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            // Registramos el campo con su nombre y sus reglas de validación
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "El email no es válido",
              },
            })}
          />
          {/* Mostramos el mensaje de error si hay alguno */}
          {errors.email && (
            <Form.Text className="text-danger">
              {errors.email.message}
            </Form.Text>
          )}
        </Form.Group>
        {/* Campo de mensaje */}
        <Form.Group className="mb-3">
          <Form.Label>Mensaje</Form.Label>
          <Form.Control
            as="textarea"
            rows={10}
            placeholder="Ingresa tu mensaje"
            // Registramos el campo con su nombre y sus reglas de validación
            {...register("mensaje", {
              required: "El mensaje es obligatorio",
              maxLength: {
                value: 2000,
                message: "El mensaje no puede tener más de 2000 caracteres",
              },
            })}
          />
          {/* Mostramos el mensaje de error si hay alguno */}
          {errors.mensaje && (
            <Form.Text className="text-danger">
              {errors.mensaje.message}
            </Form.Text>
          )}
          <Form.Group />
          {/* Campo Archivo  */}
          <Form.Group className="mb-3">
            <Form.Label>Archivo</Form.Label>
            <Form.Control
              type="file"
              // Registramos el campo con su nombre y sus reglas de validación
              {...register("archivo", {
                // Eliminamos la regla required
                validate: {
                  // Función personalizada para validar el tipo de archivo
                  fileType: (value) => {
                    // Si no se sube ningún archivo, retornamos true
                    if (!value[0]) return true;
                    // Obtenemos la extensión del archivo
                    const extension = value[0].name.split(".").pop();
                    // Comprobamos si es una de las extensiones permitidas
                    const validExtensions = [
                      "pdf",
                      "jpg",
                      "png",
                      "doc",
                      "docx",
                    ];
                    if (!validExtensions.includes(extension)) {
                      // Si no es válida, retornamos un mensaje de error
                      return "El archivo debe ser PDF, JPG, PNG o Word";
                    }
                    // Si es válida, retornamos true
                    return true;
                  },
                },
              })}
            />
            {/* Mostramos el mensaje de error si hay alguno */}
            {errors.archivo && (
              <Form.Text className="text-danger">
                {errors.archivo.message}
              </Form.Text>
            )}
          </Form.Group>
        </Form.Group>
        {/* Botón de enviar */}
        <button className="btn btn-contacto btn-enviar mt-3" type="submit">
          Enviar
        </button>
      </Form>
    </div>
  );
};
export default ContactoForm;
