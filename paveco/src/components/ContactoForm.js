import React from "react";
import { Form, Button, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Resend } from "resend";

const ContactoForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const resend = new Resend("re_WWa9LyAy_5YEsQQL5tjGaqB9HWUcCoi2G");
  const onSubmit = async (data) => {
    const email = await fetch(
      resend.emails.send({
        from: "onboarding@resend.dev",
        to: "nemka201@gmail.com",
        subject: "Hello World",
        html: "<p>Prueba resend</strong>!</p>",
        text: "",
      })
    );
  };

  return (
    <div className="container-fluid form-consulta">
      <h1 className="text-center">Envianos tu consulta</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo de nombre */}
        <Form.Group className="mb-3">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingresa tu nombre"
            {...register("nombre", {
              required: "El nombre es obligatorio",
              maxLength: {
                value: 20,
                message: "El nombre no puede tener más de 20 caracteres",
              },
            })}
          />
          {errors.nombre && (
            <Form.Text className="text-danger">
              {errors.nombre.message}
            </Form.Text>
          )}
        </Form.Group>
        {/* Campo de número de teléfono */}
        <Form.Group className="mb-3">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control
            type="tel"
            placeholder="Ingresa tu número de teléfono"
            {...register("telefono", {
              required: "El número de teléfono es obligatorio",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "El número de teléfono no es válido",
              },
            })}
          />
          {/* Mostramos el mensaje de error si hay alguno */}
          {errors.telefono && (
            <Form.Text className="text-danger">
              {errors.telefono.message}
            </Form.Text>
          )}
        </Form.Group>
        {/* Campo de email */}
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Ingresa tu email"
            {...register("email", {
              required: "El email es obligatorio",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "El email no es válido",
              },
            })}
          />
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
            {...register("mensaje", {
              required: "El mensaje es obligatorio",
              maxLength: {
                value: 2000,
                message: "El mensaje no puede tener más de 2000 caracteres",
              },
            })}
          />
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
              {...register("archivo", {
                validate: {
                  fileType: (value) => {
                    // Si no se sube ningún archivo, retornamos true
                    if (!value[0]) return true;
                    const extension = value[0].name.split(".").pop();
                    const validExtensions = [
                      "pdf",
                      "jpg",
                      "png",
                      "doc",
                      "docx",
                    ];
                    if (!validExtensions.includes(extension)) {
                      return "El archivo debe ser PDF, JPG, PNG o Word";
                    }
                    return true;
                  },
                },
              })}
            />
            {errors.archivo && (
              <Form.Text className="text-danger">
                {errors.archivo.message}
              </Form.Text>
            )}
          </Form.Group>
        </Form.Group>
        <button className="btn btn-contacto btn-enviar mt-3" type="submit">
          Enviar
        </button>
      </Form>
    </div>
  );
};
export default ContactoForm;
