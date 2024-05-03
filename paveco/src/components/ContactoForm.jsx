import React from "react";
import axios from "axios";
import EmailTemplate from "./EmailTemplate";
import Compress from "compress.js";
import ReactDOMServer from "react-dom/server";
import { Form, Modal } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const ContactoForm = () => {
  const reader = new FileReader();
  const [showModal, setShowModal] = useState(false);
  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/");
  };
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const CloseButton = ({ onClick }) => (
    <button
      className="btn btn-close"
      type="button"
      onClick={onClick}
      aria-label="Close"
    >
      <span aria-hidden="true">&times;</span>
    </button>
  );
  const onSubmit = async (data) => {
    const compress = new Compress();
    try {
      const results = await compress.compress([data.archivo[0]], {
        size: 0.5,
        quality: 0.75,
        resize: "jpeg",
      });

      if (results && results.length > 0) {
        const result = results[0];
        if (result && result.data) {
          const imagenBase64 = result.data;
          axios
            .post("https://vast-puce-nightingale-wear.cyclic.app/Resend/Send", {
              from: "admin@resend.dev",
              to: "portalweb@paveco.com.ar",
              subject: "PAVECO - PORTAL WEB",
              html: ReactDOMServer.renderToString(
                <EmailTemplate
                  nombre={data.nombre}
                  telefono={data.telefono}
                  mensaje={data.mensaje}
                  email={data.email}
                  imagen={imagenBase64}
                />
              ),
              text: "Paveco",
            })
            .then((response) => {
              setShowModal(true);
            })
            .catch((error) => {
              alert("Error al enviar el formulario");
            });
        } else {
          // Manejar el caso en el que result o result.data sea undefined
        }
      } else {
        // Manejar el caso en el que results sea undefined o vacío
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container-fluid form-consulta">
      <Modal show={showModal} onHide={handleCloseModal} backdrop="static">
        <Modal.Header closeButton>
          <Modal.Title className="text-center">
            Se envió correctamente el formulario
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">Estas volviendo a Home</Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
      <h1 className="text-center text-anim-left">Envianos tu consulta</h1>
      <Form onSubmit={handleSubmit(onSubmit)}>
        {/* Campo de nombre */}
        <Form.Group className="mb-3">
          <Form.Label className="text-anim-right">Nombre Completo</Form.Label>
          <Form.Control
            className="roboto-regular"
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
          <Form.Label className="text-anim-right">Teléfono</Form.Label>
          <Form.Control
            className="roboto-regular"
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
          <Form.Label className="text-anim-right">Email</Form.Label>
          <Form.Control
            className="roboto-regular"
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
          <Form.Label className="text-anim-right">Mensaje</Form.Label>
          <Form.Control
            className="roboto-regular"
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
          <Form.Group className="mb-3 mt-2">
            <Form.Label className="text-anim-right">Archivo</Form.Label>
            <Form.Control
              className="roboto-regular"
              type="file"
              {...register("archivo", {
                validate: {
                  fileType: (value) => {
                    // Si no se sube ningún archivo, retornamos true
                    if (!value[0]) return true;
                    const extension = value[0].name.split(".").pop();
                    const validExtensions = ["jpg", "png"];
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
